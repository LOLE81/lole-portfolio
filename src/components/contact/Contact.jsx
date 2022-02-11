import "./contact.css";
import Phone from "../../images/whatsapp-logo-4-1.png";
import Email from "../../images/gmail.png";
import LinkedIn from "../../images/linkedIn.png"
import GitHub from "../../images/github.png"
import Location from "../../images/icons8-ubicación-en-todo-el-mundo-48.png"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";

function Contact() {

    const formRef = useRef()

    const darkMode = useSelector(state => state.darkMode)  

    const [input, setInput] = useState({
        user_name: '',
        user_subject: '',
        user_email: '',
        message: ''
    });
    
    const [sent, setSent] =useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nd3yjci', 'template_18hkclj', formRef.current, 'user_BNyoPqMqlKeTWw9A9fBqZ')
          .then((result) => {
              console.log(result.text);
              setSent(true);
          }, (error) => {
              console.log(error.text);
          });
        setInput({
            user_name: '',
            user_subject: '',
            user_email: '',
            message: ''
        })  
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({            
            ...input,
            [e.target.name]: e.target.value
        })      
    };

  return (
    <div className="contact">
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Where you can find me</h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <a href="https://wa.link/q0b5au" target="_blank" rel="noreferrer"><img src={Phone} alt="phone img" className="contact-icon" /></a>
                        +54 11 4416 5299
                    </div>
                    <div className="contact-info-item">
                        <a href="mailto:martinezpm@gmail.com" target="_blank" rel="noreferrer"><img src={Email} alt="email img" className="contact-icon" /></a>
                        martinezpm@gmail.com
                    </div>
                    <div className="contact-info-item">
                        <a href="https://www.linkedin.com/in/pablomartinez-js" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin img" className="contact-icon" /></a>
                        linkedin.com/in/pablomartinez-js/
                    </div>
                    <div className="contact-info-item">
                        <a href="https://github.com/LOLE81/" target="_blank" rel="noreferrer"><img src={GitHub} alt="linkedin img" className="contact-icon" /></a>
                        github.com/LOLE81/
                    </div>
                    <div className="contact-info-item">
                        <a href="https://goo.gl/maps/w2ZB4i2BsoeAiKBH6" target="_blank" rel="noreferrer"><img src={Location} alt="location img" className="contact-icon" /></a>
                        La Lucila, Buenos Aires, Argentina
                    </div>
                </div>
            </div>  
            <div className="contact-right">
                <p className="contact-description">
                    <b>Prefer to leave a message?</b>&nbsp;Let's get in touch. I'm here for any comments.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" onChange={handleChange} value={input.user_name} className={darkMode ? "dMStyle" : undefined}/>
                    <input type="text" placeholder="Email" name="user_email" onChange={handleChange} value={input.user_email} className={darkMode ? "dMStyle" : undefined}/>
                    <input type="text" placeholder="Subject" name="user_subject" onChange={handleChange} value={input.user_subject} className={darkMode ? "dMStyle" : undefined}/>
                    <textarea name="message" cols="30" rows="10" placeholder="Your message" onChange={handleChange} value={input.message} className={darkMode ? "dMStyle" : undefined}/>
                    <button>Submit</button>
                    {sent && "Message sent. Thanks!"}
                </form>
            </div>
        </div>  
    </div>
  );
};

export default Contact;
