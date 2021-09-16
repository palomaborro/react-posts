// Configuración Axios
import axios from 'axios';

const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

// Para ahorrarnos el res.data
http.interceptors.response.use(
    (res) => res.data,
    (err) => console.error(err)
)

export default http;