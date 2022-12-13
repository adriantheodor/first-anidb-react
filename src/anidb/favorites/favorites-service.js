import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE
const FAVS_API = `${API_BASE}favorites`
const USER_FAVS_API = `${API_BASE}users`
const IS_FAV_API = `${API_BASE}anime`

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const addToFavorites = async (favorite) => {
    const response = await api.post(FAVS_API, favorite)
    return response.data
}

export const removeFromFavorites = async (animeId) => {
    const response = await api.delete(`${FAVS_API}/${animeId}`)
    // console.log(response)
    return response.data
}

export const findFavoritesByUser = async (userId) => {
    const response = await api.get(`${USER_FAVS_API}/${userId}/favorites`)
    return response.data
}

export const isFavorite = async (animeId) => {
    const response = await api.get(`${IS_FAV_API}/${animeId}/isfavorite`)
    return response.data
}