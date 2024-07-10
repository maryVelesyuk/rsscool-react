import { useState } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (
    url: string,
    method: Method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    setLoading(true);

    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      setLoading(false);
      return data;
    } catch (e: unknown) {
      setLoading(false);
      setError(true);
      throw e;
    }
  };

  const clearError = () => {
    setError(false);
  };

  return { loading, request, error, clearError };
};
