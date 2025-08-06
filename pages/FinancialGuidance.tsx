import React from 'react';
import { TrendingUp, DollarSign, PieChart } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const FinancialGuidance = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial Planning",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive financial planning services that help you chart a clear path to your financial goals. We analyze your current situation, identify opportunities, and create strategic plans for sustainable growth and long-term success."
    },
    {
      icon: DollarSign,
      title: "Financial Advisory",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expert financial advisory services providing you with the insights and guidance needed to make informed financial decisions. Our advisors work closely with you to optimize your financial strategies and maximize returns."
    },
    {
      icon: PieChart,
      title: "Wealth Management",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional wealth management services designed to preserve and grow your assets. We offer personalized investment strategies, risk management, and portfolio optimization to help you achieve your financial objectives."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Financial Guidance</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Expert financial guidance to help you make informed decisions and achieve your financial goals
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

export default FinancialGuidance;