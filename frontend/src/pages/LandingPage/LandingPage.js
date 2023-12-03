import NavBar from "./Components/NavBar/NavBar.js";
import PicturesBackgroung from "./Components/PicturesBackground/PicturesBackground.js";
import { Title11, Title12 } from "./LandingPage.style.js";

const LandingPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Title11>DISCOVER THE NORTH-EAST OF BRAZIL</Title11>
      <Title12>A rich and diverse and unexplored region of the country</Title12>
      <PicturesBackgroung></PicturesBackgroung>
    </>
  );
};

export default LandingPage;
