import './community.css';
import Purple from './Purple.png';
import Pink from './Pink.png';
import MainCommunity from './MainCommunity.png';


function Community() {
  return (
    <section className="community-section">
        <div className="left">
            <div className="left-top">
                <h2>If You Are A Certified Teacher <br/>
                Then <span>Become An Instructor</span></h2>
                <p>Unlock the opportunity to inspire and educate by joining
                    our team of instructors. If you’re a certified teacher, 
                    elevate your impact and share your expertise 
                    with learners worldwide.</p>
            </div>
            <div className="left-bottom">
                <h2>Enjoy Many Perks</h2>

                <div className="pros">
                    <div className="pros-left">
                        <div className="global">
                            <img src={Purple} alt="" />
                            <p>Global Impact</p>
                        </div>
                        <div className="flexible">
                            <img src={Pink} alt="" />
                            <p>Flexible Schedule</p>
                        </div>
                        <div className="innovative">
                            <img src={Purple} alt="" />
                            <p>Innovative Teaching Tools</p>
                        </div>
                        <div className="recognition">
                            <img src={Pink} alt="" />
                            <p>Recognition And Reputation</p>
                        </div>
                    </div>
                    <div className="pros-right">
                    <div className="creative">
                            <img src={Purple} alt="" />
                            <p>Creative Freedom</p>
                        </div>
                        <div className="monetize">
                            <img src={Pink} alt="" />
                            <p>Monetize Your Expertize</p>
                        </div>
                        <div className="professional">
                            <img src={Purple} alt="" />
                            <p>Professional Development</p>
                        </div>
                        <div className="networking">
                            <img src={Pink} alt="" />
                            <p>Networking Opportunities</p>
                        </div>
                    </div>
                </div>

                <button>Become an Instructor</button>
            </div>
        </div>

        <div className="right">
            <img src={MainCommunity} alt="" />
        </div>
    </section>
  )
}

export default Community