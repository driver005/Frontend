import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).access_token}`;
  } else {
    req.headers.Authorization = `Basic YWJjMTIzOnNzaC1zZWNyZXQ=`
  }
  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/oauth/token', formData);
export const signUp = (formData) => API.post('/join', formData);

export const userInfo = () => API.get('/api/userinfo')

export const fetchTasks = () => API.get('/api/tasks/')
export const createTask = (formData) => API.post('/api/tasks/', formData)
export const deleteallTask = () => API.delete(`/api/tasks/all`)
export const updateTask = (id, updatedTask) => API.patch(`/api/tasks/${id}`, updatedTask)
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`)