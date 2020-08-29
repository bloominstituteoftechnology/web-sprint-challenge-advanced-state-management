import axios from 'axios'

export const smurfsApi = axios.create({
    baseURL: 'http://localhost:3333',

});