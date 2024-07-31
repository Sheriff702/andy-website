import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Have questions or need assistance? We are here to help. Reach out to
            us, and our team will respond promptly to ensure your needs are met.
            Whether you’re looking for more information about our services or
            need support with an ongoing project, we are just a message away.
            Let’s create something extraordinary together.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
