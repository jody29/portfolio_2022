import Header from "../components/header.js"
import SideBar from "../components/sideBar.jsx"
import ProjectInfo from "../components/projectInfo.jsx"

import work from '../assets/work.svg'
import team from '../assets/team.svg'
import date from '../assets/date.svg'
import './project.css'

function Project() {
    const projects = [
        {
            'project': '/technoleon',
            'branch': 'design & front-end',
            'sideInfo': [
                {'text': 'Forward Football', 'img': work},
                {'text': 'Team', 'img': team},
                {'text': '2021', 'img': date},
            ],
            'info': {
                'header': ''
            }
        },
        {
            'project': '/musicmatch',
            'branch': 'front-end & back-end',
            'sideInfo': [
                {'text': 'Hogeschool van Amsterdam', 'img': work},
                {'text': 'Team', 'img': team},
                {'text': '2021', 'img': date},
            ],
            'info': {
                'header': '/MusicMatch_Mockup1.png'
            }
        }
    ]

    return (
        <div className="projectPage">
        <SideBar project={projects} />
        <div className="projectRight">
        <Header project={projects}/>
        <ProjectInfo project={projects} />
        </div>
        </div>
    )
}

export default Project