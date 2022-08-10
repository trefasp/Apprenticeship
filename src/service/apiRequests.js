import axios from "axios";

const BASE_REQUEST_URL = 'http://localhost:3000';

export const fetchOrders = () => {
    return axios.get(`${BASE_REQUEST_URL}/orders`).then((res) => res.data);
};
