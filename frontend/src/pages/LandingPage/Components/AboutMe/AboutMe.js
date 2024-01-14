import { AboutMe } from "./AboutMe.style"
import imageMe from "../../../../assets/juan.png"


const AboutMeBox = () => {

    const containerStyle = {
        backgroundImage: `url(${imageMe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };

    return(
        <AboutMe>
        
            <div className="divAboutTop">
                <div className="divTextTitle">About me</div>
                <div className="divTextLine"></div>
                <div className="divTextContent">
                    <div className="textMe">Hi, my name is Juan, born in Brazil and grew up in Europe. 
    At the age of 14 y.o. I returned to my hometown, Salvador, to live the most transformative experience of my life. Completely immersed in a new culture, I learned to see the world from a new perspective, and this combination made me what I am today. I would like to share this experience with you and makes you discover Brazil, understanding your european perspective.
    I lived many years in Europe and worked as business consultant and Financial manager. After my last trip to Brazil I realised that I want to make possible people to come and discover Brazil, respecting the european perspective, helping local population and creating a positive impact in general.         
                    <div className="imageMe" style={containerStyle}></div>
                    </div>
                </div>
            </div>
        
        </AboutMe>

    )
}


export default AboutMeBox