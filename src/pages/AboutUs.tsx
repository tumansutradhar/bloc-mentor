import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/150?img=5",
      bio: "Former blockchain researcher with a PhD in Computer Science. Elena founded TutorChain with the vision of making blockchain education accessible to everyone.",
    },
    {
      name: "Marcus Chen",
      role: "CTO",
      avatar: "https://i.pravatar.cc/150?img=68",
      bio: "Blockchain developer with over 10 years of experience. Marcus leads our technical team and ensures our platform remains at the cutting edge.",
    },
    {
      name: "Aisha Patel",
      role: "Head of Education",
      avatar: "https://i.pravatar.cc/150?img=20",
      bio: "EdTech specialist with expertise in curriculum design. Aisha ensures our educational content meets the highest standards of quality and effectiveness.",
    },
    {
      name: "David Okafor",
      role: "Chief Blockchain Officer",
      avatar: "https://i.pravatar.cc/150?img=11",
      bio: "Formerly at Ethereum Foundation, David oversees our blockchain integrations and smart contract implementations.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "TutorChain was founded with a mission to democratize blockchain education through innovative technology.",
    },
    {
      year: "2021",
      title: "Smart Contract Integration",
      description:
        "Launched our proprietary smart contract system to secure payments and schedule management.",
    },
    {
      year: "2022",
      title: "AI Implementation",
      description:
        "Integrated advanced AI algorithms to personalize the learning experience for each student.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Expanded our tutor network to over 50 countries, bringing expert blockchain education worldwide.",
    },
    {
      year: "2024",
      title: "Decentralized Certification",
      description:
        "Launched blockchain-verified credentials and certifications for completed courses.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-6 bg-gradient-to-b from-tutor-blue/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed mb-4">
                Founded in 2020, TutorChain was born from a simple yet powerful
                idea: to make high-quality blockchain education accessible to
                everyone, everywhere.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                We believe that blockchain technology has the potential to
                transform industries and create a more equitable world, but only
                if people understand how to use it. That's why we've built a
                platform that students with expert tutors through the very
                technology we teach — blockchain.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Mission & <span className="text-gradient">Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-tutor-neutral-dark">
                      To democratize blockchain education by connecting students
                      with expert tutors through a secure, transparent, and
                      efficient platform powered by the very technology we
                      teach.
                    </p>
                  </div>
                  <div className="bg-tutor-blue/10 p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-tutor-neutral-dark">
                      A world where blockchain literacy is widespread,
                      empowering individuals and organizations to build a more
                      transparent, secure, and equitable digital future.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                      <p className="text-tutor-neutral-dark">
                        We constantly push the boundaries of what's possible in
                        education through technology.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Accessibility
                      </h4>
                      <p className="text-tutor-neutral-dark">
                        We believe quality education should be available to
                        everyone, regardless of background or location.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Transparency
                      </h4>
                      <p className="text-tutor-neutral-dark">
                        We operate with complete openness, just like the
                        blockchain technology we teach.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                      <p className="text-tutor-neutral-dark">
                        We are committed to providing the highest quality
                        educational experience possible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 bg-gradient-to-b from-white to-tutor-neutral">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Our People
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Meet the <span className="text-gradient">Team</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                Our team of experts is passionate about blockchain technology
                and education. Together, we're building the future of
                decentralized learning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="glass-card overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-tutor-blue mb-4">{member.role}</p>
                    <p className="text-tutor-neutral-dark text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Company <span className="text-gradient">Milestones</span>
              </h2>
            </div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[39px] top-[60px] bottom-0 w-0.5 bg-tutor-blue/20"></div>
                  )}
                  <div className="flex items-start gap-6">
                    <div className="h-20 w-20 rounded-full bg-tutor-blue/10 flex items-center justify-center text-tutor-blue font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    <Card className="glass-card w-full">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-tutor-neutral-dark">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
