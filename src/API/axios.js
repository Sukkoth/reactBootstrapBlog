import axios from 'axios';
const localData = localStorage.getItem('auth');

export default axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${JSON.parse(localData)?.accessToken}`,
    },
    withCredentials: true,
});
