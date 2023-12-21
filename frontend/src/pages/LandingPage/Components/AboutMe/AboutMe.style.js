import styled from "styled-components"




export const AboutMe = styled.div`

z-index:0;
display: flex;
width: 100%;
background-color: white;

    .divAboutTop{
        display: flex;
        flex-direction: column;
        width: 100%;


        
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
                background-color: #6360E9;

            }

            .divTextContent {

                background-color: #C2C0F6;
                margin: 40px;
                padding: 30px;

            }
    
        }

        .divAboutRight{ 
            width: 200px;
            background-color: blue;

        }


`