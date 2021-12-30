import { Link } from 'react-router-dom'
import './projects.css'

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <h2>portfolio</h2>
            <p>Wat heb ik allemaal gemaakt?</p>
            <ul>
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