import { Link } from "react-router-dom";
import "./searchItem.css";
export const SearchItemComponent = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m2 fullbed
        </span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCacelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$$</span>
          <span>Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};
