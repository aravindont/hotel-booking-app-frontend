import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FooterComponent } from "../../components/footer";
import { HeaderComponent } from "../../components/header";
import { MailListComponent } from "../../components/mailList";
import { NavbarComponent } from "../../components/navbar";
import "./hotel.css";

export const SingleHotelPage = () => {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const photos = [
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
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
          <h1 className="hotelTitle">Ganesh Grand</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Kuvempu street mysore</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs.500 at this property get a free pickup from your
            location
          </span>
          <div className="hotelImages">
            {photos.map((img, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={img.src}
                  onClick={() => handleOpen(i)}
                  alt="hotel-rooms"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Stay in the hill stations of mysore
              </h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                illum numquam et nostrum at id, optio aut perspiciatis suscipit
                corporis? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Nostrum, quaerat.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a vacation stay!</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                rem quod adipisci voluptatem nulla quis rerum fuga modi
                architecto ratione.
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
    </div>
  );
};
