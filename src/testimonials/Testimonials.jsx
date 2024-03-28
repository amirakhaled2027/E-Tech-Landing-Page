import './testimonials.css';
import Alexa from './Alexa.png'; 
import Emely from './Emely.png'; 
import James from './James.png'; 
import Stars from './stars.png';


function Testimonials() {
  return (
    <section className="testimonials-section">
        <div className="text">
            <h2>Student’s Testimonials</h2>
            <p>Here’s what our students say about their transformative
             learning experience: Real stories, real growth. Discover fisthand the impact our
             courses have had in their lives.</p>
        </div>
        <div className="reviews">
            <div className="alexa">
                <div className="alexa-top">
                    <img src={Alexa} alt="" />
                    <div className="alexa-info">
                        <h6>Alexa Carla</h6>
                        <p>Web Developer</p>
                        <img src={Stars} alt="" />
                    </div>
                </div>
                <div className="alexa-bottom">
                    <p>Enrolling in courses at this e-learning 
                        platform was a game-charnger for me. 
                        Absolutely transformative experience!</p>
                </div>
            </div>

            <div className="emely">
                <div className="emely-top">
                    <img src={Emely} alt="" />
                    <div className="emely-info">
                        <h6>Emely Chan</h6>
                        <p>UI/UX Designer</p>
                        <img src={Stars} alt="" />
                    </div>
                </div>
                <div className="emely-bottom">
                    <p>Enrolling in courses at this e-learning 
                        platform was a game-charnger for me. 
                        Absolutely transformative experience!</p>
                </div>
            </div>

            <div className="james">
                <div className="james-top">
                    <img src={James} alt="" />
                    <div className="james-info">
                        <h6>James Johnson</h6>
                        <p>Web Developer</p>
                        <img src={Stars} alt="" />
                    </div>
                </div>
                <div className="james-bottom">
                    <p>Enrolling in courses at this e-learning 
                        platform was a game-charnger for me. 
                        Absolutely transformative experience!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials