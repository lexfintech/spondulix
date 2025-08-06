import React from 'react';
import { Scale } from 'lucide-react';
import ContactBanner from '../components/ContactBanner';

const LegalAdvisory = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Legal Advisory & Compliances</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Expert legal guidance and compliance solutions to protect your business interests
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-muted leading-relaxed animate-slide-up">
            Our legal advisory and compliance services ensure your business operates within the legal framework while minimizing risks and maximizing opportunities. We provide comprehensive legal support across various areas of business law.
          </p>
        </div>
      </section>

      {/* Service Card */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 animate-slide-up">
            <img
              src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Legal Advisory"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Scale className="h-10 w-10 text-primary-green mr-4" />
                <h3 className="text-2xl font-semibold text-primary-dark">Legal Advisory/Compliances</h3>
              </div>
              <div className="space-y-4 text-primary-muted leading-relaxed">
                <p>
                  Our legal advisory services cover a wide range of business legal needs including corporate governance, contract law, regulatory compliance, and dispute resolution. We work closely with businesses to ensure they meet all legal requirements while pursuing their strategic objectives.
                </p>
                <p>
                  Key areas of our legal services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Corporate law and governance</li>
                  <li>Contract drafting and review</li>
                  <li>Regulatory compliance</li>
                  <li>Employment law</li>
                  <li>Intellectual property protection</li>
                  <li>Mergers and acquisitions</li>
                  <li>Dispute resolution and litigation support</li>
                  <li>Compliance audits and risk assessment</li>
                </ul>
                <p>
                  Our experienced legal team stays current with changing regulations and legal precedents to provide you with accurate, timely advice that protects your business interests and supports your growth objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default LegalAdvisory;