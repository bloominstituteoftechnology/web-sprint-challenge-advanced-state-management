import axios from 'axios'

export const smurfsApi = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {'Content-Type': 'application/json'},
})
export const imageCdn = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/brunopaula/image/',
})
