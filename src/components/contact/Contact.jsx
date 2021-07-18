import ContactForm from "../contactForm/ContactForm"
import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="p1">
                <img src="assets/contact.jpg" alt="" />
            </div>
            <div className="p2">
                <ContactForm />
            </div>
        </div>
    )
}
