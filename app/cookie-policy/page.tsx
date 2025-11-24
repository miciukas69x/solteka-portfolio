const CookiePolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: {lastUpdated}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you
            with a better experience by remembering your preferences and understanding how you use our site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground mb-4">We use cookies for several purposes:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and preferences
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Session Cookies</h3>
          <p className="text-muted-foreground mb-4">Temporary cookies that are deleted when you close your browser.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Persistent Cookies</h3>
          <p className="text-muted-foreground mb-4">Remain on your device for a set period or until you delete them.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-4">We may use third-party services that set their own cookies, including:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Google Analytics for website analytics</li>
            <li>Social media platforms for sharing content</li>
            <li>Payment processors for secure transactions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>View and delete cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Note that blocking or deleting cookies may impact your experience on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on
            this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about our Cookie Policy, please contact us at contact@michailinas.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;

