import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { api } from "../../api";
import axios from "axios";
export const HotelListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${api}/api/v1/hotels/getAllHotels`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};
