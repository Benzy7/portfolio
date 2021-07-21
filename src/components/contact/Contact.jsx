import ContactForm from "../contactForm/ContactForm"
import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="p1">
                <img src="assets/hands-.jpg" alt="" />
            </div>
            <div className="p2">
                <h2>Contact</h2>
                <ContactForm />
            </div>
        </div>
    )
}
