import Aos from 'aos'
import 'aos/dist/aos.css'
import checkProject from '../helpers/checkProject'
import './header.css'

const Header = ({ project }) => {
    Aos.init({
        duration: 1000
    })

    const filterData = project.filter((d) => d.project === window.location.pathname)
    
    const branch = filterData[0].branch

    return (
        <div className='header'>
            <h1>{checkProject(window.location.pathname)}</h1>
            <h3>{branch}</h3>
        </div>
    )
}

export default Header