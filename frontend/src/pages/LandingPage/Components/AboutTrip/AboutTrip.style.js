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
            margin-top: 20px;
        
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
                margin-top: 20px;
                text-align: justify;
                width: 85%;
                font-size: 20px;
            }
    
        }
    }

    .divAboutBottom{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;


        .aboutBottomTitle{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            font-size: 26px;
            font-weight: 600;
            text-indent: 50px;
            margin-bottom: 20px;
            margin-top:30px;
            color: #3E3E3E;
            
        }

        .aboutBottomList{
            display: flex;
            flex-direction:column;
            align-items: flex-start;
            width: 60%;


            .aboutBottomElementList{
                display: flex;
                flex-direction: row;
                justify-content: center;
                text-align: left;
                align-items: center;
                margin-top: 15px;


                .thumbUp{
                    height:60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .aboutBottomElementListText{
                    display: flex;

                    margin-left: 20px;
                    align-items: center;
                    justify-content: center;
                    text-align: left;
                    color: rgb(255,199,17);
                    font-size: 30px;
                    font-weight: 700;

                }


            }




        }
    }





`