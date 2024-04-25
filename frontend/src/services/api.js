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

export const editRegister = (id, { name, image }) => {
    return axios.patch(`https://devicesserver.onrender.com/api/devices/${id}`, { name, image }) 
        .then(response => {
            console.log('Editado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const addRegister = ({name, email, image}) => {
    return axios.post(`https://devicesserver.onrender.com/api/devices`, { name, email, image }) 
        .then(response => {
            console.log('Adicionado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}