import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-green to-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Maximize Your Finances - Get Expert Advice Now
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Ready to take your business to the next level? Our expert team is here to help you succeed.
        </p>
        <Link
          to="/reach-us"
          className="inline-flex items-center px-8 py-4 bg-primary-white text-primary-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
        >
          Reach Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;