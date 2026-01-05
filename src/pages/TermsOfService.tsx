import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-tutor-neutral-darker">
          Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              By accessing or using Block Mentor's services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
            <p className="text-tutor-neutral-dark">
              These Terms of Service apply to all users, including registered
              users, tutors, and visitors. By using our platform, you
              acknowledge that you have read, understood, and agree to be bound
              by these terms.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              2. Description of Services
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              Block Mentor provides an AI-driven educational platform focused on
              blockchain technology, cryptocurrency, and related topics. Our
              services include online courses, tutoring sessions, educational
              content, certification.
            </p>
            <p className="text-tutor-neutral-dark">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our services at any time without prior notice.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              3. User Accounts
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              To access certain features of our platform, you must register for
              an account. You are responsible for maintaining the
              confidentiality of your account information and password.
            </p>
            <p className="text-tutor-neutral-dark">
              You agree to provide accurate and complete information when
              creating an account and to update such information as necessary.
              You are solely responsible for all activities that occur under
              your account.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              4. Payment Terms
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              Certain services on our platform require payment. All payments are
              processed securely, and we accept both traditional payment methods
              and cryptocurrency.
            </p>
            <p className="text-tutor-neutral-dark mb-4">
              Prices for courses and tutoring services are clearly displayed
              before purchase. We reserve the right to change our pricing at any
              time, but changes will not affect already purchased services.
            </p>
            <p className="text-tutor-neutral-dark">
              Refunds may be issued at our discretion and in accordance with our
              refund policy, which is available upon request.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              5. Intellectual Property
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              All content provided on our platform, including but not limited to
              text, graphics, logos, images, audio, and video, is the property
              of Block Mentor or its licensors and is protected by copyright and
              other intellectual property laws.
            </p>
            <p className="text-tutor-neutral-dark">
              You may access and use content for your personal, non-commercial
              use only. Reproduction, distribution, modification, or creation of
              derivative works without our express permission is prohibited.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              6. Limitation of Liability
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              To the maximum extent permitted by law, Block Mentor and its
              affiliates shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              relating to your use of services.
            </p>
            <p className="text-tutor-neutral-dark">
              Our total liability for any claims related to these Terms of
              Service shall not exceed the amount you paid to us for the
              services at issue.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              7. Changes to Terms
            </h2>
            <p className="text-tutor-neutral-dark mb-4">
              We reserve the right to modify these Terms of Service at any time.
              We will provide notice of significant changes by posting the
              updated terms on our platform with a new effective date.
            </p>
            <p className="text-tutor-neutral-dark">
              Your continued use of our services after such changes constitutes
              your acceptance of the new terms.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-tutor-neutral-darker">
              8. Contact Information
            </h2>
            <p className="text-tutor-neutral-dark">
              If you have any questions or concerns about these Terms of
              Service, please contact us at legal@blockchaintutor.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
