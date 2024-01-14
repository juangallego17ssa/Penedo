import { DestinationStyle } from "./Destination.style"




const Destination= ({myDay, clickedElement}) => {


    
    return(
        <DestinationStyle id={myDay[0].match(/\d+/)} showElement={clickedElement>=myDay[0].match(/\d+/)}>
            <div className="day">{myDay[0]}</div>
            <div className="description">{myDay[1]}</div>
        </DestinationStyle>

    )


}

export default Destination
