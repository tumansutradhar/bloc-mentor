import { JSX } from "react";
import { useRef, useEffect } from "react";
import {
  Cpu,
  Shield,
  Clock,
  Users,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay,
  className,
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className={`glass-card p-6 ${className}`}>
      <div className="bg-[#0A84FF]/10 p-3 rounded-lg w-fit mb-4 text-[#0A84FF]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#86868b]">{description}</p>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <Cpu size={24} />,
      title: "AI-Powered Learning",
      description:
        "Personalized lessons adapted to your learning style and pace through advanced AI algorithms.",
    },
    {
      icon: <Shield size={24} />,
      title: "Blockchain Security",
      description:
        "All transactions and credentials are secured by immutable blockchain technology.",
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Scheduling",
      description:
        "Book sessions with smart contracts that automatically manage your learning schedule.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Tutors",
      description:
        "Connect with verified blockchain experts and technical specialists.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Skill Tracking",
      description:
        "Monitor your progress with detailed analytics and growth metrics.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Interactive Feedback",
      description:
        "Receive real-time feedback and improvement suggestions during your learning journey.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 text-sm font-medium bg-[#0A84FF]/10 text-[#0A84FF] rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            The Future of Learning is{" "}
            <span className="text-gradient">Here</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#86868b]">
            Our platform combines cutting-edge AI technology with blockchain
            security create a learning environment that's both innovative and
            trustworthy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
