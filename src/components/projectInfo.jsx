import './projectinfo.css'

const ProjectInfo = ({ project }) => {
    const filteredData = project.filter((d) => d.project === window.location.pathname)

    const info = filteredData[0].info

    console.log(info)
    
    return (
        <div className="projectInformation">
            <img src={info.header} alt={window.location.pathname} />
            <h2>De opdracht</h2>

        </div>
    )
}

export default ProjectInfo