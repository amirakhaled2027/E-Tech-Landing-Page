import './footer.css'
import Facebook from './fb.png';
import Twitter from './x.png';
import Instagram from './ig.png';

function Footer() {
  return (
    <section className="footer-section">
        <div className="footer-top">
            <div className="etech">
                <h6>Etech</h6>
                <p>Explore a transformation</p>
                <p>Approach to skill</p>
                <p>Development on us</p>
                <p>Online Learning Platform</p>
                <div className="socials">
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="company">
                <h6>Company</h6>
                <p>About Us</p>
                <p>Services</p>
                <p>Community</p>
                <p>Testimonials</p>
            </div>
            <div className="support">
                <h6>Support</h6>
                <p>Help Center</p>
                <p>Tweet Us</p>
                <p>Webinars</p>
                <p>Feedback</p>
            </div>
            <div className="links">
                <h6>Links</h6>
                <p>Courses</p>
                <p>Become Teacher</p>
                <p>Services</p>
                <p>All in One</p>
            </div>
            <div className="contact-us">
                <h6>Contact Us</h6>
                <p>+62 (244) 321-2234</p>
                <p>etechinfohere@gmail.com</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>Copyright © 2024 Etech. All rights reserved by <span>Amira Khaled</span></p>
        </div>
    </section>
  )
}

export default Footer