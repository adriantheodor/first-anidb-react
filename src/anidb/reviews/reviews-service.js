import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE

const REVIEWS_API = `${API_BASE}/reviews`

const ANIME_REVIEWS_API = `${API_BASE}/anime`

const USER_REVIEWS_API = `${API_BASE}/users`

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const createReview = async (review) => {
    const response = await api.post(REVIEWS_API, review)
    return response.data
}

export const deleteReview = async (reviewId) => {
    const response = await api.delete(`${REVIEWS_API}/${reviewId}`)
    return response.data
}

export const findReviewsByAnime = async (animeId) => {
    const response = await api.get(`${ANIME_REVIEWS_API}/${animeId}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${USER_REVIEWS_API}/${author}/reviews`)
    return response.data
}