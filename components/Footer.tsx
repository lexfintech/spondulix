import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary-green" />
              <span className="text-2xl font-bold">Spondulix</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Spondulix, we believe in empowering our clients with the knowledge and tools they need to make informed financial and legal decisions. Let us help you chart a path to success.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-green">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Financial Recording</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Payroll Processing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Tax Preparation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Financial Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Audit Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Financial Planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-green">Company</h3>
            <ul className="space-y-2">
              {/* <li><a href="/about-us" className="text-gray-300 hover:text-primary-green transition-colors">About Us</a></li>
              <li><a href="/our-team" className="text-gray-300 hover:text-primary-green transition-colors">Leadership</a></li> */}
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-green transition-colors">Partner</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Spondulix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;