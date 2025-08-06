import React from 'react';
import { Shield, Search, FileCheck } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const Audit = () => {
  const services = [
    {
      icon: Shield,
      title: "Internal Audit",
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive internal audit services to evaluate and improve your organization's risk management, control, and governance processes. We help identify weaknesses and provide recommendations for operational improvements."
    },
    {
      icon: Search,
      title: "Forensic Audit",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized forensic audit services to investigate financial irregularities, fraud, and other financial crimes. Our expert team uses advanced techniques to uncover evidence and provide detailed findings for legal proceedings."
    },
    {
      icon: FileCheck,
      title: "Statutory Audit",
      image: "https://images.pexels.com/photos/7681093/pexels-photo-7681093.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional statutory audit services ensuring your financial statements comply with all regulatory requirements. We provide independent verification of your financial records and issue audit opinions as required by law."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Audit</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Professional audit services to ensure compliance, transparency, and financial integrity
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-muted leading-relaxed animate-slide-up">
            Our audit services provide independent verification and assessment of your financial records and processes. We ensure compliance with regulatory requirements while helping you identify opportunities for improvement and risk mitigation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-green mr-3" />
                    <h3 className="text-xl font-semibold text-primary-dark">{service.title}</h3>
                  </div>
                  <p className="text-primary-muted leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default Audit;