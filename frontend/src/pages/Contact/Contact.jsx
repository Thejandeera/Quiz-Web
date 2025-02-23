import React, { useState } from "react";
import "./Contact.css";
import NavigationBar from "../../components/Navbar/NavigationBar";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (<><NavigationBar />
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-desc">
                    Have any questions or feedback? Reach out to us, and we'll get back to you soon!
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </>
    );
};

export default Contact;
