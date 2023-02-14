import axios from "axios";
import { api } from "../../api";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
export const FeaturedComponent = () => {
  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/v1/hotels/countByCity?cities=bangalore,mysore,bagalkot`
  );

  return (
    <div className="featured">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="mysore"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mysore</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt="mumbai"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt="bangalore"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
