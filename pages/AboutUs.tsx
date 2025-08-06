import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business dealings and client relationships."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the best outcomes for our clients."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our success. We tailor our services to meet their unique needs and goals."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to provide cutting-edge solutions."
    }
  ];

  const services = [
    "Financial Planning & Advisory",
    "Tax Planning & Preparation",
    "Audit & Assurance Services",
    "Legal Advisory & Compliance",
    "Payroll Processing",
    "Business Consulting"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Discover the story behind Spondulix and our commitment to your success
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <p className="text-lg text-primary-muted leading-relaxed mb-8">
              Spondulix is a premier consulting firm that has been empowering businesses for over a decade. We specialize in providing comprehensive financial and legal advisory services that help organizations navigate complex business challenges and achieve sustainable growth.
            </p>
            <p className="text-lg text-primary-muted leading-relaxed">
              Our team of seasoned professionals brings together expertise from various domains including finance, taxation, audit, legal compliance, and business strategy. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering customized solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Excellence */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Meet Our Excellence</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              We are committed to delivering exceptional service through our experienced team and proven methodologies. Our track record speaks for itself, with hundreds of satisfied clients across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Happy Clients</h3>
              <p className="text-primary-muted">Businesses trust us with their success</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Years Experience</h3>
              <p className="text-primary-muted">Proven expertise in the industry</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">25+</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Expert Team</h3>
              <p className="text-primary-muted">Dedicated professionals at your service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Mission</h2>
              <p className="text-primary-muted leading-relaxed mb-6">
                Our mission is to empower businesses by providing comprehensive financial and legal advisory services that drive growth, ensure compliance, and maximize value. We are committed to building lasting relationships with our clients by delivering exceptional service and innovative solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-primary-green" />
                <div>
                  <h3 className="font-semibold text-primary-dark">Strategic Focus</h3>
                  <p className="text-primary-muted">Aligned with your business objectives</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our mission"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Core Values</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients and colleagues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-primary-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-3">{value.title}</h3>
                <p className="text-primary-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">The Services We Offer</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              Comprehensive solutions designed to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-background p-6 rounded-lg border-l-4 border-primary-green hover:shadow-md transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary-dark">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default AboutUs;