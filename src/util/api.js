import axios from "axios";
//*(all requests in development are proxied to http:localhost:${process.env.SERVER_PORT}) //* configured in webpack.development.js
const api = axios.create({
    baseURL: `/api/`,
});

export default api;
