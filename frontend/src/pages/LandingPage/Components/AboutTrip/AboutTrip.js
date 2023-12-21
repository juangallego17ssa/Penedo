import { useEffect, useRef, useState } from "react";
import { AboutTrip } from "./AboutTrip.style"
import frevo from "../../../../assets/frevo.jpg"



const AboutTripBox = () => {
    


    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
    const divRef = useRef(null);


    useEffect(() => {
      const handleScroll = () => {
        const newScrollPercentage =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        setScrollPercentage(newScrollPercentage);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
        const updateDivPosition = () => {
          const div = divRef.current;
          if (div) {
            const divRect = div.getBoundingClientRect();
            setDivPosition({
              top: (window.innerHeight-divRect.top)/window.innerHeight,
              left: divRect.left + window.scrollX,
            });
          }
        };

        updateDivPosition();
        window.addEventListener('resize', updateDivPosition);
        window.addEventListener('scroll', updateDivPosition);
    
        return () => {
          window.removeEventListener('resize', updateDivPosition);
          window.removeEventListener('scroll', updateDivPosition);
        };
      }, []);


return (
        
    <AboutTrip>
      <div className="divAboutTop">
        <div className="divImage">
        </div>
        <div className="divText">
          <div className="divTextTitle">About the trip</div>
          <div className="divTextLine"></div>
          <div className="divTextContent">To get to know brazil on its own is not always easy and guided tours often focus only on the major touristical attractions and fail to show you the reality of the country. 
  My goal is to get you close to a backpacking experience, but with the advantage of avoiding struggle and frustration. 
  How many person. Bus
  You get a general overview of our culture and history, discover our nature and geography, experience Brazilian lifestyle, taste new flavors, immerse in our music, and most importantly as a traveler: to see life from a different perspective.</div>
        </div>
      </div>
      <div className="divAboutBottom">
        <div className="aboutBottomTitle">You better suit the group if you...</div>
        <div className="aboutBottomList">
          <ul>You want to travel in a small selected group</ul>
          <ul>You would like to get to know Brazil from a new perspective</ul>
          <ul>You are eclectic and like city, beach, nature</ul>
          <ul>You are willing to meet new interesting people</ul>
        </div>
      </div>





{/*       
      <img className="reveal-image" src={frevo} alt="Revealing" style={{
          height:"60px"
        }} />
      <div
        className="reveal-mask"
        style={{
          background: `linear-gradient(to right, transparent 0%, red ${divPosition.top*100}%, blue 100%)`,
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%"
        }}
      >{divPosition.top*100}</div>


    <div>
      <div
        ref={divRef}
        className="your-div"
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
      >
        Your div content
      </div>
      <p>
        Div position - Top: {divPosition.top}, Left: {divPosition.left}, ,{window.scrollY}
      </p>
    </div> */}
    </AboutTrip>
    )
}


export default AboutTripBox