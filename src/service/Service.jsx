import './service.css';
import Services from './service.png';
import Academia from './academia.png';
import Book from './book.png';
import Person from './person.png';
import Play from './play.png';




function Service() {
  return (
    <section className='service-section'>
        <div className="left">
            <img src={Services} alt="" />
        </div>

        <div className="right">
            <h1><span>Benefits</span> From Our Online<br/> Learning</h1>
            
            <div className="benefits">
                
                <div className="degrees">
                    <div className="degrees-icon">
                        <img src={Academia} alt="" />
                    </div>
                    <div className="degree-text">
                        <h6>Online Degrees</h6>
                        <p>Earn accredited degrees from the comfort of your home, 
                            opening doors to a world of possibilities.</p>
                    </div>
                </div>
                
                <div className="courses">
                    <div className="courses-icon">
                        <img src={Book} alt="" />
                    </div>
                    <div className="course-text">
                        <h6>Short Courses</h6>
                        <p>Enhance your skills with our concise and focused short, 
                            courses, designed for quick and effective learning.</p>
                    </div>
                </div>
                
                <div className="training">
                    <div className="training-icon">
                        <img src={Person} alt="" />
                    </div>
                    <div className="training-text">
                        <h6>Training From Experts</h6>
                        <p>Immerse yourself in knowledge with industry experts 
                            guiding you though hands-on experience.</p>
                    </div>
                </div>
              
                <div className="video">
                    <div className="video-icon">
                        <img src={Play} alt="" />
                    </div>
                    <div className="video-text">
                        <h6>1.5k+ Video Courses</h6>
                        <p>Dive into a vast library of over 1.5k video courses covering 
                            many subject, offering a visual learning experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service