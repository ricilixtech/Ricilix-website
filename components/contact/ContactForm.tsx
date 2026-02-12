'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Business Automation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 mb-6">
        Send Us a Message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-neutral-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-small focus:outline-none focus:border-blue-600 transition"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-neutral-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-small focus:outline-none focus:border-blue-600 transition"
            placeholder="john@company.com"
          />
        </div>
        
        <div>
          <label className="block text-neutral-700 font-medium mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-small focus:outline-none focus:border-blue-600 transition"
            placeholder="Your Company"
          />
        </div>
        
        <div>
          <label className="block text-neutral-700 font-medium mb-2">What can we help you with?</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-small focus:outline-none focus:border-blue-600 transition"
          >
            <option>Business Automation</option>
            <option>CRM Implementation</option>
            <option>Website Development</option>
            <option>Custom Workflows</option>
            <option>AI Integration</option>
            <option>General Inquiry</option>
          </select>
        </div>
        
        <div>
          <label className="block text-neutral-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-small focus:outline-none focus:border-blue-600 transition"
            placeholder="Tell us about your project or challenge..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-small hover:bg-blue-700 transition shadow-custom font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;