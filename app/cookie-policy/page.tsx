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
              <strong>Preference Cookies:</strong> Remember your language and theme preferences to provide a personalized experience
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences for UI elements (such as sidebar state) to improve your browsing experience
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (via third-party services)
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used for advertising and tracking purposes (via third-party services)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">First-Party Cookies</h3>
          <p className="text-muted-foreground mb-4">
            These are cookies set directly by our website:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li><strong>Preference Cookies:</strong> Store your language and theme preferences. These persist until you clear your browser data.</li>
            <li><strong>Functional Cookies:</strong> Remember UI state (such as sidebar preferences) to improve your experience. These typically expire after 7 days.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Local Storage</h3>
          <p className="text-muted-foreground mb-4">
            We also use browser local storage (similar to cookies) to remember:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>Your language preference</li>
            <li>Your theme preference (dark/light mode)</li>
            <li>Newsletter popup dismissal status (stored for 30 days)</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            You can clear local storage through your browser settings, similar to clearing cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-4">We may use third-party services that set their own cookies, including:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li><strong>Facebook Pixel:</strong> Used for analytics and advertising purposes. These cookies help us measure the effectiveness of our marketing campaigns and deliver relevant advertisements.</li>
            <li><strong>Vercel Analytics:</strong> Used to understand website performance and user behavior (if enabled).</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4">
            <li>View and delete cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
            <li>Clear local storage data</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Note that blocking or deleting cookies may impact your experience on our website. For example, you may need to reset your language or theme preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on
            this page with an updated "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about our Cookie Policy, please contact us at support@solteka.co
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
