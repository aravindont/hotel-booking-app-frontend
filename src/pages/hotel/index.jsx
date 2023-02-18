import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FooterComponent } from "../../components/footer";
import { HeaderComponent } from "../../components/header";
import { MailListComponent } from "../../components/mailList";
import { NavbarComponent } from "../../components/navbar";
import useFetch from "../../hooks/useFetch";
import "./hotel.css";
import { api } from "../../api";
export const SingleHotelPage = () => {
  const location = useLocation();
  const HotelId = location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/v1/hotels/get/${HotelId}`
  );
  // const photos = [
  //   {
  //     src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   },
  // ];

  const handleOpen = (i) => {
    setOpen(true);
    setSlideNumber(i);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                onClick={() => setOpen(false)}
                className="close"
                icon={faCircleXmark}
              />
              <FontAwesomeIcon
                className="arrow"
                onClick={() => handleMove("l")}
                icon={faCircleArrowLeft}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt="inside room view"
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                className="arrow"
                onClick={() => handleMove("r")}
                icon={faCircleArrowRight}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <div className="bookNow">Reserve or Book Now!</div>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over Rs.{data.cheapestPrice} at this property get a
              free pickup from your location
            </span>
            <div className="hotelImages">
              {data.photos?.map((img, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    src={img}
                    onClick={() => handleOpen(i)}
                    alt="hotel-rooms"
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a vacation stay!</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet rem quod adipisci voluptatem nulla quis rerum fuga
                  modi architecto ratione.
                </span>
                <h2>
                  <b>Rs.1000</b> <small>per night</small>
                </h2>
                <button>Reserve or Book Now!!</button>
              </div>
            </div>
          </div>
          <MailListComponent />
          <FooterComponent />
        </div>
      )}
    </div>
  );
};
