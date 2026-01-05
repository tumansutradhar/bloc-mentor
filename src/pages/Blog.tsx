import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: number;
  featured: boolean;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding the Basics of Blockchain Technology",
    excerpt:
      "A comprehensive guide to the fundamentals of blockchain technology and how it works behind the scenes.",
    date: "2023-10-15",
    author: {
      name: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    category: "blockchain",
    readTime: 8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Top 5 Smart Contract Platforms Compared",
    excerpt:
      "An in-depth comparison of the leading smart contract platforms and their unique features and capabilities.",
    date: "2023-10-22",
    author: {
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    category: "smart-contracts",
    readTime: 12,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "How to Start Your Career in Blockchain Development",
    excerpt:
      "A guide for aspiring blockchain developers on the skills, tools, and resources needed to break into the industry.",
    date: "2023-10-28",
    author: {
      name: "Michael Lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    category: "career",
    readTime: 10,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "DeFi Explained: The Future of Finance",
    excerpt:
      "An exploration of decentralized finance and how it's revolutionizing traditional financial systems.",
    date: "2023-11-05",
    author: {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    category: "defi",
    readTime: 15,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "NFTs and Digital Ownership: Beyond the Hype",
    excerpt:
      "A balanced look at NFTs, their practical applications, and the future of digital ownership.",
    date: "2023-11-12",
    author: {
      name: "David Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    category: "nft",
    readTime: 9,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1642328159992-b1d6010e8b40?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "The Environmental Impact of Blockchain Technology",
    excerpt:
      "An honest discussion about the environmental concerns surrounding blockchain and potential solutions.",
    date: "2023-11-18",
    author: {
      name: "Lisa Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    category: "environment",
    readTime: 11,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2940&auto=format&fit=crop",
  },
];

const categories = [
  { value: "all", label: "All Posts" },
  { value: "blockchain", label: "Blockchain Basics" },
  { value: "smart-contracts", label: "Smart Contracts" },
  { value: "defi", label: "DeFi" },
  { value: "nft", label: "NFTs" },
  { value: "career", label: "Career Advice" },
  { value: "environment", label: "Environment" },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-tutor-neutral-darker">
              Blog & Resources
            </h1>
            <p className="text-tutor-neutral-dark max-w-2xl">
              Insights, tutorials, and news from the blockchain education world.
              Stay updated with the latest industry trends and learning
              resources.
            </p>
          </div>

          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tutor-neutral-dark h-4 w-4" />
          </div>
        </div>

        {!searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-tutor-neutral-darker">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-tutor-blue text-white hover:bg-tutor-blue-dark">
                      {categories.find((c) => c.value === post.category)?.label}
                    </Badge>
                  </div>

                  <CardContent className="pt-6 pb-4 flex-grow">
                    <div className="flex items-center text-tutor-neutral-dark text-sm mb-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="mr-3">{post.author.name}</span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-tutor-neutral-darker">
                      {post.title}
                    </h3>

                    <p className="text-tutor-neutral-dark mb-4">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <div className="flex items-center justify-between w-full">
                      <span className="flex items-center text-sm text-tutor-neutral-dark">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </span>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-tutor-blue hover:text-tutor-blue-dark hover:bg-tutor-blue/5"
                      >
                        Read More <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-8"
        >
          <TabsList className="overflow-x-auto flex w-full h-auto p-1 bg-tutor-neutral">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="px-4 py-2 whitespace-nowrap"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.value}
              value={category.value}
              className="pt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="border-b border-tutor-neutral pb-8 last:border-0"
                  >
                    <div className="flex items-center text-tutor-neutral-dark text-sm mb-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="mr-3">{post.author.name}</span>
                      <span className="flex items-center mr-3">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-tutor-neutral-darker">
                      <Link
                        to={`/blog/${post.id}`}
                        className="hover:text-tutor-blue transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-tutor-neutral-dark mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center">
                      <Badge className="mr-4 bg-tutor-neutral/30 text-tutor-neutral-darker hover:bg-tutor-neutral/50">
                        {
                          categories.find((c) => c.value === post.category)
                            ?.label
                        }
                      </Badge>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-tutor-blue hover:text-tutor-blue-dark p-0 hover:bg-transparent"
                      >
                        Read Article <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2 text-tutor-neutral-darker">
                    No articles found
                  </h3>
                  <p className="text-tutor-neutral-dark">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Blog;
