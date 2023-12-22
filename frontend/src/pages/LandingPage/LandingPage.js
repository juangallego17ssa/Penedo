import AboutMeBox from "./Components/AboutMe/AboutMe.js";
import AboutTripBox from "./Components/AboutTrip/AboutTrip.js";
import ContactBox from "./Components/Contact/Contact.js";
import DatePricingBox from "./Components/DatePricing/DatePrincing.js";
import ExtraBox from "./Components/Extra/Extra.js";
import ItineraryBox from "./Components/Itinerary/Itinerary.js";
import NavBar from "./Components/NavBar/NavBar.js";
import PicturesBackgroung from "./Components/PicturesBackground/PicturesBackground.js";
import WeahterBox from "./Components/Weather/Weather.js";
import { Title11, Title12 } from "./LandingPage.style.js";

const LandingPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Title11>DISCOVER THE NORTH-EAST OF BRAZIL</Title11>
      <Title12>A rich and diverse and unexplored region of the country</Title12>
      <PicturesBackgroung></PicturesBackgroung>
      <AboutTripBox></AboutTripBox>
      <AboutMeBox></AboutMeBox>
      <ItineraryBox></ItineraryBox>
      <DatePricingBox></DatePricingBox>
      <ContactBox></ContactBox>
      <WeahterBox></WeahterBox>
      <ExtraBox></ExtraBox>

    </>
  );
};

export default LandingPage;
