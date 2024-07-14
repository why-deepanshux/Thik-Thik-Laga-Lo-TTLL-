"use client"
import { useRef, useEffect } from "react";
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Ensure component mounts on the client side
    if (!form.current) return;
    
    // Other client-side initialization if needed
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',  // Replace with your actual service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', // Replace with your actual template ID
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID || ''      // Replace with your actual user ID
      )
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#c9112d] py-8 px-6 rounded-xl gap-6">
      <div className="flex-1 flex flex-col text-white justify-center">
        <div className="text-4xl font-bold mb-2">Have a Query/Issue?</div>
        <div className="text-2xl mb-4">Contact Us</div>
        <div className="text-lg">Our support team is there for you 24/7.</div>
      </div>

      <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-semibold mb-1">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username"
              placeholder="Your Username" 
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c9112d]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Enter your registered Email" 
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c9112d]"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="query" className="text-gray-700 font-semibold mb-1">Query</label>
            <textarea 
              id="query" 
              name="query"
              rows={4} 
              placeholder="Your Query" 
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c9112d]"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-black text-white font-bold py-2 rounded-lg hover:bg-[#a50e26] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
