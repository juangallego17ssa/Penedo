
import styled from "styled-components"




export const PictureBox = styled.div`
    width : 100%;
    height: 450px;
    display: flex;
    align-items:center;
    padding-bottom: 10px;
    font-size: 4vh;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    position: relative;
    background-color: gray;
    z-index:-3;
    overflow: hidden;

    .singlePictureBox1 {
        width: 20%;
        height: 100%;
        position: absolute;
        top: ${props => props.top1};
        left: ${props => props.left1};
        z-index: -2;
    }
    .singlePictureBox2 {
        width: 20%;
        height: 100%;
        position: absolute;
        top: ${props => props.top2};
        left: ${props => props.left2 || "20%"};
        z-index: -2;
    }
    .singlePictureBox3 {
        width: 20%;
        height: 100%;
        position: absolute;
        top: ${props => props.top3};
        left: ${props => props.left3};
        z-index: -2;
    }
    .singlePictureBox4 {
        width: 20%;
        height: 100%;
        position: absolute;
        top: ${props => props.top4};
        left: ${props => props.left4};
        z-index: -2;
    }
    .singlePictureBox5 {
        width: 20%;
        height: 100%;
        position: absolute;
        top: ${props => props.top5};
        left: ${props => props.left5};
        z-index: -2;
    }


    .singlePictureTitleBox{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;


        .singlePictureBoxTitle1Box{
        
            height: 60%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        
            .singlePictureBoxTitle1 {
                position: absolute;
                color: white;
                width: 75%;
                font-size: clamp(20px, 2.5vw, 32px);
                top: 20%;
                font-weight: 400;
                letter-spacing: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
        }

        .singlePictureBoxTitle2Box{

            width: 100%;
            height: 40%;

            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;



            .singlePictureBoxTitle2 {
                position: absolute;
                top: 0%;
                left: 50%;
                width: 25%;
                min-width: 300px;
                color: white;
                background-color: #00A692;
                padding: 12px;
                font-size: clamp(12px, 1.5vw, 32px);
                border-radius: 6px;
                font-weight: 400;
                letter-spacing: 1px;
                
                box-sizing: border-box;

                text-align: left;
                
                .contactButton{
                    top: 70%;
                    left: 80%;
                    width: 80px;
                    
                    border-radius: 5px;
                    border: none;
                    color: white;
                    background-color: #36CE00;
                    padding: 10px;
                    font-size: 0.5em;
                }

            }
    
            
        }
    }
    `



