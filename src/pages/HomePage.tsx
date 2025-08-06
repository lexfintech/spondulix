import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Calculator, 
  FileText, 
  Users, 
  BarChart3, 
  Shield,  
  Clock, 
  Award,
  CheckCircle,
  DollarSign,
  Target,
  Briefcase
} from 'lucide-react';
import FAQ from '../components/FAQ';
import ContactBanner from '../components/ContactBanner';

const HomePage = () => {
  const services = [
    { icon: TrendingUp, title: "Business Planning", description: "Strategic planning for sustainable growth and success" },
    { icon: Target, title: "Strategy & Execution", description: "Transform your vision into actionable results" },
    { icon: BarChart3, title: "Financial Projections", description: "Accurate forecasting for informed decision making" },
    { icon: Calculator, title: "Outsourcing & Audit", description: "Comprehensive audit and outsourcing solutions" },
    { icon: FileText, title: "Financial Analysis", description: "In-depth analysis for better financial insights" },
    { icon: Briefcase, title: "Legal Advisory", description: "Expert legal guidance and compliance solutions" }
  ];

  const ourServices = [
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Comprehensive financial planning to secure your business future"
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Expert advisory services for optimal financial decisions"
    },
    {
      icon: Users,
      title: "Payroll Processing",
      description: "Efficient and accurate payroll management services"
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities"
    },
    {
      icon: Shield,
      title: "Audit Services",
      description: "Thorough audit services ensuring compliance and accuracy"
    },
    {
      icon: FileText,
      title: "Specialized Taxation",
      description: "Expert assistance with complex taxation matters"
    },
    {
      icon: Award,
      title: "Legal Advisory",
      description: "Comprehensive legal advisory and compliance services"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Tax Expertise",
      description: "Deep knowledge in all aspects of taxation and compliance"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Optimized solutions that save time and reduce costs"
    },
    {
      icon: CheckCircle,
      title: "Audit Readiness",
      description: "Always prepared for audits with proper documentation"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Streamlined processes that save valuable business time"
    }
  ];

  const faqs = [
    {
      question: "What services does Spondulix offer?",
      answer: "We offer comprehensive financial and legal services including tax planning, audit services, financial advisory, payroll processing, legal compliance, and business consulting."
    },
    {
      question: "How can Spondulix help my business save money?",
      answer: "Our expert team identifies cost-saving opportunities through strategic tax planning, efficient processes, and optimized financial structures tailored to your business needs."
    },
    {
      question: "Do you provide services for small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to large corporations, providing scalable solutions that grow with your business."
    },
    {
      question: "What makes Spondulix different from other consulting firms?",
      answer: "Our unique combination of financial expertise, legal knowledge, and personalized service ensures comprehensive solutions that address all aspects of your business needs."
    },
    {
      question: "How do I get started with Spondulix?",
      answer: "Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to understand your needs and propose the best solutions for your business."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Spondulix
              <span className="block text-3xl md:text-5xl mt-2">
                Elevate Your Business with Expert Consulting!
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              At Spondulix, we believe in empowering our clients with the knowledge and tools they need to make informed financial and legal decisions. Let us help you chart a path to success.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-primary-white text-primary-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 animate-float">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Services Panel */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Core Services</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              Comprehensive business solutions designed to drive your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-primary-green mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-primary-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Who We Are</h2>
              <p className="text-primary-muted leading-relaxed mb-6">
                Spondulix is a leading consulting firm specializing in financial and legal advisory services. With years of experience and a team of dedicated professionals, we provide comprehensive solutions that help businesses thrive in today's competitive landscape.
              </p>
              <p className="text-primary-muted leading-relaxed mb-6">
                Our commitment to excellence and client satisfaction has made us a trusted partner for businesses across various industries. We combine deep expertise with innovative approaches to deliver results that exceed expectations.
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center text-primary-green font-semibold hover:text-primary-blue transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Services</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ourServices.map((service, index) => (
              <div
                key={index}
                className="bg-primary-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-10 w-10 text-primary-green mb-4" />
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-primary-muted text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why choose us"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Why Choose Us</h2>
              <p className="text-primary-muted leading-relaxed mb-8">
                We combine expertise, efficiency, and personalized service to deliver exceptional results for our clients.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="h-8 w-8 text-primary-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark mb-1">{item.title}</h3>
                      <p className="text-primary-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} />

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
};

export default HomePage;