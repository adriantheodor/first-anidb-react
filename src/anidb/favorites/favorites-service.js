import axios from "axios";

const FAVS_API = 'https://anidb-1.herokuapp.com/api/favorites'
const USER_FAVS_API = 'https://anidb-1.herokuapp.com/api/users'
const IS_FAV_API = 'https://anidb-1.herokuapp.com/api/anime'

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