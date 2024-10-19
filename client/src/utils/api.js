import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this to match your server's URL
  timeout: 10000, // Optional timeout setting
});

// Function to handle API requests
const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};

// Wrapper functions for different HTTP methods
export const get = (url) => handleRequest(() => api.get(url));
export const post = (url, data) => handleRequest(() => api.post(url, data));
export const patch = (url, data) => handleRequest(() => api.patch(url, data));
export const del = (url) => handleRequest(() => api.delete(url));
