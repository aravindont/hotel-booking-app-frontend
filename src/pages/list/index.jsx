import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { api } from "../../api";
import axios from "axios";
export const List = () => {
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading......"
      ) : (
        <>
          {data &&
            data.length &&
            data?.map((hotel, index) => (
              <div key={index}>
                <h1>{hotel.name}</h1>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
