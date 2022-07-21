import { Container } from "./styles";
import scrollGif from "../../assets/scroll.gif"

export default function Scroll({text}){
    return(
        <Container>
            <p>{text}</p>
            <img src={scrollGif}  alt="foguete"/>
        </Container>
    )
}