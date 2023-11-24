import { useState, useEffect } from "react";

const useFetch = (
  endpoint: string,
  params?: { method?: string; body?: BodyInit_ | undefined }
  // dependencies?: string[] = []
) => {
  const [data, setData] = useState<{ [key: string]: string | number } | null>(
    null
  );
  const [error, setError] = useState<Error | unknown | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const config = {
    method: params?.method || "get",
    body: params?.body || null,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(endpoint, config);
        const responseData = await response.json();
        setData({status: response.status, ...responseData });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};

export { useFetch };
