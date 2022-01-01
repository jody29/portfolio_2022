import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './projects.css'

const Projects = () => {
    Aos.init({
        duration: 1000
    })

    return (
        <div className="projects" id='projects'>
            <h2 data-aos='fade-right'>portfolio</h2>
            <p data-aos='fade-right'>Wat heb ik allemaal gemaakt?</p>
            <ul data-aos='fade-right'>
                <li>
                    <Link to='/'>
                        <div>
                            <img src='/musicMatch.png' alt='musicMatch'></img>
                            <span>
                                <h3>MusicMatch</h3>
                                <h4>Front-end &amp; Back-end</h4>
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div>
                            <img src='/technoleon.png' alt='technoleon'></img>
                            <span>
                                <h3>Technoleon</h3>
                                <h4>Front-end &amp; UI-Design</h4>
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    <div>
                            <span>
                                <h3>Technoleon</h3>
                                <h4>Front-end</h4>
                            </span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div>
                            <span>
                                <h3>Technoleon</h3>
                                <h4>Front-end</h4>
                            </span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Projects