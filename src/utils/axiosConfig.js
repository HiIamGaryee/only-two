import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
console.log("Axios base URL:", baseURL);


const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'projectId': '66e69775547fecea4596d224',
        'environmentId': '66e69775547fecea4596d225',

    },
});

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api; 