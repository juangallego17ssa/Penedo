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
    const [ position2, setPosition2] = useState ([20,0])
    const [ position3, setPosition3] = useState ([40,0])
    const [ position4, setPosition4] = useState ([60,0])
    const [ position5, setPosition5] = useState ([80,0])
    
    useEffect( () => {

        let newArrayImages=[]
        let oldArrayImages=[...arrayAllImages]
        
        for(let i=0;i<5;i++){
            let position = Math.floor(Math.random() * (oldArrayImages.length-1))
            newArrayImages.push(oldArrayImages[position])
            oldArrayImages.splice(position, 1);
        }
        let px1 = 0
        let py1 = 0 
        let px2 = 20
        let py2 = 0 
        let px3 = 40
        let py3 = 0 
        let px4 = 60
        let py4 = 0 
        let px5 = 80
        let py5 = 0 

        setArrayImages(newArrayImages)
        const intervalId = setInterval(() => {
            
            let newArrayImages=[]
            let oldArrayImages=[...arrayAllImages]

            for(let i=0;i<5;i++){
                let position = Math.floor(Math.random() * (oldArrayImages.length))
                newArrayImages.push(oldArrayImages[position])
                oldArrayImages.splice(position, 1);
            }
            setArrayImages(newArrayImages)




            if ((Math.floor(Math.random()*2))==0) {
                // px1 = (Math.floor(Math.random()*2))==0 ? -20 : 100
                px1 = -20
                py1 = 0
            } else {
                py1 = (Math.floor(Math.random()*2))==0 ? -100 : 100
                px1 = 0
            }
            setPosition1([ [px1, py1]])

            if ((Math.floor(Math.random()*2))==0) {
                // px2 = (Math.floor(Math.random()*2))==0 ? -20 : 100
                px2 = -20
                py2 = 0
            } else {
                py2 = (Math.floor(Math.random()*2))==0 ? -100 : 100
                px2 = 20
            }
            setPosition2([ [px2, py2]])

            if ((Math.floor(Math.random()*2))==0) {
                px3 = (Math.floor(Math.random()*2))==0 ? -20 : 100
                py3 = 0
            } else {
                py3 = (Math.floor(Math.random()*2))==0 ? -100 : 100
                px3 = 40
            }
            setPosition3([ [px3, py3]])

            if ((Math.floor(Math.random()*2))==0) {
                // px4 = (Math.floor(Math.random()*2))==0 ? -20 : 100
                px4 = 100
                py4 = 0
            } else {
                py4 = (Math.floor(Math.random()*2))==0 ? -100 : 100
                px4 = 60
            }
            setPosition4([ [px4, py4]])

            if ((Math.floor(Math.random()*2))==0) {
                // px5 = (Math.floor(Math.random()*2))==0 ? -20 : 100
                px5 = 100
                py5 = 0
            } else {
                py5 = (Math.floor(Math.random()*2))==0 ? -100 : 100
                px5 = 80
            }
            setPosition5([ [px5, py5]])



        }, 8000);

        const intervalId2 = setInterval(() => {

            if(px1<0){
                px1 = px1 + 1
            } else if(px1>0) {
                px1 = px1 - 1
            }
            if(py1<0){
                py1 = py1 + 2
            } else if(py1>0) {
                py1 = py1 - 2
            }
            setPosition1([ px1, py1])

            if(px2<20){
                px2 = px2 + 1
            } else if(px2>20) {
                px2 = px2 - 1
            }
            if(py2<0){
                py2 = py2 + 2
            } else if(py2>0) {
                py2 = py2 - 2
            }
            setPosition2([ px2, py2])

            if(px3<40){
                px3 = px3 + 2
            } else if(px3>40) {
                px3 = px3 - 2
            }
            if(py3<0){
                py3 = py3 + 2
            } else if(py3>0) {
                py3 = py3 - 2
            }
            setPosition3([ px3, py3])

            if(px4<60){
                px4 = px4 + 1
            } else if(px4>60) {
                px4 = px4 - 1
            }
            if(py4<0){
                py4 = py4 + 2
            } else if(py4>0) {
                py4 = py4 - 2
            }
            setPosition4([ px4, py4])

            if(px5<80){
                px5 = px5 + 1
            } else if(px5>80) {
                px5 = px5 - 1
            }
            if(py5<0){
                py5 = py5 + 2
            } else if(py5>0) {
                py5 = py5 - 2
            }
            setPosition5([ px5, py5])



        },40);


        return () => {
            clearInterval(intervalId)
            clearInterval(intervalId2)
        };
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
    
    return (
        
        <PictureBox top1={position1[1]+"%"} left1={position1[0]+"%"} top2={position2[1]+"%"} left2={position2[0]+"%"} top3={position3[1]+"%"} left3={position3[0]+"%"} top4={position4[1]+"%"} left4={position4[0]+"%"} top5={position5[1]+"%"} left5={position5[0]+"%"}>
            <div className="singlePictureBox1" style={containerStyle1}></div>
            <div className="singlePictureBox2" style={containerStyle2}></div>
            <div className="singlePictureBox3" style={containerStyle3}></div>   
            <div className="singlePictureBox4" style={containerStyle4}></div>     
            <div className="singlePictureBox5" style={containerStyle5}></div>
            <div className="singlePictureTitleBox">
                <div className="singlePictureBoxTitle1" >Join the journey and discover new cultures, beautiful landscapes, make connections, enlarge your horizont and take your time</div>
                <div className="singlePictureBoxTitle2"> For more info read below and do not hesitate to contact </div>
                <button className="contactButton">Contact</button>   
            </div>


        </PictureBox>
        )
}


export default PicturesBackgroung