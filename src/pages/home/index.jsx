import { FeaturedComponent } from "../../components/featured";
import { FeaturedHotelsComponent } from "../../components/featuredHotels";
import { FooterComponent } from "../../components/footer";
import { HeaderComponent } from "../../components/header";
import { MailListComponent } from "../../components/mailList";
import { NavbarComponent } from "../../components/navbar";
import { PropertyListComponent } from "../../components/propertyList";
import "./home.css";
export const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <div className="homeContainer">
        <FeaturedComponent />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyListComponent />
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <FeaturedHotelsComponent />
        <MailListComponent />
        <FooterComponent />
      </div>
    </div>
  );
};
