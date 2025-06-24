import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Import the Modal component

// Initialize EmailJS with Vite environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission status
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);  // For disabling the submit button
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Disable submit button while sending
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Send email using emailjs
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )
      .then(() => {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        setShowModal(true);  // Show the modal after successful submission
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  // Initialize AOS (Animate On Scroll)
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD700]" data-aos="fade-up">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-zinc-400" data-aos="fade-up" data-aos-delay="200">
            Feel free to reach out! I’d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-4 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
                disabled={loading}  // Disable the button when loading is true
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact Info</h2>
            <p className="text-sm sm:text-base text-zinc-400">
              For project discussions or hiring inquiries, feel free to reach out! You can contact me using the form below, or choose one of the following methods to get in touch directly:
            </p>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-zinc-400">
                <strong>Email:</strong><a href="mailto:mohammedmansoor.dev@gmail.com" target='_blank'><span className="text-[#FFD700]">mohammedmansoor.dev@gmail.com</span></a>
              </li>
              <li className="text-sm sm:text-base text-zinc-400">
                <strong>Phone:</strong> <a href="https://wa.me/9849600239" target='_blank'><span className="text-[#FFD700]">+91 9849600239</span></a>
              </li>
              <li className="text-sm sm:text-base text-zinc-400">
                <strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/mohammed-mansoor-201a81343/" target='_blank'> <span className="text-[#FFD700]">linkedin.com/in/mohammed-mansoor-201a81343</span></a>
              </li>
              <li className="text-sm sm:text-base text-zinc-400">
                <strong>Github:</strong><a href="https://github.com/MohammedMansoor-Dev" target='_blank'> <span className="text-[#FFD700]">github.com/MohammedMansoor-Dev</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Show Modal on successful submission */}
      {showModal && (
        <Modal
          message="Thank you for contacting us! We'll get back to you as soon as possible."
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Contact;