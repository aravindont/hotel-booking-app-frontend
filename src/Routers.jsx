import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { List } from "./pages/list";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}
export default Routers;
