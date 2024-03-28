import './hero.css';
import Icon from './hero-play.png';
import Main from './hero-main.png';

function Hero() {
  return (
    <div className="hero-section">
    <div className="right">
        <h1>Develop your <br/>skills in a new <br/> and unique way</h1>
        <p>Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and 
            elevate your expertise in unique ways.</p>
            <div className="buttons">
                <div className="enroll-now">
                <button className="enroll">
                    Enroll Now
                </button>
                </div>
                <div className="etech">
                    <img src={Icon} alt="" />
                <button className="etech-text">
                    What's Etech?
                </button>
                </div>
            </div>
    </div>

    <div className="left">
        <img src={Main} alt="" className='hero-img'/>
    </div>

    </div>
  )
}

export default Hero
