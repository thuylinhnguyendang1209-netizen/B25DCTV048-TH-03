import { useState, useEffect } from "react";

const API_URL = "https://6af52938f6270fa08d67cabc.mockapi.io/expenses";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addData = async (newItem) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    fetchData();
  };

  const deleteData = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, addData, deleteData };
};
