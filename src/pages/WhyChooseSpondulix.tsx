import React from 'react';
import { Award, DollarSign, CheckCircle, Clock, TrendingUp, Shield, Users, Target } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const WhyChooseSpondulix = () => {
  const reasons = [
    {
      icon: Award,
      title: "Tax Expertise",
      description: "Our team comprises certified tax professionals with deep knowledge of complex tax regulations, ensuring optimal tax strategies and full compliance for your business. We stay updated with the latest tax law changes to provide you with the most current advice."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "We help you identify cost-saving opportunities through strategic planning, process optimization, and efficient resource allocation. Our solutions are designed to maximize your ROI while minimizing unnecessary expenses and overhead costs."
    },
    {
      icon: CheckCircle,
      title: "Audit Readiness",
      description: "We maintain meticulous records and documentation standards that keep your business always prepared for audits. Our proactive approach ensures smooth audit processes and demonstrates your commitment to transparency and compliance."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "By handling complex financial and legal tasks, we free up your valuable time to focus on core business activities. Our streamlined processes and efficient methodologies ensure quick turnaround times without compromising quality."
    }
  ];

  const additionalBenefits = [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "15+ years of successful client partnerships"
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Strict data security and privacy protocols"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored solutions for your unique needs"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on achieving your business goals"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Why Choose Spondulix</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Discover what makes us the preferred choice for businesses seeking expert financial and legal advisory services
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <p className="text-lg text-primary-muted leading-relaxed">
              At Spondulix, we combine deep industry expertise with innovative solutions to deliver exceptional value to our clients. Our commitment to excellence, personalized service, and proven methodologies set us apart in the consulting industry. We don't just provide services – we build partnerships that drive long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-primary-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green bg-opacity-10 p-3 rounded-lg">
                    <reason.icon className="h-8 w-8 text-primary-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-dark mb-3">{reason.title}</h3>
                    <p className="text-primary-muted leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Additional Benefits</h2>
            <p className="text-primary-muted max-w-2xl mx-auto">
              Beyond our core strengths, we offer additional value that makes us your ideal business partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-1 transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-background p-6 rounded-lg mb-4 group-hover:bg-primary-green group-hover:text-white transition-all duration-200">
                  <benefit.icon className="h-10 w-10 mx-auto text-primary-green group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{benefit.title}</h3>
                <p className="text-primary-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Ready to Experience the Spondulix Difference?</h2>
            <p className="text-lg text-primary-muted mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our expert guidance. Let us show you how our unique approach can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">500+</div>
                <p className="text-primary-muted">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">98%</div>
                <p className="text-primary-muted">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">15+</div>
                <p className="text-primary-muted">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default WhyChooseSpondulix;