import styled from "styled-components"
import nordeste from "../../../../assets/nordeste.png"



export const Itinerary = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;

    .itineraryImgContainer{

        width: 25%;
        max-width: 500px;
        min-width: 200px;
        aspect-ratio: 5 / 9;

        .itineraryImg{
    
            background-image: url(${nordeste});
            background-size: cover;
            background-position: right ;
            height: 100%;
            width: 100%;
    
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