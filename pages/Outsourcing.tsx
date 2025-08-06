import React from 'react';
import { BookOpen, Settings, BarChart3, Building, FileText, Users } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const Outsourcing = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Bookkeeping",
      image: "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional bookkeeping services to maintain accurate financial records and ensure your books are always up-to-date and compliant."
    },
    {
      icon: Settings,
      title: "IFRS/INDAS Implementation",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expert assistance in implementing International Financial Reporting Standards and Indian Accounting Standards for global compliance."
    },
    {
      icon: BarChart3,
      title: "Financial Accounting",
      image: "https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive financial accounting services including preparation of financial statements and management of accounting processes."
    },
    {
      icon: Building,
      title: "Company Accounting",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Specialized company accounting services tailored to meet the unique requirements of corporate entities and regulatory compliance."
    },
    {
      icon: FileText,
      title: "Reporting Services",
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional reporting services including management reports, statutory reports, and customized business intelligence reports."
    },
    {
      icon: Users,
      title: "Payroll Services",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete payroll processing services including salary calculations, tax deductions, compliance reporting, and employee benefits management."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Outsourcing</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Comprehensive outsourcing solutions to streamline your operations and reduce costs
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-muted leading-relaxed animate-slide-up">
            Our outsourcing services help you focus on your core business activities while we handle your financial and administrative tasks with expertise and efficiency. From bookkeeping to payroll processing, we provide reliable solutions that scale with your business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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

export default Outsourcing;