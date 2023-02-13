import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SingleHotelPage } from "./pages/hotel";
import { HotelListPage } from "./pages/list";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<HotelListPage />} />
      <Route path="/hotels/:hotelId" element={<SingleHotelPage />} />
    </Routes>
  );
}
export default Routers;
