import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const ReachUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Reach Us</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Get in touch with our expert team for personalized business solutions
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-muted leading-relaxed animate-slide-up">
            We're here to help you succeed. Whether you need financial guidance, tax planning, audit services, or legal advisory, our team of experts is ready to provide personalized solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-primary-white p-8 rounded-lg shadow-sm animate-slide-up">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-dark mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary-dark mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="financial-guidance">Financial Guidance</option>
                    <option value="taxation">Taxation</option>
                    <option value="audit">Audit Services</option>
                    <option value="outsourcing">Outsourcing</option>
                    <option value="legal-advisory">Legal Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-primary-white p-6 rounded-lg shadow-sm animate-fade-in">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-8 w-8 text-primary-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">Chat to Support</h3>
                      <p className="text-primary-muted mb-2">We're here to help. Chat with our support team.</p>
                      <button className="text-primary-green font-semibold hover:text-primary-blue transition-colors">
                        Start Live Chat
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-white p-6 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-8 w-8 text-primary-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">Call Us</h3>
                      <p className="text-primary-muted mb-2">Mon-Fri from 9am to 6pm</p>
                      <a href="tel:+91-9876543210" className="text-primary-green font-semibold hover:text-primary-blue transition-colors">
                        +91-9876543210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-white p-6 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-8 w-8 text-primary-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">Visit Us</h3>
                      <p className="text-primary-muted mb-2">Visit our office headquarters</p>
                      <address className="text-primary-green not-italic">
                        123 Business District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-primary-white p-4 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src="https://images.pexels.com/photos/7876049/pexels-photo-7876049.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office Location Map"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default ReachUs;