import './projectinfo.css'

const ProjectInfo = ({ project }) => {
    const filteredData = project.filter((d) => d.project === window.location.pathname)

    const info = filteredData[0].info

    const scenes = info.scenes

    return (
        <div className="projectInformation">
            <img src={info.header} alt={window.location.pathname} />
            <h2>De opdracht</h2>
            <p>{info.assignment}</p>
            <h2>Scenes</h2>
            {scenes.map(obj => (
                <img src={obj} alt={obj}/>
            ))}
            <h2>Wat heb ik gedaan?</h2>
            <p>{info.task}</p>
            <span>
                {info.github ? <a href={info.github} target='_blank' rel='noreferrer' className='github'>Github link</a> : ''}
                {info.live ? <a href={info.live} target='_blank' rel='noreferrer' className='live'>Live link</a> : '' }
            </span>

        </div>
    )
}

export default ProjectInfo