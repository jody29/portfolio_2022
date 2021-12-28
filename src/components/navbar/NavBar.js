import logo from '../../logo.svg'
import ig from '../../ig.svg'
import linkedin from '../../linkedin.svg'
import github from '../../github.svg'
import './nav.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <img src={logo} alt='logo'></img>
                <li>Portfolio</li>
                <li>Over mij</li>
                <li>Contact</li>
                <img src={ig} alt='instagram'></img>
                <img src={linkedin} alt='linkedin'></img>
                <img src={github} alt='github'></img>

            </ul>
        </nav>
    )
}

export default NavBar