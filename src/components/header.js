import Aos from 'aos'
import 'aos/dist/aos.css'
import checkProject from '../helpers/checkProject'
import './header.css'

const Header = () => {
    Aos.init({
        duration: 1000
    })

    return (
        <div className='header'>
            <h1>{checkProject(window.location.pathname)}</h1>
        </div>
    )
}

export default Header