import axios from 'axios';

axios.defaults.withCredentials = true;
const API = axios.create({ baseURL: `http://localhost:8080/`});

//auth api
export const signIn = async ({ email, password }) => await API.post('/auth/login', { email, password });
export const signUp = async (data) => await API.post('/auth/register', data);
export const checkAuth = async () => await API.get('/auth/checkAuth',);
export const logout = async () => await API.get('/auth/logout');


//projects api
export const createProject = async (project,token) => await API.post('project/', project,);
export const getProjectDetails = async (id,token) => await API.get(`/project/${id}`);
export const updateProject = async (id, project,token) => await API.patch(`/project/${id}`,);
export const deleteProject = async (id,token) => await API.delete(`/project/${id}`,);

//complaints api
export const createComplaint = async (formData) => await API.post('complaint/', formData,);
export const getComplaintDetails = async (id,token) => await API.get(`/complaint/${id}`,);


