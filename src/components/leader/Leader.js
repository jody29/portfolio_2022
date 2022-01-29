import Aos from 'aos'
import 'aos/dist/aos.css'
import './leader.css'


const Leader = () => {
    Aos.init({
        duration: 1000
    })

    return (
        <div className='leader'>
            <div className='info'>
                <p className='hello'>HALLO, MIJN NAAM IS</p>
                <h1>Jody Lorist</h1>
                <p className='job'>CREATIEVE DEVELOPER</p>
                <p>Ik ben een proffesionele front-end developer met goed oog voor detail en een creatieve mindset.</p>
            </div>

            <img src='/fotoJody.png' alt='profile' className='picture'></img>
            
        </div>
    )
}

export default Leader