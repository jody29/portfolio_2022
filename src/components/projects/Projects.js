import './projects.css'

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <h2>Mijn projecten</h2>
            <ul>
                <li>
                    <div>
                        <img src='/musicMatch.png' alt='musicMatch'></img>
                    </div>
                    <h3>MusicMatch</h3>
                    <h4>Front-end &amp; Back-end</h4>
                </li>
                <li>
                    <div></div>
                    <h3>Technoleon</h3>
                    <h4>Front-end</h4>
                </li>
                <li>
                    <div></div>
                    <h3>Technoleon</h3>
                    <h4>Front-end</h4>
                </li>
                <li>
                    <div></div>
                    <h3>Technoleon</h3>
                    <h4>Front-end</h4>
                </li>
            </ul>
        </div>
    )
}

export default Projects