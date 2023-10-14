import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <h2>Wanna hang out? You can find me here:</h2>
            <ul>
                <li><a href="https://github.com/PKuzi01" target="_blank"><strong>Github</strong></a></li>
                <li><a href="https://www.linkedin.com/in/philisizwekuzwayo/" target="_blank"><strong>LinkedIn</strong></a></li>
                <li><a href="mailto:ilaphi@outlook.com" target="_blank"><strong>Email</strong></a></li>
            </ul>
            <h2>Hope to hear from you soon.</h2>
            {/* <div class="backToTop">
                <a href="#hero">Back to top</a>
            </div> */}
        </div>
    )
}

export default Contact;