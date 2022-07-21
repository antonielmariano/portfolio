import { Container } from "./styles";
import bgHome from "../../assets/bg-home.gif"
import Scroll from "../../components/Scroll";
import Aside from "../../components/Aside";
export default function Home(){
    return(
        <Container>
            <img src={bgHome} alt="" className="bg-home"/>
            <div className="antoniel-mariano">
                <h1>Antoniel Mariano</h1>
                <h3>Web Developer</h3>
            </div>
            <Scroll text={"Role para projetos"}/>
            <Aside/>
        </Container>
    )
}