import axios from 'axios';

class API {
  constructor() {
    this.baseURL = 'http://localhost:8080/api/';
    this.token = localStorage.getItem('token');
    this.headers = {
      'Content-Type': 'application/json',
      'Auth-Token': this.token
    };
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: this.headers
    });
  }

  signUp(role, data) {
    return this.axiosInstance.post(`/user/signup/${role}`, data);
  }

  logIn(role, data) {
    return this.axiosInstance.post(`/user/login/${role}`, data);
  }

  getCompanies() {
    return this.axiosInstance.get('/companies');
  }

  getCompany(id) {
    return this.axiosInstance.get(`/companies/${id}`);
  }

  deleteCompany(id) {
    return this.axiosInstance.delete(`/companies/${id}`);
  }

  getStudents() {
    return this.axiosInstance.get('/students');
  }

  getStudent(id) {
    return this.axiosInstance.get(`/students/${id}`);
  }

  deleteStudent(id) {
    return this.axiosInstance.delete(`/students/${id}`);
  }

  getJobs() {
    return this.axiosInstance.get('/jobs');
  }

  getJob(id) {
    return this.axiosInstance.get(`/jobs/${id}`);
  }

  postJob(data) {
    return this.axiosInstance.post('/jobs', data);
  }

  applyToJob(id) {
    return this.axiosInstance.patch(`/jobs/${id}/apply`);
  }

  deleteJob(id) {
    return this.axiosInstance.delete(`/jobs/${id}`);
  }

  getProfile() {
    return this.axiosInstance.get('/profile');
  }

  getProfileById(id) {
    return this.axiosInstance.get(`/profile/${id}`);
  }

  updateProfile(data) {
    return this.axiosInstance.patch(`/profile`, data);
  }
}

export default API;
