import React, { useState } from "react";
import { send } from 'emailjs-com';
import Menu from './Menu';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [completeFieldsError, setCompleteFieldsError] = useState('');

    const validate = () => {
        let formError = "";
        let emailError = "";
        if (!fullName || !subject || !email || !message) {
            formError = "Please fill in all fields before submitting";
        }
        if (!email.includes('@')) {
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
                fullName,
                email,
                subject,
                message,
                'orly'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
            setFullName('');
            setSubject('');
            setEmail('');
            setMessage('');
            setEmailError('');
            setCompleteFieldsError('');
            setSubmitted(true);
        }
    }

    if (!submitted) {
        return (
            <div>
                <Menu />
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit}>
                    <label for="fullName">Full Name:</label>
                    <input id="fullName" type="text" placeholder="Please enter your full name" value={fullName} onChange={e => setFullName(e.target.value)} />
                    <label for="email" placeholder="Please enter your email address">Email:</label>
                    <div>{emailError}</div>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label for="subject" placeholder="Please enter the subject of your message">Subject:</label>
                    <input id="subject" type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                    <label for="message" placeholder="Please enter the your message">Subject:</label>
                    <input id="message" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    <div>{completeFieldsError}</div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    else {
        return (
            <div>
                <Menu />
                <h2>
                    Thank you for contacting us!
                </h2>
            </div>

        )
    }

}