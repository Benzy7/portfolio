import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="p1">
                <img src="assets/contact.jpg" alt="" />
            </div>
            <div className="p2">
                <form action="">
                    <input type="email" placeholder=" Email" />
                    <textarea placeholder=" Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
