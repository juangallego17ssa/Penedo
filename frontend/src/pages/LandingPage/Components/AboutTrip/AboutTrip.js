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
      <img className="reveal-image" src={frevo} alt="Revealing" />
      <div
        className="reveal-mask"
        style={{
          background: `linear-gradient(to right, transparent 0%, red ${divPosition.top*100}%, blue 100%)`,
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
    </div>
    </AboutTrip>
    )
}


export default AboutTripBox