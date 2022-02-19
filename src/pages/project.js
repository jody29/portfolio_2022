import Header from "../components/header.js"
import SideBar from "../components/sideBar.jsx"
import work from '../assets/work.svg'
import team from '../assets/team.svg'
import date from '../assets/date.svg'
import './project.css'

function Project() {
    const projects = [
        {
            'project': '/technoleon',
            'sideInfo': [
                {'text': 'Forward Football', 'img': work},
                {'text': 'Team', 'img': team},
                {'text': '2021', 'img': date},
            ]
        },
        {
            'project': '/musicmatch',
            'sideInfo': [
                {'text': 'Hogeschool van Amsterdam', 'img': work},
                {'text': 'Team', 'img': team},
                {'text': '2021', 'img': date},
            ]
        }
    ]

    return (
        <div className="projectPage">
        <SideBar project={projects} />
        <div className="projectRight">
        <Header />
        </div>
        </div>
    )
}

export default Project