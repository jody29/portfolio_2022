import './projects.css'

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <h2>portfolio</h2>
            <p>Wat heb ik allemaal gemaakt?</p>
            <ul>
                <li>
                    <div>
                        <img src='/musicMatch.png' alt='musicMatch'></img>
                    </div>
                    <h3>MusicMatch</h3>
                    <h4>Front-end &amp; Back-end</h4>
                </li>
                <li>
                    <div>
                        <img src='/technoleon.png' alt='technoleon'></img>
                    </div>
                    <h3>Technoleon</h3>
                    <h4>Front-end &amp; UI-Design</h4>
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