import visual from '../../assets/visual.svg'
import code from '../../assets/code.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './about.css'

const About = () => {
    Aos.init({
        duration: 1000
    })

    return (
        <div className='about' id='about'>
            <h2 data-aos='fade-left'>over mij</h2>
            <p data-aos='fade-left'>Wat zijn mijn vaardigheden?</p>
            <article className='skills' data-aos='fade-left'>
                <div>
                    <img src={visual} alt='visual'></img>
                    <h3>Web Design</h3>
                    <p>
                        Als web designer heb ik een goed oog voor details en probeer ik altijd op de hoogte te zijn van nieuwe design trends. Voor de creatie van al mijn designs gebruik ik verschillende
                        programma's. Ik heb ervaring met eigenlijk wel het gehele adobe pakket. Ook gebruik ik prototype programma's zoals Figma en Sketch.    
                    </p> 
                </div>
                <div>
                    <img src={code} alt='code'></img>
                    <h3>Front-end Development</h3>
                    <p>
                        Als front-end developer ben ik altijd nieuwsgierig naar de nieuwste trends binnen de branch. Zo ben ik altijd benieuwd naar de nieuwste frameworks en libraries. Ik ben al erg ervaren
                        met HTML, CSS en JavaScript. Ook heb ik al aardig wat ervaring met React.js. Daarnaast heb ik ook al eens gewerkt met PHP en de framework express.js.
                    </p>
                </div>
            </article>
            
        </div>
    )
}

export default About