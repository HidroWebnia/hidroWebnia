import axios from 'axios'

const api = axios.create({
    baseURL: 'https://devicesserver.onrender.com/api/'
})


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default api


export const deleteRegister = (id) => {
    return api.delete(`devices/${id}`)
        .then(response => {
            console.log(response)
            window.location.reload()
        })
        .catch(err => console.log(err))
}


export const editRegister = (id, { name, description, image }) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    if (image) {
        formData.append('image', image)
    }

    return api.patch(`devices/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then(response => {
        console.log('Editado', response)
        window.location.reload()
    })
    .catch(err => console.log(err))
}


export const addRegister = ({ name, description, email, image }) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('email', email)
    
    if (image) {
        formData.append('image', image)
    }

    return api.post('devices', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then(response => {
        console.log('Adicionado', response)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

export const login = ({ email, password }) => {
    return api.post('auth/login', { email, password })
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


export const register = ({ username, email, password, confirmPassword }) => {
    return api.post('auth/register', { username, email, password, confirmPassword })
        .then(response => {
            if (response.status === 201) {
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


export const resetPassword = (email) => {
    return api.post('auth/reset-password', { email })
        .then(response => {
            if (response.status === 200) {
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
    return api.post(`auth/reset-password/${token}`, { password, confirmPassword })
        .then(response => {
            if (response.status === 200) {
                return response
            }
        })
        .catch(err => {
            console.error(err)
            if (err.response && err.response.data) {
                throw new Error(err.response.data.msg || 'Erro ao redefinir senha.')
            } else {
                throw new Error('Erro no servidor, tente novamente mais tarde!')
            }
        })
}
