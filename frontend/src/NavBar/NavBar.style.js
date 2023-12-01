
import styled from "styled-components"


export const NavBarStyle = styled.div`
    position: static;
    width : 1 vw;
    height: 60px;
    background-color: #E7E7E7;
    margin-top:15px;
    display: flex;
    align-items:center;
    justify-content: flex-end;

`


export const NavBarButton = styled.div`
    height: 80%;
    aspect-ratio: 1 / 1;
    background-color: #E7E7E7;
    border: solid;
    border-color: #C4C4C4;
    border-radius: 4px;
    border-width: 1px;
    margin: 8px;
    display:flex;
    align-items: center;
    justify-content: center;


    
    div{
        width:65%;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;


        .navbarbuttonbar {
            height: 1px;
            width: 80%;
            background-color: #525252;
            border-radius: 1px;
        }
    }

    
`

