import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 5px;
    width: 50px;
    height: 110px;
    background-color: #48304e;
    border-radius: 8px;
    a{
        height: 55px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        .logo-linkedin{
            width: 60%;
            object-fit: contain;
        }

        .logo-github{
            width: 60%;
            object-fit: contain;
        }
    }   
`
    