import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE

const RATINGS_API = `${API_BASE}ratings`
const ANIME_RATINGS_API = `${API_BASE}anime`
const USER_RATINGS_API = `${API_BASE}users`

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const createRating = async (rating) => {
    const response = await api.post(RATINGS_API, rating)
    return response.data
}

export const updateRating = async (rating) => {
    const response = await api.post(`${RATINGS_API}/${rating.animeId}`, rating)
    return response.data
}

export const findRatingForAnime = async (animeId) => {
    // const {animeId, userId} = ids
    // console.log(animeId)
    const response = await api.get(`${ANIME_RATINGS_API}/${animeId}/ratings`)
    return response.data
}

export const findRatingsByUser = async (userId) => {
    const response = await api.get(`${USER_RATINGS_API}/${userId}/ratings`)
    return response.data
}

