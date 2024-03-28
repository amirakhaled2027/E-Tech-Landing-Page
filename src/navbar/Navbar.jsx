import './navbar.css';
import Logo from './Etech.png'


function Navbar() {
  return (
    <nav>
        <div className="right">
            <img src={Logo} alt="" />
        </div>

        <div className="middle">
            <div className="courses">Courses</div>
            <div className="teachers">Teachers</div>
            <div className="offers">Offers</div>
            <div className="contact">Contact</div>
        </div>

        <div className="right">
            <button className='sign-in'>Sign In</button>
            <button className='free-trial'>Free Trial</button>
        </div>

    </nav>
  )
}

export default Navbar