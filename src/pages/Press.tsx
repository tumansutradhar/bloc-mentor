import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Download,
  ArrowUpRight,
  Mail,
  FileText,
  AlertCircle,
  Newspaper,
} from "lucide-react";

const pressReleases = [
  {
    id: "pr1",
    title: "Block Mentor Launches Industry-First AI-Driven Learning Platform",
    date: "2023-11-15",
    summary:
      "The company introduces innovative blockchain-based tutoring with personalized AI assistance.",
    link: "#",
    featured: true,
  },
  {
    id: "pr2",
    title:
      "Block Mentor Secures $5M in Seed Funding to Revolutionize Education",
    date: "2023-09-22",
    summary:
      "Funding will accelerate platform development and expand global tutor network.",
    link: "#",
    featured: true,
  },
  {
    id: "pr3",
    title:
      "Block Mentor Partners with Leading Crypto Projects for Education Initiative",
    date: "2023-08-10",
    summary:
      "Strategic partnerships aim to bring practical blockchain education to students worldwide.",
    link: "#",
    featured: false,
  },
  {
    id: "pr4",
    title: "Block Mentor Announces New Decentralized Certification Program",
    date: "2023-06-15",
    summary:
      "The company introduces tamper-proof credentials verified on the blockchain.",
    link: "#",
    featured: false,
  },
];

const mediaCoverage = [
  {
    source: "TechCrunch",
    title: "How Block Mentor is Disrupting Traditional Education",
    date: "2023-12-05",
    image:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2787&auto=format&fit=crop",
    link: "#",
  },
  {
    source: "Forbes",
    title: "Blockchain Education Startup Raises $5M to Bridge Skills Gap",
    date: "2023-09-25",
    image:
      "https://images.unsplash.com/photo-1560359614-803e0353864e?q=80&w=2787&auto=format&fit=crop",
    link: "#",
  },
  {
    source: "CoinDesk",
    title: "Block Mentor: Bringing Decentralized Learning to the Masses",
    date: "2023-10-18",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    link: "#",
  },
];

const brandAssets = [
  {
    name: "Logo Pack (PNG, SVG, EPS)",
    description:
      "Official Block Mentor logos in various formats and variations",
    link: "#",
    icon: <FileText className="h-10 w-10 text-tutor-blue" />,
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand styling guidelines and usage instructions",
    link: "#",
    icon: <AlertCircle className="h-10 w-10 text-tutor-blue" />,
  },
  {
    name: "Media Kit",
    description: "Photos, graphics, and information for media publications",
    link: "#",
    icon: <Newspaper className="h-10 w-10 text-tutor-blue" />,
  },
];

const Press = () => {
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
              Press & Media
            </h1>
            <div className="glass-card p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Welcome to the Block Mentor press room. Find the latest news,
                media coverage, press releases, and resources about our
                innovative blockchain education platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-tutor-blue hover:bg-tutor-blue-dark"
                >
                  <a href="#press-releases">Press Releases</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#media-coverage">Media Coverage</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="press-releases" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                Announcements
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Press <span className="text-gradient">Releases</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                The latest company announcements and updates from Blockchain
                Tutor.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {pressReleases
                .filter((pr) => pr.featured)
                .map((release) => (
                  <Card key={release.id} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-tutor-blue text-white">
                          Featured
                        </Badge>
                        <span className="ml-auto flex items-center text-sm text-tutor-neutral-dark">
                          <Calendar size={14} className="mr-1" />
                          {new Date(release.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-tutor-neutral-darker">
                        {release.title}
                      </h3>
                      <p className="text-tutor-neutral-dark mb-6">
                        {release.summary}
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href={release.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Full Release{" "}
                          <ArrowUpRight size={14} className="ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <h3 className="text-xl font-semibold mb-6">More Press Releases</h3>
            <div className="space-y-4 mb-8">
              {pressReleases
                .filter((pr) => !pr.featured)
                .map((release) => (
                  <Card key={release.id} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="mb-2 md:mb-0 md:mr-4">
                          <span className="text-sm text-tutor-neutral-dark">
                            <Calendar size={14} className="inline mr-1" />
                            {new Date(release.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-tutor-neutral-darker md:mr-auto">
                          {release.title}
                        </h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 md:mt-0"
                          asChild
                        >
                          <a
                            href={release.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read <ArrowUpRight size={14} className="ml-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div className="text-center mb-16">
              <Button variant="outline" size="lg">
                View All Press Releases
              </Button>
            </div>
          </div>
        </section>
        <section
          id="media-coverage"
          className="py-20 px-6 bg-gradient-to-b from-white to-tutor-neutral"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium bg-tutor-blue/10 text-tutor-blue rounded-full">
                In The News
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Media <span className="text-gradient">Coverage</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                Recent media mentions and coverage of Block Mentor from around
                the world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {mediaCoverage.map((item, index) => (
                <Card key={index} className="glass-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-tutor-blue text-white hover:bg-tutor-blue-dark">
                      {item.source}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-tutor-neutral-dark text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-tutor-neutral-darker">
                      {item.title}
                    </h3>
                    <Button className="w-full" asChild>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article <ArrowUpRight size={14} className="ml-1" />
                      </a>
                    </Button>
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
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Brand <span className="text-gradient">Assets</span>
              </h2>
              <p className="max-w-2xl mx-auto text-tutor-neutral-dark">
                Download official Block Mentor logos, brand guidelines, and
                media resources.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {brandAssets.map((asset, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{asset.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{asset.name}</h3>
                    <p className="text-tutor-neutral-dark mb-6">
                      {asset.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download size={14} className="mr-2" /> Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="glass-card mb-16">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Media Contact</h3>
                <p className="text-tutor-neutral-dark mb-6">
                  For press inquiries, interview requests, or additional
                  information about Block Mentor, please contact our media
                  relations team.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-tutor-blue hover:bg-tutor-blue-dark">
                    <Mail size={16} className="mr-2" /> Contact Media Relations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
