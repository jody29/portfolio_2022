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
                'header': '/Technoleon_header.png',
                'assignment': `
                Tijdens mijn stage bij Forward Football kreeg ik de taak om een voetbal dashboard te ontwerpen en ontwikkelen.
                Het dashboard moest data van zowel voetbaltesten als wedstrijden weergeven. Het dashboard zou daarbij ook verschillende
                rollen krijgen (speler, coach, coördinator etc..). Het was de bedoeling dat de coach dan ook iets anders te zien kreeg dan 
                de spelers konden zien.
                `,
                'task': `
                Ik heb dit project samen met een andere stagiair gedaan. Deze stagiair ging meer over het design en ik ging in dit geval 
                over de front-end. Daarbij heb ik ook nauw samengewerkt met de python developer, zodat de data opgehaald kon worden uit
                de database. Ik heb dit dashboard uiteindelijk gebouwd in React.js. Elke component moest ik na het bouwen apart builden naar
                dash component, zodat het vervolgens in python gebruikt kon worden. De grafieken heb ik gemaakt met D3.js en Plotly.js
                `,
                'scenes': ['/Technoleon_mockup1.png', '/Technoleon_mockup2.png', '/Technoleon_mockup3.png', '/Technoleon_mockup4.png',],
                'github': 'https://github.com/jody29/technoleon',
                'live': ''
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
                'header': '/MusicMatch_Mockup1.png',
                'assignment': `
                Voor het vak project tech kregen we als team de opdracht om een matching app te ontwerpen en uiteindelijk met 
                Node.JS te bouwen. Wij hadden ervoor gekozen om een app te maken waarbij de gebruiker kan matchen op basis van 
                muziek smaak. Ieder teamlid moest een functie van de applicatie bouwen.
                `,
                'task': `
                Tijdens dit project heb ik gewerkt aan de chat functie en matching functie. Voor de chat functie heb ik gebruik
                gemaakt van socket.io. Hiermee kan ik real-time data uitwisselen. De chats worden vervolgens opgeslagen in de MongoDB
                database. Voor de matching functie heb ik ingesteld dat 2 gebruikers pas met elkaar matchen op moment dat ze elkaar een
                like hebben gegegeven. Op het moment van een match zal er een chat worden aangemaakt voor de 2 gebruikers.
                `,
                'scenes': ['/MusicMatch_Scene1.png', '/MusicMatch_Scene2.png'],
                'github': 'https://github.com/jody29/tech_team',
                'live': 'https://musicmatch1.herokuapp.com/'
                
            } 
        },
        {
            'project': '/zwerfinator',
            'branch': 'front-end',
            'sideInfo': [
                {'text': 'Hogeschool van Amsterdam', 'img': work},
                {'text': 'Team', 'img': team},
                {'text': '2022', 'img': date},
            ],
            'info': {
                'header': '/MusicMatch_Mockup1.png',
                'assignment': `
                Voor het vak project tech kregen we als team de opdracht om een matching app te ontwerpen en uiteindelijk met 
                Node.JS te bouwen. Wij hadden ervoor gekozen om een app te maken waarbij de gebruiker kan matchen op basis van 
                muziek smaak. Ieder teamlid moest een functie van de applicatie bouwen.
                `,
                'task': `
                Tijdens dit project heb ik gewerkt aan de chat functie en matching functie. Voor de chat functie heb ik gebruik
                gemaakt van socket.io. Hiermee kan ik real-time data uitwisselen. De chats worden vervolgens opgeslagen in de MongoDB
                database. Voor de matching functie heb ik ingesteld dat 2 gebruikers pas met elkaar matchen op moment dat ze elkaar een
                like hebben gegegeven. Op het moment van een match zal er een chat worden aangemaakt voor de 2 gebruikers.
                `,
                'scenes': ['/MusicMatch_Scene1.png', '/MusicMatch_Scene2.png'],
                'github': 'https://github.com/jody29/tech_team',
                'live': 'https://musicmatch1.herokuapp.com/'
                
            } 
        },
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