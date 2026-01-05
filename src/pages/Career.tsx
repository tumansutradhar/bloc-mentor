import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Building,
  BookOpen,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const jobListings = [
  {
    id: "job1",
    title: "Blockchain Developer",
    company: "DeFi Innovations",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "3 days ago",
    description:
      "Develop and implement smart contracts and decentralized applications on Ethereum and other blockchain platforms.",
    skills: ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "DeFi"],
    category: "development",
  },
  {
    id: "job2",
    title: "Blockchain Instructor",
    company: "Blockchain Academy",
    location: "New York, NY",
    type: "Part-time",
    salary: "$60,000 - $80,000",
    posted: "1 week ago",
    description:
      "Teach blockchain fundamentals and cryptocurrency concepts to students in a virtual classroom environment.",
    skills: [
      "Teaching",
      "Blockchain Fundamentals",
      "Cryptography",
      "Public Speaking",
    ],
    category: "education",
  },
  {
    id: "job3",
    title: "Smart Contract Auditor",
    company: "SecureChain",
    location: "Remote",
    type: "Contract",
    salary: "Competitive",
    posted: "2 days ago",
    description:
      "Perform security audits on smart contracts to identify vulnerabilities and ensure code quality and safety.",
    skills: ["Solidity", "Security", "Auditing", "Blockchain Architecture"],
    category: "security",
  },
  {
    id: "job4",
    title: "Blockchain Consultant",
    company: "Distributed Consulting",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "4 days ago",
    description:
      "Consult with enterprises on blockchain implementation strategies and solutions.",
    skills: [
      "Consulting",
      "Enterprise Blockchain",
      "Hyperledger",
      "Solution Architecture",
    ],
    category: "consulting",
  },
  {
    id: "job5",
    title: "Crypto Research Analyst",
    company: "TokenInsights",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    posted: "1 week ago",
    description:
      "Research and analyze cryptocurrency projects, market trends, and blockchain technologies.",
    skills: ["Research", "Market Analysis", "Tokenomics", "Technical Writing"],
    category: "research",
  },
  {
    id: "job6",
    title: "Blockchain Community Manager",
    company: "ChainConnect",
    location: "London, UK (Remote possible)",
    type: "Full-time",
    salary: "£50,000 - £65,000",
    posted: "5 days ago",
    description:
      "Build and manage online communities for blockchain projects, create content, and drive engagement.",
    skills: [
      "Community Management",
      "Social Media",
      "Content Creation",
      "Crypto Knowledge",
    ],
    category: "community",
  },
];

const careerResources = [
  {
    title: "Blockchain Career Fundamentals",
    description:
      "Our comprehensive guide to starting your career in blockchain technology.",
    link: "/courses?category=career",
    icon: <BookOpen className="h-10 w-10 text-tutor-blue" />,
  },
  {
    title: "Industry Networking Events",
    description:
      "Join virtual and in-person events to connect with blockchain professionals.",
    link: "/events",
    icon: <Users className="h-10 w-10 text-tutor-blue" />,
  },
  {
    title: "Company Directory",
    description: "Browse our directory of companies hiring blockchain talent.",
    link: "#companies",
    icon: <Building className="h-10 w-10 text-tutor-blue" />,
  },
];

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-6 bg-gradient-to-b from-tutor-blue/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blockchain Careers
            </h1>
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                The blockchain industry is growing rapidly, creating new
                opportunities for professionals with the right skills and
                knowledge. Explore career paths, listings, and resources to help
                you succeed in this innovative field.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-tutor-blue hover:bg-tutor-blue-dark"
                >
                  <a href="#job-listings">Browse Job Listings</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#career-paths">Explore Career Paths</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="career-paths" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Blockchain <span className="text-gradient">Career Paths</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                The blockchain ecosystem offers diverse career opportunities
                across multiple disciplines. Explore the paths that match your
                skills and interests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      1
                    </span>
                    Development
                  </h3>
                  <p className="text-tutor-neutral-dark mb-4">
                    Build the infrastructure and applications that power the
                    decentralized web as a blockchain developer, smart contract
                    engineer, or dApp developer.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Blockchain Developer
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Smart Contract Engineer
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      dApp Developer
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/courses?category=development">
                      Explore Development Courses
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      2
                    </span>
                    Business & Consulting
                  </h3>
                  <p className="text-tutor-neutral-dark mb-4">
                    Help organizations implement blockchain solutions as a
                    consultant, product manager, or business development
                    professional.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Blockchain Consultant
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Product Manager
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Business Development
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/courses?category=business">
                      Explore Business Courses
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      3
                    </span>
                    Education & Research
                  </h3>
                  <p className="text-tutor-neutral-dark mb-4">
                    Advance blockchain knowledge and adoption as an educator,
                    researcher, or community builder.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Blockchain Instructor
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Crypto Researcher
                    </li>
                    <li className="flex items-center gap-2 text-sm text-tutor-neutral-dark">
                      <span className="w-1 h-1 rounded-full bg-tutor-blue"></span>
                      Community Manager
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/courses?category=education">
                      Explore Education Courses
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="job-listings"
          className="py-20 px-6 bg-gradient-to-b from-white to-tutor-neutral"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Job Board
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Blockchain <span className="text-gradient">Job Listings</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                Browse our curated list of blockchain job opportunities from
                leading companies in the space.
              </p>
            </div>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="overflow-x-auto flex w-full h-auto p-1 bg-tutor-neutral">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="space-y-6">
                  {jobListings.map((job) => (
                    <Card key={job.id} className="glass-card overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-tutor-neutral-darker mb-2 md:mb-0">
                            {job.title}
                          </h3>
                          <Badge className="w-fit">{job.type}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-tutor-neutral-dark mb-4">
                          <span className="flex items-center gap-1">
                            <Building size={16} />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={16} />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            Posted {job.posted}
                          </span>
                        </div>
                        <p className="text-tutor-neutral-dark mb-4">
                          {job.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Required Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-tutor-neutral/30"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="bg-tutor-blue hover:bg-tutor-blue-dark">
                          Apply Now <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {[
                "development",
                "education",
                "security",
                "consulting",
                "research",
                "community",
              ].map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="space-y-6">
                    {jobListings
                      .filter((job) => job.category === category)
                      .map((job) => (
                        <Card
                          key={job.id}
                          className="glass-card overflow-hidden"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <h3 className="text-xl font-bold text-tutor-neutral-darker mb-2 md:mb-0">
                                {job.title}
                              </h3>
                              <Badge className="w-fit">{job.type}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-tutor-neutral-dark mb-4">
                              <span className="flex items-center gap-1">
                                <Building size={16} />
                                {job.company}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={16} />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign size={16} />
                                {job.salary}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={16} />
                                Posted {job.posted}
                              </span>
                            </div>
                            <p className="text-tutor-neutral-dark mb-4">
                              {job.description}
                            </p>
                            <div className="mb-4">
                              <h4 className="font-medium mb-2">
                                Required Skills:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-tutor-neutral/30"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button className="bg-tutor-blue hover:bg-tutor-blue-dark">
                              Apply Now{" "}
                              <ArrowRight size={16} className="ml-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                  {jobListings.filter((job) => job.category === category)
                    .length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2 text-tutor-neutral-darker">
                        No jobs found
                      </h3>
                      <p className="text-tutor-neutral-dark">
                        No current openings in this category. Check back soon or
                        browse other categories.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Career Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Career <span className="text-gradient">Resources</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {careerResources.map((resource, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                    <p className="text-tutor-neutral-dark mb-6">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={resource.link}>Explore</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Separator className="mb-12" />
              <h3 className="text-2xl font-bold mb-6">
                Ready to advance your blockchain career?
              </h3>
              <p className="text-tutor-neutral-dark max-w-2xl mx-auto mb-8">
                Our expert tutors can help you develop the skills you need to
                succeed in the blockchain industry.
              </p>
              <Button
                size="lg"
                className="bg-tutor-blue hover:bg-tutor-blue-dark"
              >
                <Link to="/tutors">Find a Tutor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
