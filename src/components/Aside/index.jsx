import { Container } from "./styles";
import logoGithub from "../../assets/github-logo.png"
import logoLinkedin from "../../assets/linkedin-logo.webp"

export default function Aside(){
    return(
        <Container>
            <a href="https://www.linkedin.com/in/antonielmariano/" target="_blank" rel="noreferrer">
                <img src={logoLinkedin} alt="logo-linkedin" className="logo-linkedin"/>
            </a>
            <a href="https://github.com/therobite" target="_blank" rel="noreferrer">
                <img src={logoGithub} alt="logo-github" className="logo-github"/>
            </a>
        </Container>
    )
}