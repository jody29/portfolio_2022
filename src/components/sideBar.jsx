import { Link } from "react-router-dom"
import './sidebar.css'

const SideBar = ({ project }) => {

    const filterData = project.filter((d) => d.project === window.location.pathname)

    const sideInfo = filterData[0].sideInfo

    return (
        <div className="sideBar">
            <Link onClick={() => {window.history.go(-1)}} to=''>Terug naar overzicht</Link>
            <ul>
            {sideInfo.map(obj => (
                <li><img src={obj.img} alt={obj.text} />{obj.text}</li>
            ))}
            </ul>
            

        </div>
    )
}

export default SideBar