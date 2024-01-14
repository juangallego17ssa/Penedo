import { Itinerary } from "./Itinerary.style"
import Destination from "./Destination"
import destination_gray from "../../../../assets/destination_gray.png"
import destination_red from "../../../../assets/destination_red.png"
import nordeste from "../../../../assets/nordeste.png"
import { useState } from "react"





const ItineraryBox = () => {

    const daysArray = [
        ["Day 1:", "Salvador - Barra beach, the heart of the city"],
        ["Day 2:", "Salvador"],
        ["Day 3:", "Salvador"],
        ["Day 4:", "Salvador"],
        ["Day 5:", "Salvador"],
        ["Day 6", "Salvador"],
        ["Day 7", "Salvador"],
        ["Day 8", "Salvador"],
        ["Day 9", "Salvador"],
        ["Day 10", "Salvador"],
        ["Day 11", "Salvador"],
        ["Day 12", "Salvador"],
        ["Day 13", "Salvador"],
        ["Day 14", "Salvador"],
        ["Day 15", "Salvador"],
        ["Day 16", "Salvador"],
        ["Day 17", "Salvador"],
        ["Day 18", "Salvador"],
        ["Day 19", "Salvador"],
        ["Day 20", "Salvador"],
        ["Day 21", "Salvador"],
    ]

    const [clickedElement, setClickedElement] = useState(0) 

    const handleHover = (event) => {
        // Execute your code here based on the element being hovered
        if (event.target.parentNode.id) {
            const hoveredElement = parseInt(event.target.parentNode.id);
            setClickedElement(hoveredElement)
        }
    };


    const handleMouseLeave = () => {
        setClickedElement(0)
      };
    
    return(
        <Itinerary>
            <div className="itineraryImgContainer">
                <div className="itineraryImgBox">
                    <img className="itineraryImg" src={nordeste} />
                    <img src={destination_gray} className="salvador destination"></img>
                    <img src={destination_gray} className="lago destination"></img>
                    <img src={destination_gray} className="esplanada destination"></img>
                    <img src={destination_gray} className="canudos destination"></img>
                    <img src={destination_gray} className="piranhas destination"></img>
                    <img src={destination_gray} className="penedo destination"></img>
                    <img src={destination_gray} className="praia destination"></img>
                    <img src={destination_gray} className="palmares destination"></img>
                    <img src={destination_gray} className="recife destination"></img>
                    {clickedElement>=1 ? <img src={destination_red} className="salvador destination"/> : ""}
                    {clickedElement>=3 ? <img src={destination_red} className="lago destination"/> : ""}
                    {clickedElement>=6 ? <img src={destination_red} className="esplanada destination"/> : ""}
                    {clickedElement>=10 ? <img src={destination_red} className="canudos destination"/> : ""}
                    {clickedElement>=13 ? <img src={destination_red} className="piranhas destination"/> : ""}
                    {clickedElement>=15 ? <img src={destination_red} className="penedo destination"/> : ""}
                    {clickedElement>=17 ? <img src={destination_red} className="praia destination"/> : ""}
                    {clickedElement>=19 ? <img src={destination_red} className="palmares destination"/> : ""}
                    {clickedElement>=20 ? <img src={destination_red} className="recife destination"/> : ""}
                </div>
            </div>

            <div className="itineraryListContainer">
                <div className="itineraryListBox" onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>
                    <div className="itineraryListBoxInner" >
                    {daysArray.map((day)=>(
                        <Destination myDay={day} key={day[0]} clickedElement={clickedElement}></Destination>
                    ))}
                    </div>
                </div>
            </div>
        </Itinerary>

    )


}

export default ItineraryBox
