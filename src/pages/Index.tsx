import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import SmartContractDemo from "@/components/SmartContractDemo";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CourseCard from "@/components/CourseCard";
import { useAuth } from "@/context/AuthContext";

const enrolledCourses = [
  {
    id: "course-1",
    title: "Smart Contract Development",
    description:
      "Learn how to create secure and efficient smart contracts on the Ethereum blockchain.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    duration: "8 weeks",
    students: 1245,
    rating: 4.8,
    level: "Intermediate",
    price: 99,
    progress: 68,
    lastAccessed: "2 days ago",
    tutor: {
      name: "Dr. Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
];

const recommendedCourses = [
  {
    id: "course-2",
    title: "DeFi Protocol Analysis",
    description:
      "Dive into the world of decentralized finance and learn how to analyze DeFi protocols.",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    duration: "6 weeks",
    students: 978,
    rating: 4.7,
    level: "Advanced",
    price: 129,
    tutor: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
  },
  {
    id: "course-3",
    title: "NFT Marketplace Development",
    description:
      "Build your own NFT marketplace from scratch with this comprehensive guide.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    duration: "10 weeks",
    students: 1120,
    rating: 4.9,
    level: "Intermediate",
    price: 149,
    tutor: {
      name: "Elena Petrov",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
  },
  {
    id: "course-4",
    title: "Blockchain Security Fundamentals",
    description:
      "Learn essential security practices for building robust blockchain applications.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    duration: "5 weeks",
    students: 856,
    rating: 4.6,
    level: "Beginner",
    price: 79,
    tutor: {
      name: "James Williams",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
  },
];

const Index = () => {
  const { user } = useAuth();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setTime("morning");
    } else if (currentHour < 18) {
      setTime("afternoon");
    } else {
      setTime("evening");
    }
  }, [user]);

  const renderContent = () => {
    if (user) {
      return (
        <>
          <section className="py-20 px-6 bg-gradient-to-b from-[#0A84FF]/10 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Good {time},{" "}
                  <span className="text-gradient">
                    {user.name || user.email?.split("@")[0] || "Scholar"}
                  </span>
                  !
                </h1>
                <p className="text-[#86868b] max-w-2xl">
                  Ready to continue your blockchain learning journey? Your
                  courses are waiting for you.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Continue Learning
                </h2>
                {enrolledCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="glass-card mb-6 overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 h-48 md:h-auto">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8 w-full md:w-2/3">
                          <div className="flex flex-col h-full">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="h-6 w-6 rounded-full overflow-hidden">
                                  <img
                                    src={course.tutor.avatar}
                                    alt={course.tutor.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="text-sm text-[#86868b]">
                                  {course.tutor.name}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-2">
                                {course.title}
                              </h3>
                              <div className="mb-4">
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm font-medium">
                                    Progress
                                  </span>
                                  <span className="text-sm font-medium">
                                    {course.progress}%
                                  </span>
                                </div>
                                <Progress
                                  value={course.progress}
                                  className="h-2"
                                />
                              </div>
                              <div className="flex items-center gap-4 text-xs text-[#86868b] mb-4">
                                <div className="flex items-center gap-1">
                                  <Clock size={14} />
                                  <span>
                                    Last accessed {course.lastAccessed}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <BookOpen size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <Link to={`/courses/${course.id}`}>
                                <Button className="bg-[#0A84FF] hover:bg-[#0A84FF] text-white">
                                  Resume Course
                                  <ArrowRight size={16} className="ml-2" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <div className="text-center mt-6">
                  <Link to="/courses">
                    <Button variant="outline">
                      View All My Courses
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Recommended for You
                  </h2>
                  <Link
                    to="/courses"
                    className="text-[#0A84FF] hover:underline flex items-center"
                  >
                    <span>Browse All</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <SmartContractDemo />
        </>
      );
    }

    return (
      <>
        <Hero />
        <FeatureCards />
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-3 py-1 text-sm font-medium bg-[#0A84FF]/10 text-[#0A84FF] rounded-full">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Learning on the{" "}
                <span className="text-gradient">Blockchain</span>
              </h2>
              <p className="max-w-2xl mx-auto text-[#86868b]">
                Our platform combines cutting-edge AI technology with blockchain
                security for a revolutionary learning experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 relative overflow-hidden flex flex-col h-full">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] font-bold">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-3">
                    Find Your Perfect Tutor
                  </h3>
                  <p className="text-[#86868b] mb-4">
                    Browse our extensive network of verified blockchain experts
                    and select the perfect match for your learning goals.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1616587896649-79b16d8b173d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Find a tutor"
                  className="w-full h-40 object-cover rounded-md mt-auto"
                />
              </div>
              <div className="glass-card p-6 relative overflow-hidden flex flex-col h-full">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-tutor-blue font-bold">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-3">
                    Schedule with Smart Contracts
                  </h3>
                  <p className="text-[#86868b] mb-4">
                    Book sessions with secure blockchain smart contracts that
                    guarantee payment safety and scheduling reliability.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Smart contracts"
                  className="w-full h-40 object-cover rounded-md mt-auto"
                />
              </div>
              <div className="glass-card p-6 relative overflow-hidden flex flex-col h-full">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] font-bold">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-3">
                    Learn & Grow with AI
                  </h3>
                  <p className="text-[#86868b] mb-4">
                    Experience personalized learning sessions enhanced by AI
                    that adapts to your pace and style for maximum
                    effectiveness.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="AI learning"
                  className="w-full h-40 object-cover rounded-md mt-auto"
                />
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/courses">
                <Button className="bg-[#0A84FF] border border-[#0A84FF] hover:bg-[#0055D4] hover:border-[#0055D4] text-white px-4 py-3.5 h-auto rounded-md">
                  Start Learning Now
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <SmartContractDemo />
        <section className="py-20 px-6 bg-gradient-to-b from-white to-tutor-neutral">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-3 py-1 text-sm font-medium bg-[#0A84FF]/10 text-[#0A84FF] rounded-full">
                  Testimonials
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                What Our Students <span className="text-gradient">Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/14.jpg"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Wade Gonzalez</h4>
                    <p className="text-sm text-[#86868b]">
                      Blockchain Developer
                    </p>
                  </div>
                </div>
                <p className="text-[#86868b]">
                  "The smart contract integration for payments gave me peace of
                  mind. My tutor was exceptional at explaining complex
                  blockchain concepts in simple terms."
                </p>
                <div className="flex items-center mt-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Bonnie Phillips</h4>
                    <p className="text-sm text-[#86868b]">Crypto Enthusiast</p>
                  </div>
                </div>
                <p className="text-[#86868b]">
                  "As a newcomer to blockchain, I was worried about finding the
                  right guidance. The AI matching system paired me with a
                  perfect tutor for my skill level."
                </p>
                <div className="flex items-center mt-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/85.jpg"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Arron Murray</h4>
                    <p className="text-sm text-[#86868b]">Software Engineer</p>
                  </div>
                </div>
                <p className="text-[#86868b]">
                  "The interactive coding sessions and real-time feedback
                  transformed how I approach smart contract development.
                  Absolutely worth the investment."
                </p>
                <div className="flex items-center mt-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default Index;
