import styled from "styled-components"




export const DatePricing = styled.div`

z-index:0;
display: flex;
width: 100%;
background-color: white;
align-items: center;
justify-content: center;

    .datePricingContent{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left:30px;
        max-width: 1200px;
        justify-content: center;



        
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
            background-color: #00FF57;

        }

        .divTextContentBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items:center;

            .divTextContentBox{
                width: 100%;
                max-width: 800px;
                align-items: flex-start;


                .divTextContentText{
                    margin: 40px 0px;
                    font-size: 20px;
                    text-align: justify;
                }


                .divDatesBox{
                    display: flex;
                    justify-content: space-between;
                    width: 300px;
                    margin-top:10px;
                    margin-left: 60px;
                    
                    .divDatesAvailability{
                        background-color: #36CE00;
                        height: 30px;
                        width: 100px;
                        border-radius: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }



                }

                .divTextContentBottom{
                    display: flex;
                    width: 100%;
                    justify-content: space-evenly;

                    .price{
                        width: 200px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        height: 110px;

                        .priceText{
                            font-size: 15px;
                            margin-top: 10px;
                        }
                        
                        .priceValue{
                            font-size: 25px;
                            margin-top: 5px;
                        }


                    }


                    .included{
                        background-color: #D9D9D9;
                        width: 200px;
                        height: 110px;
                        border-radius: 22px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .includedTitle{
                            margin-bottom:2px;
                            
                        }

                        .includedList{
                            font-size: 9px;
                            text-align: left;
                            padding: 0;
                            margin: 0;
                            padding-left: 20px;

                        }


                    }


                }
            }

            
        }

    }




`