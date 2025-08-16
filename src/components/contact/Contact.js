
function Contact() {
    return (
         <section id="contact" className="py-16 md:py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    <p className="text-gray-400 mt-2">We're here to help. Contact us by phone, email, or visit our shop.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Details</h3>
                            <div className="space-y-4 text-gray-300">
                                <p className="flex items-center justify-center md:justify-start">
                                    <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span><a href="tel:9619396925" className="hover:text-orange-400">9619396925</a> / <a href="tel:8108546138" className="hover:text-orange-400">8108546138</a></span>
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                     <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <a href="mailto:shankarschougule30@gmail.com" className="hover:text-orange-400">shankarschougule30@gmail.com</a>
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                    <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <span>Near Datta Mandir, Kalwa(E)</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1234567890123!2d72.98123456789012!3d19.189012345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90e1a4d1e2f%3A0x1a2b3c4d5e6f7g8h!2sDatta%20Mandir%2C%20Kalwa!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" 
                                width="100%" 
                                height="250" 
                                style={{ border:0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
