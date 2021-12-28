import smallBg from '../../assets/smallBg.svg'
import bigBg from '../../assets/bigBg.svg'
import './leader.css'


const Leader = () => {
    return (
        <div className='leader'>
            <div className='info'>
                <h1>Jody Lorist</h1>
                <p>Web designer &amp; Front-end Developer</p>
                <button>Conact opnemen</button>
            </div>

            <img src={bigBg} alt='bigBg'></img>
            <img src='/picture.png' alt='profile' className='picture' ></img>
            <img src={smallBg} alt='smallBg'></img>
        </div>
    )
}

export default Leader