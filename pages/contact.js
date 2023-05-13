import Layout from "../components/Layout";

const ContactForm = () => {

    return (
        <Layout>
            <form
                action=""
                method="POST"
                className="max-w-xl mx-auto mt-8" >
                <h2 className="text-2xl font-semibold text-aulaBlack text-center md:-ml-24 mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Name</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="text" name="name" />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Email</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="email" name="email" />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Message</label>
                    <textarea className="w-full px-4 py-2 border rounded-md" name="message"></textarea>
                </div>
                <button className="block mx-auto md:mx-0 bg-aulaBlack text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200" type="submit">Submit</button>
            </form>
        </Layout>
    );
};

export default ContactForm;
