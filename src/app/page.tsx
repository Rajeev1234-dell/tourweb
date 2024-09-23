import Choose from "@/Components/ChooseSection/Choose";
import {
  heroSection,
  footerSection,
  subscribesection,
  chooseSection,
  destinationSection,
  tripSection,
  partnerSection,
  flightSection,
  aboutSection,
  mapSection,
  ratingSection,
  travelSection,
} from "../JSON/json";
import Footer from "@/Components/Footer/Footer";
import Subscribe from "@/Components/SubscribeSection/Subscribe";
import Destination from "@/Components/DestinationSection/Destination";
import Trip from "@/Components/TripSection/Trip";
import Partner from "@/Components/PartnerSection/Partner";
import About from "@/Components/AboutSection/About";
import Map from "@/Components/MapSection/Map";
import Rating from "@/Components/RatingSection/Rating";
import HeroSection from "@/Components/HeroSection/HeroSection";
import TravelerSection from "@/Components/TravelerSection/TravelerSection";

export default function Home() {
  return (
    <>
      <HeroSection herodata={heroSection} />
      <Partner data={partnerSection} />
      <Destination placedata={destinationSection} />
      <About aboutdata={aboutSection} />
      <Choose choosedata={chooseSection} />
      <Rating data={ratingSection} />
      <Trip tripdata={tripSection} />
      <Partner data={flightSection} />
      <Map mapdata={mapSection} />
      <TravelerSection traveldata={travelSection} />
      <Subscribe subscribedata={subscribesection} />
      <Footer footerdata={footerSection} />
    </>
  );
}
