import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './projects.css'

const Projects = () => {
    Aos.init({
        duration: 1000
    })

    const projects = [
        {name: 'MusicMatch', img: '/musicmatch.png', url: '/musicmatch', specialty: 'Front-end & Back-end'},
        {name: 'Technoleon', img: '/technoleon.png', url: '/technoleon', specialty: 'Front-end & UI-Design'},
    ]

    return (
        <div className="projects" id='projects'>
            <h2 data-aos='fade-right'>portfolio</h2>
            <p data-aos='fade-right'>Wat heb ik allemaal gemaakt?</p>
            <ul data-aos='fade-right'>
                
                {projects.map(project => (
                <li key={project.name}>
                    <Link to={project.url}>
                        <div>
                            <img src={project.img} alt={project.name}></img>
                            <span>
                                <h3>{project.name}</h3>
                                <h4>{project.specialty}</h4>
                            </span>
                        </div>
                    </Link>
                </li>
                ))}
                       
            </ul>
        </div>
    )
}

export default Projects