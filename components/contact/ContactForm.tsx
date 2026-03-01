'use client';

import { useState, useEffect } from 'react';

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Business Automation',
    message: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* =========================
     AUTO RESET SUCCESS
  ========================= */
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  /* =========================
     EMAIL VALIDATION
  ========================= */
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  /* =========================
     SUBMIT HANDLER
  ========================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim() === '') {
      setError("Message cannot be empty.");
      return;
    }

    setError(null);
    setLoading(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSey5hnC6XKaulWdX4eFQpDuhwO7guMAYAKmXiYShvDwusLPug/formResponse";

    const googleFormData = new FormData();

    googleFormData.append("entry.1642493689", formData.name);
    googleFormData.append("entry.1370329063", formData.email);
    googleFormData.append("entry.80997870", formData.phone);
    googleFormData.append("entry.540305835", formData.company);
    googleFormData.append("entry.1156334194", formData.service);
    googleFormData.append("entry.1370887528", formData.message);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      });

      setSuccess(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Business Automation',
        message: ''
      });

    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  /* =========================
     INPUT CHANGE
  ========================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* =========================
     COMMON INPUT STYLE
  ========================= */
  const inputStyle =
    "w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 transition text-neutral-100 bg-transparent placeholder-neutral-400";

  return (
    <div>

      <h2 className="text-center font-bold tracking-tight leading-tight font-heading text-2xl md:text-3xl text-white mb-6">
        Send Us a Message
      </h2>

      {/* SUCCESS MESSAGE */}
      {success ? (
        <div className="text-center py-10 animate-fade-in">
          <div className="text-green-600 text-xl font-semibold mb-4">
            ✅ Thank you! Your message has been sent successfully.
          </div>
          <p className="text-neutral-200">
            Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <>
          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-6 text-red-600 text-center font-medium">
              ⚠ {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* NAME */}
            <div>
              <label className="block text-white mb-2 font-bold">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputStyle}
                placeholder="John Doe"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-white mb-2 font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
                placeholder="john@company.com"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-white mb-2 font-bold">Phone Number</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}
                placeholder="+92 310 4737764"
              />
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-white mb-2 font-bold">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Your Company"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label className="block text-white mb-2 font-bold">
                What can we help you with?
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={inputStyle}
              >
                <option>Business Automation</option>
                <option>CRM Implementation</option>
                <option>Website Development</option>
                <option>Custom Workflows</option>
                <option>AI Integration</option>
                <option>General Inquiry</option>
                <option>Others</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-white mb-2 font-bold">Message</label>

              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Tell us about your project..."
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition shadow-md font-medium disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </>
      )}

    </div>
  );
};

export default ContactForm;