import "./featuredHotels.css";
import { api } from "../../api";
import useFetch from "../../hooks/useFetch";

export const FeaturedHotelsComponent = () => {
  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/v1/hotels/getAllHotels?featured=true`
  );
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt="featured hotels"
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from Rs.{item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
