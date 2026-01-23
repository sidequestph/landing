import { useState, useEffect, useCallback, useRef } from 'react';
import apiClient, { ApiError } from '../lib/api';
import { AxiosRequestConfig, AxiosError, CanceledError } from 'axios';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export const useFetch = <T>(url: string, config?: AxiosRequestConfig) => {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true, // Start loading immediately
    error: null,
  });

  // Use a ref to store the abort controller so we can cancel requests on unmount
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiClient.get<T>(url, {
        ...config,
        signal: controller.signal,
      });
      
      setState({ data: response.data, loading: false, error: null });
    } catch (err) {
      if (err instanceof CanceledError) {
        return; // Ignore canceled requests
      }
      
      const error = err as AxiosError<ApiError>;
      const errorData = error.response?.data || { message: error.message };
      
      setState({
        data: null,
        loading: false,
        error: errorData,
      });
    }
  }, [url, config]); // Warning: config object reference stability matters here

  useEffect(() => {
    fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};
