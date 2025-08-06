import React from 'react';
import FAQ from '../components/FAQ';
import ContactBanner from '../components/ContactBanner';

const KnowledgeHub = () => {
  const popularFAQs = [
    {
      question: "What is the difference between financial advisory and financial planning?",
      answer: "Financial advisory is a broader service that includes ongoing guidance on various financial matters, while financial planning specifically focuses on creating a structured plan to achieve specific financial goals over time."
    },
    {
      question: "How often should a business conduct internal audits?",
      answer: "The frequency of internal audits depends on the size and complexity of the business, but typically ranges from quarterly to annually. High-risk areas may require more frequent auditing."
    },
    {
      question: "What are the key benefits of outsourcing accounting functions?",
      answer: "Outsourcing accounting provides cost savings, access to expertise, improved accuracy, compliance assurance, and allows businesses to focus on core activities while maintaining professional financial management."
    }
  ];

  const taxFAQs = [
    {
      question: "What is the current corporate tax rate in India?",
      answer: "The corporate tax rate in India varies based on company type and turnover. For domestic companies, the rate is 30% for income above ₹10 crore, with additional surcharge and cess applicable."
    },
    {
      question: "How can businesses optimize their tax planning strategies?",
      answer: "Effective tax planning involves utilizing available deductions, exemptions, and incentives, proper timing of income and expenses, and strategic business structure planning within legal frameworks."
    },
    {
      question: "What are the penalties for late GST filing?",
      answer: "Late GST filing attracts penalties of ₹50 per day for each return (CGST and SGST), with a maximum penalty of 0.25% of turnover. Interest is also charged at 18% per annum on outstanding tax amounts."
    }
  ];

  const auditFAQs = [
    {
      question: "What documents are required for a statutory audit?",
      answer: "Key documents include books of accounts, bank statements, invoices, contracts, board resolutions, financial statements, tax returns, and supporting vouchers for all transactions."
    },
    {
      question: "How long does a typical audit process take?",
      answer: "The audit duration depends on company size and complexity. Small companies may take 2-4 weeks, while larger organizations can take 6-12 weeks or more for comprehensive audits."
    },
    {
      question: "What is the role of management during an audit?",
      answer: "Management should provide necessary documentation, respond to auditor queries, implement recommended controls, and ensure staff cooperation throughout the audit process."
    }
  ];

  const generalTaxAuditFAQs = [
    {
      question: "Who is required to get a tax audit done?",
      answer: "Businesses with turnover exceeding ₹1 crore (₹10 crore for certain cases) or professionals with gross receipts over ₹50 lakh are required to conduct tax audits under Section 44AB."
    },
    {
      question: "What is the due date for tax audit report filing?",
      answer: "The tax audit report must be filed by September 30th of the assessment year, or October 31st if the return is filed by the extended due date."
    },
    {
      question: "Can a company avoid tax audit by maintaining lower turnover?",
      answer: "While staying below the turnover threshold can exempt from mandatory tax audit, this should not compromise business growth. Voluntary audits can still provide valuable insights."
    }
  ];

  const processComplianceFAQs = [
    {
      question: "What are the key compliance requirements for private limited companies?",
      answer: "Key requirements include annual filing of financial statements, conducting board meetings, maintaining statutory registers, filing annual returns, and compliance with ROC regulations."
    },
    {
      question: "How to ensure GST compliance for multi-state operations?",
      answer: "Register in each state of operation, maintain separate books for each state, file state-specific returns, and ensure proper interstate transaction documentation with valid tax invoices."
    },
    {
      question: "What is the process for obtaining ESI and PF registration?",
      answer: "Apply online through respective portals, submit required documents including incorporation certificate, employee details, and bank information. Registration is mandatory for establishments meeting threshold criteria."
    }
  ];

  const penaltiesFAQs = [
    {
      question: "What are the consequences of non-compliance with tax regulations?",
      answer: "Consequences include monetary penalties, interest charges, prosecution, asset seizure in severe cases, and potential imprisonment for willful tax evasion."
    },
    {
      question: "How can businesses minimize penalties and ensure compliance?",
      answer: "Maintain accurate records, file returns on time, conduct regular compliance reviews, seek professional guidance, and implement robust internal controls and processes."
    }
  ];

  const benefitsFAQs = [
    {
      question: "What are the strategic benefits of regular financial audits?",
      answer: "Benefits include improved internal controls, enhanced credibility with stakeholders, better risk management, operational efficiency improvements, and stronger financial decision-making capabilities."
    },
    {
      question: "How does proper tax planning contribute to business growth?",
      answer: "Effective tax planning optimizes cash flows, reduces tax burden, improves profitability, enables better investment decisions, and provides more resources for business expansion and development."
    }
  ];

  const technicalFAQs = [
    {
      question: "What is the difference between direct and indirect taxes?",
      answer: "Direct taxes are levied directly on income or wealth (like income tax, corporate tax), while indirect taxes are imposed on goods and services (like GST, customs duty) and passed on to consumers."
    },
    {
      question: "How do accounting standards impact financial reporting?",
      answer: "Accounting standards ensure consistency, transparency, and comparability in financial reporting, helping stakeholders make informed decisions and ensuring regulatory compliance."
    }
  ];

  const postAuditFAQs = [
    {
      question: "What actions should be taken after audit completion?",
      answer: "Review audit findings, implement recommended changes, address identified weaknesses, communicate results to stakeholders, and plan follow-up actions for continuous improvement."
    },
    {
      question: "How to handle audit qualifications or adverse opinions?",
      answer: "Address underlying issues immediately, implement corrective measures, engage with auditors for clarification, and consider seeking second opinions if necessary while maintaining transparency with stakeholders."
    }
  ];

  const auditTypesFAQs = [
    {
      question: "What are the different types of audits conducted for businesses?",
      answer: "Main types include statutory audits (mandatory legal requirement), internal audits (internal controls assessment), tax audits (compliance verification), forensic audits (fraud investigation), and management audits (operational efficiency)."
    }
  ];

  const checklistFAQs = [
    {
      question: "What documents are required for company registration?",
      answer: "Required documents include DIN and DSC for directors, MOA and AOA, registered office proof, director consent letters, PAN cards, address proofs, and professional certificates if applicable."
    },
    {
      question: "What is the checklist for GST registration?",
      answer: "Requirements include business PAN, address proof of business premises, bank account details, identity and address proof of promoters, and authorization letter for representatives."
    },
    {
      question: "What documents are needed for trust incorporation?",
      answer: "Key documents include trust deed, identity proofs of trustees, address proofs, PAN application, bank account opening documents, and registration with appropriate authorities depending on trust type."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Knowledge Hub</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up">
            Your comprehensive resource for financial, legal, and business knowledge
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-primary-muted leading-relaxed animate-slide-up">
            Explore our extensive knowledge base covering various aspects of business finance, taxation, auditing, and compliance. Find answers to common questions and gain insights to help your business succeed.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <FAQ faqs={popularFAQs} title="Most Popular Questions" />
      <FAQ faqs={taxFAQs} title="Advanced Tax Questions" />
      <FAQ faqs={auditFAQs} title="Audit Basics Questions" />
      <FAQ faqs={generalTaxAuditFAQs} title="General Tax Audit Questions" />
      <FAQ faqs={processComplianceFAQs} title="Process and Compliance Questions" />
      <FAQ faqs={penaltiesFAQs} title="Penalties and Consequences" />
      <FAQ faqs={benefitsFAQs} title="Benefits and Strategic Importance" />
      <FAQ faqs={technicalFAQs} title="Technical and Practical Aspects" />
      <FAQ faqs={postAuditFAQs} title="Post Audit Considerations" />
      <FAQ faqs={auditTypesFAQs} title="Types of Audits" />
      <FAQ faqs={checklistFAQs} title="Checklist Required for Different Registrations, Trust Incorporation & GST Registration" />

      <ContactBanner />
    </div>
  );
};

export default KnowledgeHub;