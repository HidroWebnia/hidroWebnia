import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3080/api'
});

export default api;

export const deleteRegister = (id) => {
    return axios.delete(`http://localhost:3080/api/devices/${id}`)
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const editRegister = (id, { name, description, image }) => {
    return axios.patch(`http://localhost:3080/api/devices/${id}`, { name, description, image }) 
        .then(response => {
            console.log('Editado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const addRegister = ({name, description, email, image}) => {
    return axios.post(`http://localhost:3080/api/devices`, { name, description, email, image }) 
        .then(response => {
            console.log('Adicionado', response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}