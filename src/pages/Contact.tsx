import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully", {
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-tutor-neutral-darker">
              Contact Us
            </h1>
            <p className="text-tutor-neutral-dark mb-10">
              Have questions or feedback? We'd love to hear from you! Fill out
              the form and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-tutor-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-tutor-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-tutor-neutral-darker">
                    Email
                  </h3>
                  <p className="text-tutor-neutral-dark">
                    contact@blockchaintutor.com
                  </p>
                  <p className="text-tutor-neutral-dark">
                    support@blockchaintutor.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-tutor-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-tutor-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-tutor-neutral-darker">
                    Phone
                  </h3>
                  <p className="text-tutor-neutral-dark">+1 (555) 123-4567</p>
                  <p className="text-tutor-neutral-dark">
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-tutor-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-tutor-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-tutor-neutral-darker">
                    Office
                  </h3>
                  <p className="text-tutor-neutral-dark">
                    123 Blockchain Avenue
                    <br />
                    Suite 456
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-subtle">
            <h2 className="text-2xl font-semibold mb-6 text-tutor-neutral-darker">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-tutor-neutral-darker mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-tutor-neutral-darker mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-tutor-neutral-darker mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-tutor-neutral-darker mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-tutor-blue hover:bg-tutor-blue-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
