import axios from "axios";

//const BASE_API_URL = 'http://localhost:4000'
//const USER_API_URL = 'http://localhost:4000/users'


const API_BASE = process.env.REACT_APP_API_BASE
const USER_API = `${API_BASE}users/`


const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API}${uid}`)
    const user = response.data
    return user
}

export const register = async (user) => {
    const response = await api.post(`${API_BASE}register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${API_BASE}login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${API_BASE}logout`)
    return response.data
}
export const profile = async () => {
    const response = await api.post(`${API_BASE}profile`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await api.get(USER_API)
    return response.data
}

export const findUsersList = async () => {
    const response = await api.get(USER_API)
    return response.data
}

export const updateCurrentUser = async (user) => {
    const response = await api.put(USER_API, user)
    return response.data
}

export const createUser = () => {

}

export const deleteUser = async (user) => {
    const response = await api.delete(`${USER_API}${user.uid}`)
    return response.data
}