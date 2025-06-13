import React, { useState } from "react";

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Thank you for reaching out, ${form.name}!`);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div>
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input required name="name" value={form.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input required type="email" name="email" value={form.email} onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea required name="message" value={form.message} onChange={handleChange} />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;