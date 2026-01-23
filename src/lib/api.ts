import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Define the structure of the error response from the API
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

// Create the Axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle global errors here (e.g., 401 Unauthorized, 403 Forbidden, 500 Server Error)
    const status = error.response?.status;
    
    if (status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.warn('Unauthorized access - redirecting to login...');
    } else if (status === 403) {
      console.warn('Forbidden access');
    } else if (status >= 500) {
      console.error('Server error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Generic GET method
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return apiClient.get<T>(url, config).then((response) => response.data);
};

// Generic POST method
export const post = <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
  return apiClient.post<T>(url, data, config).then((response) => response.data);
};

// Generic PUT method
export const put = <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
  return apiClient.put<T>(url, data, config).then((response) => response.data);
};

// Generic DELETE method
export const del = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return apiClient.delete<T>(url, config).then((response) => response.data);
};

export default apiClient;
