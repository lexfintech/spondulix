import React from 'react';
import { Calculator, FileText } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const Taxation = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Strategic tax planning services designed to minimize your tax liabilities while ensuring full compliance with all regulations. We help you take advantage of tax-saving opportunities and optimize your tax position for maximum savings."
    },
    {
      icon: FileText,
      title: "Specialized Taxation Assistance",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expert assistance with complex taxation matters including international tax, transfer pricing, indirect taxes, and specialized industry tax requirements. Our team handles the most challenging tax issues with precision and expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Taxation</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Comprehensive taxation services to optimize your tax strategy and ensure compliance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-green mr-3" />
                    <h3 className="text-2xl font-semibold text-primary-dark">{service.title}</h3>
                  </div>
                  <p className="text-primary-muted leading-relaxed text-lg">{service.description}</p>
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

export default Taxation;