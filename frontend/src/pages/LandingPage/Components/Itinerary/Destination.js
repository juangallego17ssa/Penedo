import { DestinationStyle } from "./Destination.style"




const Destination= ({myDay}) => {


    
    return(
        <DestinationStyle>
            <div className="day">{myDay[0]}</div>
            <div className="description">{myDay[1]}</div>
        </DestinationStyle>

    )


}

export default Destination
