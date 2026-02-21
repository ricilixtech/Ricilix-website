const ContactInfo = () => {
    return (
      <div>
        <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 mb-6">
          Get In Touch
        </h2>
        
        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-small flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg text-neutral-900 mb-1">Email</h3>
              <p className="text-neutral-600">ricilixtech@gmail.com</p>
            </div>
          </div>
          
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-small flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg text-neutral-900 mb-1">Business Hours</h3>
              <p className="text-neutral-600">Monday - Friday: 9am - 6pm PST</p>
              <p className="text-neutral-600">Weekend: By appointment</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-large">
          <h3 className="font-heading text-xl text-neutral-900 mb-4">
            Book a Free Consultation
          </h3>
          <p className="text-neutral-600 mb-6">
            Schedule a 30-minute call with our team to discuss your business challenges and explore solutions.
          </p>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-small hover:bg-blue-700 transition shadow-custom font-medium">
            Schedule Now
          </button>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;