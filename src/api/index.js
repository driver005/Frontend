import axios from 'axios';

const API = axios.create({ baseURL: 'https://teclab.herokuapp.com/' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).access_token}`;
//     } else {
//         req.headers.Authorization = `Basic YWJjMTIzOnNzaC1zZWNyZXQ=`
//     }
//     return req;
// });

// export const fetchPosts = () => API.get('/api/posts');
// export const createPost = (newPost) => API.post('/api/posts', newPost);
// export const likePost = (id) => API.patch(`/api/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
// 	API.patch(`/api/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/api/posts/${id}`);

// export const signIn = (formData) => API.post('/oauth/token', formData);
// export const signUp = (formData) => API.post('/join', formData);

// export const userInfo = () => API.get('/api/userinfo');

// export const fetchTasks = () => API.get('/api/tasks/');
// export const createTask = (formData) => API.post('/api/tasks/', formData);
// export const deleteallTask = () => API.delete(`/api/tasks/all`);
// export const updateTask = (id, updatedTask) =>
// 	API.patch(`/api/tasks/${id}`, updatedTask);
// export const deleteTask = (id) => API.delete(`/api/tasks/${id}`);

// export const updateNewsletter = (formData) =>
// 	API.patch(`/api/newsletter/confirm`, formData);
// export const createNewsletter = (formData) =>
// 	API.post(`/api/newsletter/subscribe`, formData);

// export const sendEmail = (formData) => API.post(`/api/email`, formData);

// export const bitcoinInfo = () =>
// 	axios.get(
// 		'https://data.messari.io/api/v1/assets/bitcoin/metrics/price/time-series?interval=1d',
// 	);
// export const ethereumInfo = () =>
// 	axios.get(
// 		'https://data.messari.io/api/v1/assets/ethereum/metrics/price/time-series?interval=1d',
// 	);
// export const coinInfo = () =>
// 	axios.get(
// 		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=true',
// 	);

// export const weatherInfo = () =>
// 	axios.get(
// 		'https://api.weatherapi.com/v1/forecast.json?key=dbb41903520645a185094354210106&q=Tübingen&days=10&aqi=yes&alerts=yes',
// 	);

// export const weatherLatest = () => API.get('/api/weather/latest');

// export const fetchMeetings = (period) =>
// 	API.get(`/api/meeting?period=${period}`);
// export const createMeeting = (formData) =>
// 	API.post('/api/meeting/add', formData);

export const printerStatus = () => API.get('/api/printer/status');
