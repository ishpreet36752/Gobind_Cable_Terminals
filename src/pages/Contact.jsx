import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_company: "",
    user_email: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_u4lti3v",
        "template_j639f2c",
        formData,
        "vn61W49fI--Trg6IG"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ user_name: "", user_company: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full flex flex-col bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">Get in Touch</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Have questions about our cable terminals or need a custom quote? Our industrial specialists are ready to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Details Side */}
          <div className="flex flex-col space-y-10">
            <div>
              <h3 className="text-slate-900 text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Phone</p>
                    <p className="text-slate-900 text-lg font-medium">+91 9729372668</p>
                    <p className="text-slate-900 text-lg font-medium">+91 9253272668</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Email</p>
                    <p className="text-slate-900 text-lg font-medium">salesgobindlugs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Address</p>
                    <p className="text-slate-900 text-lg font-medium max-w-[280px] capitalize">
                      Near Kundan Coal Depot,<br />
                      Gautam Nagar, Street No.1,<br />
                      Rewari-123401 (Haryana), India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 shrink-0">
                    <span className="material-symbols-outlined text-2xl">schedule</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">Business Hours</p>
                    <p className="text-slate-900 text-lg font-medium">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-900 text-lg font-medium">Sat: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section merged visually */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 border border-slate-200 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d879.0194137220777!2d76.6182199284705!3d28.204953180353243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDEyJzE3LjgiTiA3NsKwMzcnMDcuOSJF!5e0!3m2!1sen!2sin!4v1733469005489!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10 h-fit">
            <h3 className="text-slate-900 text-2xl font-bold mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-6">
                <label className="flex flex-col flex-1">
                  <span className="text-sm font-medium leading-normal pb-2 text-slate-700">Full Name *</span>
                  <input
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="form-input flex w-full rounded-lg text-slate-900 bg-slate-50 border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 placeholder:text-slate-400 transition-colors"
                    placeholder="John Doe"
                    type="text"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1">
                  <span className="text-sm font-medium leading-normal pb-2 text-slate-700">Email Address *</span>
                  <input
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="form-input flex w-full rounded-lg text-slate-900 bg-slate-50 border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 placeholder:text-slate-400 transition-colors"
                    placeholder="john.doe@company.com"
                    type="email"
                  />
                </label>
                <label className="flex flex-col flex-1">
                  <span className="text-sm font-medium leading-normal pb-2 text-slate-700">Company Name</span>
                  <input
                    name="user_company"
                    value={formData.user_company}
                    onChange={handleChange}
                    className="form-input flex w-full rounded-lg text-slate-900 bg-slate-50 border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 h-12 px-4 placeholder:text-slate-400 transition-colors"
                    placeholder="Acme Corp"
                    type="text"
                  />
                </label>
              </div>
              <label className="flex flex-col w-full">
                <span className="text-sm font-medium leading-normal pb-2 text-slate-700">Message *</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea flex w-full rounded-lg text-slate-900 bg-slate-50 border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 placeholder:text-slate-400 transition-colors min-h-[120px] resize-y"
                  placeholder="How can we help you today?"
                ></textarea>
              </label>
              <button
                type="submit"
                className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold transition-all shadow-md hover:shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
