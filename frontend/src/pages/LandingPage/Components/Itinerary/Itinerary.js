import { Itinerary } from "./Itinerary.style"
import nordeste from "../../../../assets/nordeste.png"
import Destination from "./Destination"




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


    
    return(
        <Itinerary>
            <div className="itineraryImgContainer">
                <div className="itineraryImg">
                    {/* <img src={nordeste}></img> */}
                </div>
            </div>

            <div className="itineraryListContainer">
                <div className="itineraryListBox">
                    <div className="itineraryListBoxInner">
                    {daysArray.map((day)=>(
                        <Destination myDay={day} key={day[0]}></Destination>
                    ))}
                    </div>
                </div>
            </div>
        </Itinerary>

    )


}

export default ItineraryBox
