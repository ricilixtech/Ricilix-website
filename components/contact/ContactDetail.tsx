'use client';

import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactDetail = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-2xl leading-tight tracking-tight font-heading md:text-3xl font-bold text-red-600 mb-10">
        Contact Us On
      </h2>

      <div className="flex justify-center items-center gap-10">

        {/* WhatsApp */}
        <a
          href="https://wa.me/923104737764"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition shadow-md hover:scale-110"
        >
          <FaWhatsapp className="text-green-600 text-3xl" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/example-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition shadow-md hover:scale-110"
        >
          <FaLinkedin className="text-blue-600 text-3xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 transition shadow-md hover:scale-110"
        >
          <FaInstagram className="text-pink-600 text-3xl" />
        </a>

      </div>
    </section>
  );
};

export default ContactDetail;
