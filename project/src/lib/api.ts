import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function getChatCompletion(messages: Array<{ role: string; content: string }>) {
  try {
    const response = await api.post('/api/chat', { messages });
    return response.data;
  } catch (error) {
    console.error('Chat completion error:', error);
    throw new Error('Failed to get AI response');
  }
}

export async function processDocument(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/api/process-document', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Document processing error:', error);
    throw new Error('Failed to process document');
  }
}