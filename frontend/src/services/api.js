import axios from 'axios'

const api = axios.create({
    baseURL: 'https://devicesserver.onrender.com/api/'
})

export default api

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

export const login = ({ email, password }) => {
    return axios.post('https://devicesserver.onrender.com/api/auth/login', { email, password })
        .then(response => {
            if (response.status === 200) {
                const { token } = response.data
                localStorage.setItem('token', token)
                return response
            }
        })
        .catch(err => {
            console.error(err)
            if (err.response && err.response.data) {
                throw new Error(err.response.data.msg || 'Erro ao fazer login.')
            } else {
                throw new Error('Erro no servidor, tente novamente mais tarde!')
            }
        })
}

export const register = ({username, email, password, confirmPassword}) => {
    return axios.post('https://devicesserver.onrender.com/api/auth/register', {username, email, password, confirmPassword})
    .then(response => {
        if (response.status === 200){
            return response
        }
    })
    .catch(err => {
        console.error(err)
        if (err.response && err.response.data) {
            throw new Error(err.response.data.msg || 'Erro ao registrar.')
        } else {
            throw new Error('Erro no servidor, tente novamente mais tarde!')
        }
    })
}

export const resetPassword = ({ email }) => {
    return axios.post('https://devicesserver.onrender.com/api/auth/reset-password', {email})
    .then(response => {
        if (response.status === 200){
            return response
        }
    })
    .catch(err => {
        console.error(err)
        if (err.response && err.response.data) {
            throw new Error(err.response.data.msg || 'Erro ao enviar email de redefinição de senha.')
        } else {
            throw new Error('Erro no servidor, tente novamente mais tarde!')
        }
    })
}

export const newPassword = (token, { password, confirmPassword }) => {
    return axios.post(`https://devicesserver.onrender.com/api/auth/reset-password/${token}`, {password, confirmPassword})
    .then(response => {
        if(response.status === 200){
            return response
        }
    })
    .catch(err => {
        console.error(err)
        if (err.response && err.response.data) {
            throw new Error(err.response.data.msg || 'Erro ao enviar email de redefinição de senha.')
        } else {
            throw new Error('Erro no servidor, tente novamente mais tarde!')
        }
    })
}