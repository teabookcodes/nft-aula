import Layout from "../components/Layout";
import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <Layout>
            <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-aulaBlack mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="name">Name</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full px-4 py-2 border rounded-md" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="block mx-auto md:mx-0 bg-aulaBlack text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200" type="submit">Submit</button>
            </form>
        </Layout>
    );
};

export default ContactForm;
