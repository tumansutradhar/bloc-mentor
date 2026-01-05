import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-tutor-neutral-darker">
          Privacy Policy
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
              At Block Mentor, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our services.
            </p>
            <p className="text-tutor-neutral-dark">
              Please read this Privacy Policy carefully. By using our platform,
              you acknowledge that you have read and understood this policy and
              agree to its terms.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Personal Data
            </h3>
            <p className="text-tutor-neutral-dark mb-4">
              We may collect personal information that you voluntarily provide
              when using our services, including but not limited to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark mb-4">
              <li>Name, email address, and contact information</li>
              <li>Account credentials (username, password)</li>
              <li>
                Profile information (bio, education, professional experience)
              </li>
              <li>Payment and billing information</li>
              <li>
                Blockchain wallet addresses (for cryptocurrency transactions)
              </li>
            </ul>
            <h3 className="text-xl font-medium mb-3 text-tutor-neutral-darker">
              Usage Data
            </h3>
            <p className="text-tutor-neutral-dark mb-4">
              We automatically collect certain information when you access or
              use our platform, including:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our platform</li>
              <li>Course progress and completion statistics</li>
              <li>User interactions and feedback</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              3. How We Use Your Information
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We use the information we collect for various purposes, including
              to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your learning experience</li>
              <li>
                Communicate with you about updates, promotions, and events
              </li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>
                Protect against unauthorized access and ensure platform security
              </li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark">
              <li>
                With tutors or instructors to facilitate educational services
              </li>
              <li>With service providers who perform services on our behalf</li>
              <li>
                To comply with legal obligations or respond to lawful requests
              </li>
              <li>
                In connection with a business transaction, such as a merger or
                acquisition
              </li>
              <li>With your consent or at your direction</li>
            </ul>
            <p className="text-tutor-neutral-dark mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              5. Data Security
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <p className="text-tutor-neutral-dark">
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your personal
              information, we cannot its absolute security.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              6. Your Rights and Choices
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-tutor-neutral-dark">
              <li>Access to the personal information we hold about you</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>
                Deletion of your personal information in certain circumstances
              </li>
              <li>Restriction or objection to certain processing activities</li>
              <li>
                Data portability (receiving your data in a structured format)
              </li>
              <li>Withdrawal of consent for future processing</li>
            </ul>
            <p className="text-tutor-neutral-dark mt-4">
              To exercise these rights, please contact us using the information
              provided at the end of this policy.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              7. Contact Information
            </h2>
            <p className="text-tutor-neutral-dark">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at
              privacy@blockchaintutor.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
