import { DatePricing } from "./DatePricing.style"




const DatePricingBox = () => {


    
    return(
        <DatePricing>
            <div className="datePricingContent">
                <div className="divTextTitle">Dates & Pricing</div>
                <div className="divTextLine"></div>
                <div className="divTextContentBox">
                    <div className="divTextContentBox">
                        <div className="divTextContentText">We have organized 3 tours in 2024, starting mid-august, after the rainy season, and before the hot Brazilian summer. Temperatures will still be warm, though (27-30°C)
                        </div>
                        
                        <div className="divDatesBox">
                            <div className="divDatesText">15 Aug - 5 Sept</div>
                            <div className="divDatesAvailability">AVAILABLE</div>
                        </div>
                        <div className="divDatesBox">
                            <div className="divDatesText">15 Aug - 5 Sept</div>
                            <div className="divDatesAvailability">AVAILABLE</div>
                        </div>
                        <div className="divDatesBox">
                            <div className="divDatesText">15 Aug - 5 Sept</div>
                            <div className="divDatesAvailability">AVAILABLE</div>
                        </div>
                        <div className="divTextContentText">Final dates may change accordingly to participants preferences. Confirmation on Feb 28th
Your best date is not there? Send me a message!
                        </div>
                        <div className="divTextContentBottom">
                            <div className="included">
                                <div className="includedTitle">NOT INCLUDED</div>
                                <ul className="includedList">
                                    <li>Flights from Europe</li>
                                    <li>Health Insurance (mandatory)</li>
                                    <li>Alcoholic drink</li>
                                    <li>Activities not planned on the route</li>
                                    <li>Souvenirs or gifts</li>
                                </ul>
                            </div>
                            <div className="price">
                                <div className="priceText">PRICE</div>
                                <div className="priceValue">3'200 CHF</div>
                            </div>
                            <div className="included">
                                <div className="includedTitle">INCLUDED</div>
                                <ul className="includedList">
                                    <li>All accommodations</li>
                                    <li>All meals (3/day), water and soft drinks</li>
                                    <li>Entrance and guide for all tours included on the description</li>
                                    <li>All transportation (transfer, activities, ..)</li>
                                    <li>SIM-Card with 5GB data volume</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DatePricing>

    )


}



export default DatePricingBox

