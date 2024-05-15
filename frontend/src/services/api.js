import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devicesserver.onrender.com/api/'
});

export default api;

export const deleteRegister = (id) => {
    return axios.delete(`https://devicesserver.onrender.com/api/devices/${id}`)
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const editRegister = (id, { name, description, image }) => {
    return axios.patch(`https://devicesserver.onrender.com/api/devices/${id}`, { name, description, image }) 
        .then(response => {
            console.log('Editado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const addRegister = ({name, description, email, image}) => {
    return axios.post(`https://devicesserver.onrender.com/api/devices`, { name, description, email, image }) 
        .then(response => {
            console.log('Adicionado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const sendMail = ({email, name, message}) => {
    return axios.post(`https://devicesserver.onrender.com/api/devices/send`, { email, name, message }) 
        .then(response => {
            console.log('Enviado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}