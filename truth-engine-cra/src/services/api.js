import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api';
export const getAnalysis = (topic) => axios.post(`${BASE_URL}/analyze`, { topic });