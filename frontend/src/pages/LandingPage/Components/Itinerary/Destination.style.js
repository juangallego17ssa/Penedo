import styled from "styled-components"



export const DestinationStyle = styled.div`


    position: relative;
    background-color: ${(props) => props.showElement ? '#bbbbbb' : "white"};
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    margin-top: 3px;
    padding: 5px 0px;
    border-radius: 5px;
    font-weight: 600;

    &:hover{
        background-color: gray;
        cursor: pointer;
    }


    .day{
        width: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #ccc; /* Set your desired border color and width */;

    }

    .description{
        flex: 1;
        padding-left: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }


`