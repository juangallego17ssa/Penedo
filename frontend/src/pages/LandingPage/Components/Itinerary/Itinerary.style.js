import styled from "styled-components"
import nordeste from "../../../../assets/nordeste.png"
import destination_gray from "../../../../assets/destination_gray.png"



export const Itinerary = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;

    .itineraryImgContainer{

        width: 25%;
        max-width: 500px;
        min-width: 200px;

        .itineraryImgBox{

            position: relative;

            .itineraryImg{
                width: 100%;
                height: auto;
            }


            .destination{
                position: absolute;
                width: 4.5%;
            }
        
            .salvador{
                top: 66.3%;
                left: 55.2%;
            }
            .lago{
                top: 63.8%;
                left: 59.2%;
            }
            .esplanada{
                top: 61.0%;
                left: 61.5%;
            }
            .canudos{
                top: 52.6%;
                left: 39.2%;
            }
            .piranhas{
                top: 46.6%;
                left: 58.2%;
            }
            .penedo{
                top: 47.0%;
                left: 65.8%;
            }
            .praia{
                top: 50.6%;
                left: 82.2%;
            }
            .palmares{
                top: 45.6%;
                left: 84.2%;
            }
            .recife{
                top: 39.6%;
                left: 95.2%;
            }
            
        }
    }


    .itineraryListContainer{

        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;


        .itineraryListBox{
            background-color: #D9D9D9;
            border-radius: 10px;
            opacity: 80%;
            max-width: 800px;
            min-width: 200px;
            width: 90%;
            height: 85%;
            max-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;



            
            .itineraryListBoxInner{

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow: auto;
                width: 90%;
                height: 85%;

                &::-webkit-scrollbar {
                    width: 12px; /* Set the width of the scrollbar */
                }

                &::-webkit-scrollbar-track {
                    background-color: #f1f1f1; /* Set the background color of the scrollbar track */
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #888; /* Set the color of the scrollbar thumb */
                    border-radius: 6px; /* Set the border-radius of the scrollbar thumb */
                }
            }

        }



        
    }





`