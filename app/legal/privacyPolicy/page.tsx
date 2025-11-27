const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: {lastUpdated}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-4">
            At Solteka, we respect your privacy and are committed to protecting your personal data. This privacy
            policy explains how we collect, use, and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We may collect personal information that you provide directly to us, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Name and contact information</li>
            <li>Email address and phone number</li>
            <li>Business information</li>
            <li>Project requirements and specifications</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use the collected information for:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about projects</li>
            <li>Processing payments</li>
            <li>Sending updates and marketing communications (with your consent)</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground mb-4">
            We may use third-party services (such as Calendly, payment processors, and analytics tools) that have their
            own privacy policies. We encourage you to review their policies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about this Privacy Policy, please contact us at support@solteka.co
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
