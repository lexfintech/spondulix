import React from 'react';
import { Mail, Linkedin, Award, Users } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Managing Partner & CEO",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sarah brings over 15 years of experience in financial consulting and business strategy. She has led numerous successful transformations for Fortune 500 companies and specializes in complex financial restructuring and strategic planning.",
      expertise: ["Financial Strategy", "Business Transformation", "M&A Advisory"]
    },
    {
      name: "Michael Chen",
      role: "Senior Tax Partner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Michael is a certified tax professional with deep expertise in corporate taxation and compliance. He has helped hundreds of businesses optimize their tax strategies and ensure full regulatory compliance across multiple jurisdictions.",
      expertise: ["Corporate Taxation", "Tax Planning", "Regulatory Compliance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Meet the experienced professionals who drive our success
          </p>
        </div>
      </section>

      {/* Team Description */}
      <section className="py-16 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <p className="text-lg text-primary-muted leading-relaxed mb-8">
              Our team consists of highly qualified professionals with diverse backgrounds in finance, taxation, audit, legal compliance, and business consulting. Each team member brings unique expertise and a shared commitment to delivering exceptional results for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Collaborative</h3>
                <p className="text-primary-muted">Working together to achieve the best outcomes</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Certified</h3>
                <p className="text-primary-muted">Professional certifications and continuous learning</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Client-Focused</h3>
                <p className="text-primary-muted">Dedicated to your success and satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">{member.name}</h3>
                    <p className="text-primary-green font-semibold mb-4">{member.role}</p>
                    <p className="text-primary-muted mb-4 leading-relaxed">{member.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary-dark mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-background text-primary-dark text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="text-primary-green hover:text-primary-blue transition-colors">
                        <Mail className="h-5 w-5" />
                      </button>
                      <button className="text-primary-green hover:text-primary-blue transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
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

export default OurTeam;