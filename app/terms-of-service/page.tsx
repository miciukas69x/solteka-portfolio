const TermsOfServicePage = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">Last updated: {lastUpdated}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using Michailinas services, you agree to be bound by these Terms of Service. If you disagree
            with any part of these terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services</h2>
          <p className="text-muted-foreground mb-4">
            Michailinas provides web development and digital marketing services including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Website design and development</li>
            <li>SEO optimization</li>
            <li>Digital marketing campaigns</li>
            <li>Custom software development</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms</h2>
          <p className="text-muted-foreground mb-4">Payment terms will be outlined in individual project proposals. Generally:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>50% deposit required before project commencement</li>
            <li>Remaining balance due upon project completion</li>
            <li>Custom projects may have milestone-based payment schedules</li>
            <li>All payments are non-refundable once work has begun</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Project Timeline</h2>
          <p className="text-muted-foreground mb-4">
            Project timelines are estimates and may vary based on complexity, client feedback, and revisions. We will make
            reasonable efforts to meet agreed-upon deadlines.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            Upon full payment, clients receive full ownership of custom-developed work. We retain the right to showcase
            completed projects in our portfolio unless otherwise agreed.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Revisions</h2>
          <p className="text-muted-foreground mb-4">
            Each service tier includes a specified number of revisions. Additional revisions beyond the agreed scope may incur
            additional charges.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            Michailinas shall not be liable for any indirect, incidental, special, or consequential damages arising from the
            use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
          <p className="text-muted-foreground mb-4">
            Either party may terminate a project with written notice. Clients are responsible for payment of all work completed
            up to the termination date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground mb-4">For questions about these Terms of Service, contact us at contact@michailinas.com</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;

