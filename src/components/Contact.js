import React, { useState } from "react";
import { send, init } from 'emailjs-com'
import Menu from './Menu'
import Footer from "./Footer"
import "../styles/Contact.css"

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formInputs, setFormInputs] = useState({
        fullName: '',
        subject: '',
        email: '',
        message: ''
    })
    //const [fullName, setFullName] = useState('');
    //const [subject, setSubject] = useState('');
    //const [email, setEmail] = useState('');
    //const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [completeFieldsError, setCompleteFieldsError] = useState('');
    init("user_B05CYKmn6juHchJw25Cwj");

    const handleChange = e => {
        setFormInputs({...formInputs, [e.target.name]: e.target.value })
    }

    const validate = () => {
        let formError = "";
        let emailError = "";
        if (!formInputs.fullName || !formInputs.subject || !formInputs.email || !formInputs.message) {
            formError = "Please fill in all fields before submitting";
        }
        if (!formInputs.email.includes('@') || !formInputs.email.includes('.') ) {
            emailError = "Please type in a valid email address";
        }
        if (formError || emailError) {
            setCompleteFieldsError(formError);
            setEmailError(emailError);
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            send(
                'service_64s8yr9',
                'template_f6l50t7',
                formInputs,
                'user_B05CYKmn6juHchJw25Cwj'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
            //setFullName('');
            //setSubject('');
            //setEmail('');
            //setMessage('');
            setEmailError('');
            setCompleteFieldsError('');
            setSubmitted(true);
        }
    }

    if (!submitted) {
        return (
            <div className="Contact">
                <header>
                    <Menu />
                </header>
                <div className="content-container">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className="formLine">
                        <label>Full Name:</label>
                        <input id="fullName" name="fullName" type="text" placeholder="Please enter name" value={formInputs.fullName} onChange={e => handleChange(e)} />
                    </div>
                    <div className="formLine">
                        <label>Email:</label>
                        <input id="email" name="email" type="email" placeholder="Please enter email address" value={formInputs.email} onChange={e => handleChange(e)} />
                    </div>
                    <div className="errorMsg">{emailError}</div>
                    <div className="formLine">
                        <label>Subject:</label>
                        <input id="subject" name="subject" type="text" placeholder="Please enter message subject" value={formInputs.subject} onChange={e => handleChange(e)} />
                    </div>
                    <div className="formLine">
                        <label>Message:</label>
                        <textarea id="message" name="message" type="text" placeholder="Please enter the your message" value={formInputs.message} onChange={e => handleChange(e)} rows="6"/>
                    </div>
                    <div className="errorMsg">{completeFieldsError}</div>
                    <button type="submit" className="submitBtn" value="Send">Submit</button>
                </form>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
    else {
        return (
            <div className="Contact">
                <header>
                    <Menu />
                </header>
                <div className="content-container">
                <h2 className="thankyou">
                    Thank you for contacting us!
                </h2>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>

        )
    }

}