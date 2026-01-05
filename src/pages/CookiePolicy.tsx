import { Separator } from "@/components/ui/separator";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-tutor-neutral-darker">
          Cookie Policy
        </h1>
        <p className="text-tutor-neutral-dark mb-10">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              1. Introduction
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              This Cookie Policy explains how Block Mentor ("we", "us", or
              "our") uses cookies and similar technologies on our website and
              platform. This policy provides you with information about what
              cookies are, how we them, and how you can control them.
            </p>
            <p className="text-tutor-neutral-dark">
              By using our website, you consent to the use of cookies in
              accordance with this Cookie Policy.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              2. What Are Cookies?
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit our website. They
              allow us to recognize your device and remember certain information
              about your visit such as your preferences and actions.
            </p>
            <p className="text-tutor-neutral-dark">
              Cookies are widely used to make websites work more efficiently,
              enhance user experience, and provide website owners with
              information about how their website is being used.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              3. Types of Cookies We Use
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We use the following types of cookies on our website:
            </p>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Essential Cookies
            </h3>
            <p className="text-tutor-neutral-dark mb-4">
              These cookies are necessary for the website to function properly.
              They enable core functionalities such as security, network
              management, and authentication. You cannot opt out of these
              cookies as the cannot function properly without them.
            </p>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Functional Cookies
            </h3>
            <p className="text-tutor-neutral-dark mb-4">
              These cookies enable us to provide enhanced functionality and
              personalization. They may be set by us or by third-party providers
              whose services we have added to our pages. If you disable these
              cookies, some all of these services may not function properly.
            </p>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Performance Cookies
            </h3>
            <p className="text-tutor-neutral-dark mb-4">
              These cookies collect information about how visitors use our
              website, such as which pages visitors go to most often and if they
              receive error messages. They help us improve our website's
              performance and experience.
            </p>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Targeting/Advertising Cookies
            </h3>
            <p className="text-tutor-neutral-dark">
              These cookies are used to deliver advertisements that are more
              relevant to you and your interests. They are also used to limit
              the number of times you see an advertisement and to help measure
              the of advertising campaigns.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              4. Third-Party Cookies
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics, deliver
              advertisements, and so on. These cookies may include:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark">
              <li>
                Analytics cookies from services like Google Analytics to help us
                understand how visitors interact with our website
              </li>
              <li>
                Social media cookies from platforms like Facebook, Twitter, and
                LinkedIn to enable sharing features and advertisements
              </li>
              <li>
                Payment processor cookies to facilitate secure transactions
              </li>
              <li>
                Educational platform integration cookies to support learning
                functions
              </li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              5. How to Manage Cookies
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              Most web browsers allow you to control cookies through their
              settings preferences. These settings are typically found in the
              "options" or "preferences" menu of your browser. You can:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark mb-4">
              <li>Delete all cookies from your browser</li>
              <li>Block cookies from being set in your browser</li>
              <li>
                Configure browser settings to notify you when cookies are being
                set
              </li>
              <li>
                Browse in "private" or "incognito" mode, which automatically
                deletes cookies after your session
              </li>
            </ul>
            <p className="text-tutor-neutral-dark">
              Please note that restricting cookies may impact your experience on
              our website, as some features may not function properly without
              cookies.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              6. Cookie Consent
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              When you first visit our website, you will be presented with a
              cookie consent banner that allows you to accept or decline
              non-essential cookies. You can change your preferences at any time
              by clicking on "Cookie Settings" link in the footer of our
              website.
            </p>
            <p className="text-tutor-neutral-dark">
              By continuing to use our website after accepting cookies, you
              consent to our use of cookies as described in this policy.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              7. Changes to Our Cookie Policy
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We encourage you to periodically review this
              page to stay about our cookie practices.
            </p>
            <p className="text-tutor-neutral-dark">
              The date at the top of this policy indicates when it was last
              updated.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              8. Contact Us
            </h2>
            <p className="text-tutor-neutral-dark">
              If you have any questions or concerns about our Cookie Policy,
              please contact us at privacy@blockchaintutor.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
