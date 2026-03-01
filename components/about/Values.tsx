const Values = () => {
    return (
      <section className="py-16 md:py-20 bg-white max-h-[900px] bg-gradient-to-b from-red-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-neutral-100 font-bold mb-4">
              Our Core <span className="text-red-500">Values</span>
            </h2>
            <p className="text-lg text-neutral-200">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="text-center border border-red-400 p-6 rounded-lg ">
              <div className="w-16 h-16 bg-blue-100 rounded-large flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl  font-bold text-red-500 mb-3">Innovation First</h3>
              <p className="text-neutral-200">
                We constantly explore cutting-edge technologies to deliver the best solutions for our clients.
              </p>
            </div>
            
            <div className="text-center border border-red-400 p-6 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-large flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-red-500 font-bold mb-3">Client Success</h3>
              <p className="text-neutral-200">
                Your growth is our success. We measure our impact by the results you achieve.
              </p>
            </div>
            
            <div className="text-center border border-red-400 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-large flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-red-500 font-bold mb-3">Reliability</h3>
              <p className="text-neutral-200">
                We build systems that work flawlessly, backed by world-class support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Values;