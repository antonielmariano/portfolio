import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bg-home{
        height: 100%;
        width: 100%;
        filter: brightness(0.60);
        object-fit: cover;
    }
    .antoniel-mariano{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        h1{
            font-family: 'Bangers', cursive;
            font-size: 90px;
            letter-spacing: 2px;
        };
        h3{
            margin-top: -20px;
            font-weight: normal;
            font-family: 'Bungee Hairline', cursive;
            font-size: 30px;
        }
    }
`