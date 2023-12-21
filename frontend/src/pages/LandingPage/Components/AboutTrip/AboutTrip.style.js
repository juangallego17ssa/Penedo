import styled from "styled-components"




export const AboutTrip = styled.div`

z-index:0;
display: flex;
flex-direction: column;
width: 100%;
background-color: white;

    .divAboutTop{
        display: flex;
        width: 100%;

        .divImage {
            width:  200px;
            position: relative;
            background-color: white;
        }


        .divText {
            flex: 1;
            position: relative;
            background-color: white;
            display: flex;
            flex-direction: column;
        
            .divTextTitle {
                margin-top: 30px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: 30px;
            }
            .divTextLine {
                margin-top: 10px;
                height: 7px;
                width: 200px;
                background-color: #FFC700;

            }

            .divTextContent {

            }
    
        }
    }

    .divAboutBottom{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        .aboutBottomTitle{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            
        }

        .aboutBottomList{
            display: flex;
            flex-direction:column;
            align-items: flex-start;
            width: 300px;


        }
    }





`