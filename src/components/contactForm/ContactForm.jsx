import "./contactForm.scss"
import emailjs from 'emailjs-com';
import { useState } from "react";
/* import Alert from 'react-bootstrap/Alert'
import Popup from "reactjs-popup"; */

export default function ContactForm() {

    const Result = () => {
        return(
            <p>
            Your Message has been sent. I will contact you soon.
            </p>
        );
    };

    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('benzy00', 'template_se7bpfo', e.target, 'user_Gw699VtIhgNoxKE8FZ3Ea')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true)
    };

    return (
        <form action="" onSubmit={sendEmail}>
                <input type="text" placeholder=" Name"/>
                <input type="email" placeholder=" Email" required="true"/>
                <textarea placeholder=" Message" required="true"></textarea>
                <button type="submit">Send</button>
            <div className="sc">
                {result ? <Result /> : null}
            </div>
            
        
        </form>
    )
}
