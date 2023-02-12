import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routers from "./Routers.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}
export default App;
