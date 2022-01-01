import ButtonMailto from '../ButtonMailto'
import ig from '../../assets/ig.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './contact.css'

const Contact = () => {
    Aos.init({
        duration: 1000
    })

    return (
        <div className="contact" id='contact'>
            <div className='inner' data-aos='fade-right'>
                <h2>contact</h2>
                <p>Neem contact met mij op</p>
                <span>
                    <ButtonMailto mailto='mailto:jodylorist@hotmail.com' label='Stuur een email' />
                    <ul className='socials'>
                        <a href='https://www.instagram.com/_jody_020_/' rel='noreferrer' target='_blank'><img src={ig} alt='instagram'></img></a>
                        <a href='https://www.linkedin.com/in/jody-lorist-5262b2164/' rel='noreferrer' target='_blank'><img src={linkedin} alt='linkedin'></img></a>
                        <a href='https://github.com/jody29' rel='noreferrer' target='_blank'><img src={github} alt='github'></img></a>
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default Contact