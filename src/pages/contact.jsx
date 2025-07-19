import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ixpfpyb",
        "template_k11ixij",
        form.current,
        "ryTeY-Y7CoQGAqWvK"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="lg:pt-50 pt-25 px-4 md:px-10 mx-auto flex flex-col gap-y-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      <div className="w-full flex lg:flex-row md:flex-row flex-col gap-x-10 gap-y-10">
        <div className="lg:w-1/2 md:w-1/2 w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4947721623583!2d-7.589843184799054!3d33.573110580727245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcf0c06c083%3A0xd6fda3c7a1c8e87!2sCasablanca!5e0!3m2!1sen!2sma!4v1717433090640!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-6 rounded-2xl shadow-lg lg:w-1/2 md:w-1/2 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="form_name"
              placeholder="Your Name"
              required
              className="p-3 border rounded-xl w-full"
            />
            <input
              type="email"
              name="form_email"
              placeholder="Your Email"
              required
              className="p-3 border rounded-xl w-full"
            />
          </div>

          <input
            type="tel"
            name="form_phone"
            placeholder="Your Phone"
            required
            className="p-3 border rounded-xl w-full"
          />

          <input
            type="text"
            name="form_subject"
            placeholder="Subject"
            required
            className="p-3 border rounded-xl w-full"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 border rounded-xl w-full h-32 resize-none"
          />

          <button
            type="submit"
            className="bg-[#000] hover:bg-[#e65540] text-white py-3 px-6 rounded-xl transition-colors w-full"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
