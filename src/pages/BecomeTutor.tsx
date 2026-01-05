import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  CheckCircle,
  CircleDollarSign,
  Clock,
  FileCheck,
  Users,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  expertise: z.string().min(1, "Please select your area of expertise"),
  experience: z.string().min(1, "Please select your experience level"),
  education: z.string().min(5, "Please provide your educational background"),
  motivation: z.string().min(30, "Please provide a more detailed description"),
  portfolio: z.string().optional(),
});

const expertiseAreas = [
  { value: "blockchain-basics", label: "Blockchain Fundamentals" },
  { value: "smart-contracts", label: "Smart Contract Development" },
  { value: "defi", label: "Decentralized Finance (DeFi)" },
  { value: "crypto-economics", label: "Cryptocurrency Economics" },
  { value: "nft", label: "NFTs and Digital Assets" },
  { value: "security", label: "Blockchain Security" },
  { value: "web3", label: "Web3 Development" },
];

const experienceLevels = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="border-0 bg-tutor-neutral/30">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#0A84FF]/10 p-3 rounded-full mb-4 text-[#0A84FF]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-[#1D1D1F]">{title}</h3>
        <p className="text-sm text-[#86868B]">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const BecomeTutor = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      expertise: "",
      experience: "",
      education: "",
      motivation: "",
      portfolio: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitting(true);

    try {
      console.log("Submitting Form Data:", values);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Application submitted successfully", {
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit application", {
        description: "Please try again later or contact support.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1F]">
            Become a Block Mentor
          </h1>
          <p className="text-[#86868B] max-w-3xl mx-auto">
            Share your blockchain expertise with students worldwide. Join our
            platform as a tutor and help shape the next generation of blockchain
            professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <BenefitCard
            icon={<CircleDollarSign size={24} />}
            title="Competitive Compensation"
            description="Earn competitive rates for your expertise, with flexible payment options including cryptocurrency."
          />
          <BenefitCard
            icon={<Clock size={24} />}
            title="Flexible Schedule"
            description="Create your own teaching schedule and work from anywhere at times that suit you best."
          />
          <BenefitCard
            icon={<Users size={24} />}
            title="Global Student Base"
            description="Connect with students from around the world who are eager to learn blockchain technology."
          />
          <BenefitCard
            icon={<FileCheck size={24} />}
            title="Curriculum Support"
            description="Access our comprehensive teaching materials and curriculum guidelines to enhance your sessions."
          />
          <BenefitCard
            icon={<Award size={24} />}
            title="Professional Growth"
            description="Build your reputation in the blockchain education space and expand your professional network."
          />
          <BenefitCard
            icon={<CheckCircle size={24} />}
            title="Technical Support"
            description="Receive platform training and ongoing technical support to ensure a smooth teaching experience."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#1D1D1F]">
              Application Process
            </h2>
            <ol className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0A84FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-1">
                    Submit Application
                  </h3>
                  <p className="text-[#86868B]">
                    Complete the application form with your details, expertise,
                    and teaching experience.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0A84FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-1">
                    Initial Review
                  </h3>
                  <p className="text-[#86868B]">
                    Our team will review your application and credentials within
                    5-7 business days.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0A84FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-1">Interview</h3>
                  <p className="text-[#86868B]">
                    Selected candidates will be invited for a video interview to
                    discuss your experience and teaching approach.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0A84FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-1">
                    Demo Session
                  </h3>
                  <p className="text-[#86868B]">
                    Demonstrate your teaching skills in a brief mock tutoring
                    session on a blockchain topic.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#0A84FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  5
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-1">
                    Onboarding
                  </h3>
                  <p className="text-[#86868B]">
                    Successful applicants will receive platform training and be
                    onboarded as official tutors.
                  </p>
                </div>
              </li>
            </ol>
            <Separator className="mb-10" />
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#1D1D1F]">
                Requirements
              </h2>
              <ul className="space-y-3 text-[#86868B]">
                {[
                  "Proven expertise in blockchain technology or related fields",
                  "Minimum 1-2 years of practical experience in your area of expertise",
                  "Strong communication and teaching skills",
                  "Fluent English proficiency (additional languages are a plus)",
                  "Reliable internet connection and necessary equipment for online teaching",
                  "Commitment to maintaining a regular teaching schedule",
                  "Passion for blockchain education and student success",
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] mt-[9px] rounded-full bg-[#0A84FF] flex-shrink-0"></div>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-subtle">
            <h2 className="text-2xl font-semibold mb-6 text-[#1D1D1F]">
              Tutor Application
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 123 456 7890"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="expertise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area of Expertise</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select area of expertise" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-0">
                            {expertiseAreas.map((area) => (
                              <SelectItem
                                key={area.value}
                                value={area.value}
                                className="hover:bg-[#f8fafc]"
                              >
                                {area.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Educational Background</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Degrees, certifications, and relevant education"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to become a tutor?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your motivation and what you can offer to students..."
                          className="min-h-[120px] appearance-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio or Website (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://yourportfolio.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Link to your GitHub, LinkedIn, personal website, or
                        portfolio
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#0A84FF] hover:bg-[#0055D4]"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTutor;
