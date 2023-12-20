
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
        justify-content: center;
        align-items: center;



        .singlePictureBoxTitle1 {
            position: absolute;
            color: white;
            width: 75%;
            font-size: 0.9em;
            top: 20%
            
        }

        .singlePictureBoxTitle2 {
            position: absolute;
            top: 60%;
            left: 55%;
            width: 240px;
            color: white;
            background-color: #00A692;
            padding: 15px;
            font-size: 0.5em;
        }

        .contactButton{
            position: absolute;
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
    `



