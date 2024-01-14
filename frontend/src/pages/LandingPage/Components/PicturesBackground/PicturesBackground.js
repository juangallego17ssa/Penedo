import { PictureBox } from "./PicturesBackground.style"
import edificio from "../../../../assets/edificio.jpg"
import frevo from "../../../../assets/frevo.jpg"
import ferry from "../../../../assets/ferry.jpg"
import itaparica from "../../../../assets/itaparica.jpg"
import rio from "../../../../assets/rio.jpg"
import tartaruga from "../../../../assets/tartaruga.jpg"
import campo from "../../../../assets/campo.jpg"
import padre from "../../../../assets/padre.jpg"
import { useEffect, useState } from "react"

const PicturesBackgroung = () => {
    
    
    const [ arrayImages, setArrayImages ] = useState ([]);
    const arrayAllImages = [edificio,frevo,ferry,itaparica, rio, tartaruga, campo, padre]



    const [ position1, setPosition1] = useState ([0,0])
    const [ position2, setPosition2] = useState ([100/Math.ceil(window.innerWidth/300),0])
    const [ position3, setPosition3] = useState ([200/Math.ceil(window.innerWidth/300),0])
    const [ position4, setPosition4] = useState ([300/Math.ceil(window.innerWidth/300),0])
    const [ position5, setPosition5] = useState ([400/Math.ceil(window.innerWidth/300),0])
    const [ position6, setPosition6] = useState ([500/Math.ceil(window.innerWidth/300),0])



    const [numberPictures, setNumberPictures] = useState(Math.ceil(window.innerWidth/300));
    const [screeWidth, setScreenWidth] = useState(window.innerWidth);


    useEffect(() => {

      const handleResize = () => {
        // Adjust the width threshold based on your requirements
        setScreenWidth(window.innerWidth)
        setNumberPictures(Math.ceil(window.innerWidth/300))
      };
  
      // Initial setup
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
    useEffect( () => {

        let newArrayImages=[]
        let oldArrayImages=[...arrayAllImages]
        
        for(let i=0;i<6;i++){
            let position = Math.floor(Math.random() * (oldArrayImages.length-1))
            newArrayImages.push(oldArrayImages[position])
            oldArrayImages.splice(position, 1);
        }
        let px1 = 0
        let py1 = 0 
        let px2 = 100/numberPictures
        let py2 = 0 
        let px3 = 200/numberPictures
        let py3 = 0 
        let px4 = 300/numberPictures
        let py4 = 0 
        let px5 = 400/numberPictures
        let py5 = 0 
        let px6 = 500/numberPictures
        let py6 = 0 


        setArrayImages(newArrayImages)
        // const intervalId = setInterval(() => {
            
        //     let newArrayImages=[]
        //     let oldArrayImages=[...arrayAllImages]

        //     for(let i=0;i<numberPictures;i++){
        //         let position = Math.floor(Math.random() * (oldArrayImages.length))
        //         newArrayImages.push(oldArrayImages[position])
        //         oldArrayImages.splice(position, 1);
        //     }
        //     setArrayImages(newArrayImages)




        //     if ((Math.floor(Math.random()*2))==0) {
        //         // px1 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         px1 = -20
        //         py1 = 0
        //     } else {
        //         py1 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px1 = 0
        //     }
        //     setPosition1([ [px1, py1]])

        //     if ((Math.floor(Math.random()*2))==0) {
        //         // px2 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         px2 = -20
        //         py2 = 0
        //     } else {
        //         py2 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px2 = 100/numberPictures
        //     }
        //     setPosition2([ [px2, py2]])

        //     if ((Math.floor(Math.random()*2))==0) {
        //         px3 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         py3 = 0
        //     } else {
        //         py3 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px3 = 200/numberPictures
        //     }
        //     setPosition3([ [px3, py3]])

        //     if ((Math.floor(Math.random()*2))==0) {
        //         // px4 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         px4 = 100
        //         py4 = 0
        //     } else {
        //         py4 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px4 = 300/numberPictures
        //     }
        //     setPosition4([ [px4, py4]])

        //     if ((Math.floor(Math.random()*2))==0) {
        //         // px5 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         px5 = 100
        //         py5 = 0
        //     } else {
        //         py5 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px5 = 400/numberPictures
        //     }
        //     setPosition5([ [px5, py5]])

        //     if ((Math.floor(Math.random()*2))==0) {
        //         // px5 = (Math.floor(Math.random()*2))==0 ? -20 : 100
        //         px6 = 100
        //         py6 = 0
        //     } else {
        //         py6 = (Math.floor(Math.random()*2))==0 ? -100 : 100
        //         px6 = 500/numberPictures
        //     }
        //     setPosition6([ [px6, py6]])

        // }, 8000);

        // const intervalId2 = setInterval(() => {

        //     if(px1<0){
        //         px1 = px1 + 1
        //     } else if(px1>0) {
        //         px1 = px1 - 1
        //     }
        //     if(py1<0){
        //         py1 = py1 + 2
        //     } else if(py1>0) {
        //         py1 = py1 - 2
        //     }
        //     setPosition1([ px1, py1])

        //     if(px2<100/numberPictures){
        //         px2 = px2 + 1
        //     } else if(px2>100/numberPictures) {
        //         px2 = px2 - 1
        //     }
        //     if(py2<0){
        //         py2 = py2 + 2
        //     } else if(py2>0) {
        //         py2 = py2 - 2
        //     }
        //     setPosition2([ px2, py2])

        //     if(px3<200/numberPictures){
        //         px3 = px3 + 2
        //     } else if(px3>200/numberPictures) {
        //         px3 = px3 - 2
        //     }
        //     if(py3<0){
        //         py3 = py3 + 2
        //     } else if(py3>0) {
        //         py3 = py3 - 2
        //     }
        //     setPosition3([ px3, py3])

        //     if(px4<300/numberPictures){
        //         px4 = px4 + 1
        //     } else if(px4>300/numberPictures) {
        //         px4 = px4 - 1
        //     }
        //     if(py4<0){
        //         py4 = py4 + 2
        //     } else if(py4>0) {
        //         py4 = py4 - 2
        //     }
        //     setPosition4([ px4, py4])

        //     if(px5<400/numberPictures){
        //         px5 = px5 + 1
        //     } else if(px5>400/numberPictures) {
        //         px5 = px5 - 1
        //     }
        //     if(py5<0){
        //         py5 = py5 + 2
        //     } else if(py5>0) {
        //         py5 = py5 - 2
        //     }
        //     setPosition5([ px5, py5])

        //     if(px6<500/numberPictures){
        //         px6 = px6 + 1
        //     } else if(px6>500/numberPictures) {
        //         px6 = px6 - 1
        //     }
        //     if(py6<0){
        //         py6 = py6 + 2
        //     } else if(py6>0) {
        //         py6 = py6 - 2
        //     }
        //     setPosition6([ px6, py6])



        // },40);


        // return () => {
        //     clearInterval(intervalId)
        //     clearInterval(intervalId2)
        // };
    }, []);



    const containerStyle1 = {
        backgroundImage: `url(${arrayImages[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };

      const containerStyle2 = {
        backgroundImage: `url(${arrayImages[1]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };
      const containerStyle3 = {
        backgroundImage: `url(${arrayImages[2]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };
      const containerStyle4 = {
        backgroundImage: `url(${arrayImages[3]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };
      const containerStyle5 = {
        backgroundImage: `url(${arrayImages[4]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };
      const containerStyle6 = {
        backgroundImage: `url(${arrayImages[5]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Add more styles as needed
      };

    return (
        
        <PictureBox myNumberPictures={numberPictures} myScreenWidth={screeWidth} top1={position1[1]+"%"} left1={position1[0]+"%"} top2={position2[1]+"%"} left2={position2[0]+"%"} top3={position3[1]+"%"} left3={position3[0]+"%"} top4={position4[1]+"%"} left4={position4[0]+"%"} top5={position5[1]+"%"} left5={position5[0]+"%"} top6={position6[1]+"%"} left6={position6[0]+"%"}>
            {numberPictures>0 ? <div className="singlePictureBox1 singlePictureBox" style={containerStyle1}></div> : ""}
            {numberPictures>1 ? <div className="singlePictureBox2 singlePictureBox" style={containerStyle2}></div> : ""}
            {numberPictures>2 ? <div className="singlePictureBox3 singlePictureBox" style={containerStyle3}></div> : ""}
            {numberPictures>3 ? <div className="singlePictureBox4 singlePictureBox" style={containerStyle4}></div> : ""}
            {numberPictures>4 ? <div className="singlePictureBox5 singlePictureBox" style={containerStyle5}></div> : ""}
            {numberPictures>5 ? <div className="singlePictureBox6 singlePictureBox" style={containerStyle6}></div> : ""}

            <div className="singlePictureTitleBox">
                <div className="singlePictureBoxTitle1Box">
                    <div className="singlePictureBoxTitle1" >Join the journey and discover new cultures, beautiful landscapes, make connections, enlarge your horizont and take your time</div>
                </div>
                <div className="singlePictureBoxTitle2Box">
                    <div className="singlePictureBoxTitle2">For more info read below and do not hesitate to contact
                        {/* <div className="text">For more info read below and do not hesitate to contact</div> */}
                        <button className="contactButton">Contact</button>   
                    </div>
                    <div className="buttonBox"> 
                    </div>
                </div>
            </div>


        </PictureBox>
        )
}


export default PicturesBackgroung