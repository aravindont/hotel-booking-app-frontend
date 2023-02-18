import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { api } from "../../api";
import axios from "axios";
import { NavbarComponent } from "../../components/navbar";
import { HeaderComponent } from "../../components/header";
import "./list.css";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import { SearchItemComponent } from "../../components/searchItem";
export const HotelListPage = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [destination, setDestination] = useState(location.state.destination);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/v1/hotels/getAllHotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`
  );
  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data?.map((item) => (
                  <SearchItemComponent item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
