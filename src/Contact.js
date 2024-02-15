
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyJrQQintJXoDD_YJy7f264LTjimOLLawkhU4IoriW1lv3SAXK6xIqqLZOcsF8YshQ/exec', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                // Reset form after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;
