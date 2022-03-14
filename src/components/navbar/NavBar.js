import logo from '../../assets/logo.svg'
import ig from '../../assets/ig.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import './nav.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <a href='/' className='logo'><img src={logo} alt='logo'></img></a>
                <li><a href='#projects'>Portfolio</a></li>
                <li><a href='#about'>Over mij</a></li>
                <li><a href='#contact'>Contact</a></li>
                <a href='https://www.instagram.com/_jody_020_/' rel='noreferrer' target='_blank' id='first' className='social'>
                    <img src={ig} alt='instagram'></img>
                </a>
                <a href='https://www.linkedin.com/in/jody-lorist-5262b2164/' rel='noreferrer' target='_blank' className='social'>
                    <img src={linkedin} alt='linkedin'></img>
                </a>
                <a href='https://github.com/jody29' rel='noreferrer' target='_blank' className='social'>
                    <img src={github} alt='github'></img>
                </a>

            </ul>
        </nav>
    )
}

export default NavBar