
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


    `



