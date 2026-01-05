import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const elements = heroRef.current.querySelectorAll(".parallax-element");

      elements.forEach((element) => {
        const speed = parseFloat(
          (element as HTMLElement).dataset.speed || "0.05"
        );
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        (
          element as HTMLElement
        ).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0A84FF]/5 blur-3xl parallax-element"
          data-speed="0.03"
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-[#5AC8FA]/5 blur-3xl parallax-element"
          data-speed="0.05"
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#0A84FF]/5 blur-3xl parallax-element"
          data-speed="0.07"
        ></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="px-3 py-1 text-sm font-medium bg-[#0A84FF]/10 text-[#0A84FF] rounded-full">
            Learn blockchain with AI tutors
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-balance">
          <span className="text-gradient">Personalized Learning</span>
          <br /> Powered by Blockchain
        </h1>
        <p className="max-w-2xl mx-auto text-[#86868b] text-lg mb-8 text-balance">
          Unlock your potential with our AI-driven tutoring service. Experience
          interactive lessons, secure smart contract payments, and personalized
          feedback.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/tutors">
            <Button className="font-medium px-4 py-3.5 h-auto rounded-md bg-[#0A84FF] border border-[#0A84FF] hover:bg-[#0055D4] hover:border-[#0055D4] text-white">
              Find a Tutor
            </Button>
          </Link>
          <Link to="/courses">
            <Button
              variant="outline"
              className="font-medium px-4 py-3.5 h-auto rounded-md gap-2 border-[#1D1D1F] hover:bg-[#F5F5F7]"
            >
              Explore Courses
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#0A84FF]">500+</span>
            <span className="text-sm text-[#86868b]">AI Tutors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#0A84FF]">24/7</span>
            <span className="text-sm text-[#86868b]">Learning Access</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[#0A84FF]">98%</span>
            <span className="text-sm text-[#86868b]">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
