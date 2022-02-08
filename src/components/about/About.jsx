import "./about.css"
import Dog from "../../images/dog.jpg"
import Cert from "../../images/Grad.JPG"

function About() {
  return (
    <div className="about">
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img 
                src={Dog}
                alt="pic"
                className="about-img"/>
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
                Who am I? 
            </p>
            <p className="about-description">
                My birth name is Pablo, but everybody calls me Lole. Last year I found in programming a new passion. After a few months of hard studying I can now say I'm a Full Stack Web Developer.
                I worked as a trader in the agricultural area for many years, with experience in commodities suchs as soybeans, corn, wheat, barley and others. I've decided to change that way of life, today I'm looking forward to learn and apply all kind of knowledge related to this new passion. 
                I'm looking for new experiences and hoping to have the chance to contribute and continue learning, to improve as a professional. 
                I really like to work in teams and also enjoy working alone if necessary.<br/>Oh, and I love dogs!!!
            </p>
            <div className="about-certificate">
                <img src={Cert} alt="certificate img" className="about-certificate-img "/>
                <div className="about-certificate-text">
                    <h4 className="about-certificate-title">Henry Certificate 2021</h4>
                    <p className="about-certificate-description">
                    Finished bootcamp with more than 800 hours learning at "soyhenry.com"
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
