import { FeaturedComponent } from "../../components/featured";
import { HeaderComponent } from "../../components/header";
import { NavbarComponent } from "../../components/navbar";
import "./home.css";
export const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <div className="homeContainer">
        <FeaturedComponent />
      </div>
    </div>
  );
};
