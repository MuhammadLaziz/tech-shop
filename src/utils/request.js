import axios from 'axios'
// import { parseCookies } from 'nookies'

// ! For normal request
export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

// ! For request with token
// export const requestWithAuth = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     headers: {
//         Authorization: parseCookies()?.access_token || '',
//     },
// })
