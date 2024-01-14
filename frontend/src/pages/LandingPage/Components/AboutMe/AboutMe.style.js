import styled from "styled-components"




export const AboutMe = styled.div`

z-index:0;
display: flex;
width: 100%;
background-color: white;
align-items: center;
justify-content: center;

    .divAboutTop{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left:30px;
        max-width: 1200px;


        
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

                display: flex;
                position: relative;
                
                
                .textMe{
                    background-color: #C2C0F6;
                    margin: 60px;
                    margin-left: 250px;
                    padding: 30px;
                    padding-left: 70px;
                    font-size: 20px;
                    align-items: flex-start;
                    text-align: left;
                    position: relative;

                                    .imageMe{
                                        position: absolute;
                                        left: -200px;
                                        top: 0px;
                                        width: 250px;
                                        height: 250px;
                                    }
                }

            }
    
        }

        .divAboutRight{ 
            width: 200px;
            background-color: blue;


        }


`