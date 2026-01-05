import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import tutorsData from "@/data/tutorsData";

const Tutors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTutors, setFilteredTutors] = useState(tutorsData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = tutorsData.filter(
      (tutor) =>
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredTutors(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-12 px-6 md:py-16 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Blockchain Tutors
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with industry-leading blockchain experts for personalized
              1-on-1 tutoring sessions
            </p>
          </div>
          <div className="mb-10">
            <form
              onSubmit={handleSearch}
              className="flex gap-2 max-w-xl mx-auto mb-6"
            >
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#86868B]" />
                <Input
                  type="text"
                  placeholder="Search by name, specialty, or topic..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>
          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="mx-auto flex justify-center">
              <TabsTrigger value="all">All Tutors</TabsTrigger>
              <TabsTrigger value="smart-contracts">Smart Contracts</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="nft">NFTs</TabsTrigger>
              <TabsTrigger value="cryptocurrency">Cryptocurrency</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors.map((tutor) => (
                  <Card
                    key={tutor.id}
                    className="overflow-hidden glass-card hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <img src={tutor.avatar} alt={tutor.name} />
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{tutor.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {tutor.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          <span className="text-amber-500">★</span>
                          <span className="font-medium">{tutor.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({tutor.reviews} reviews)
                          </span>
                        </div>
                        <span className="text-sm font-medium">
                          ${tutor.hourlyRate}/hr
                        </span>
                      </div>
                      <p className="text-sm mb-4 line-clamp-2">
                        {tutor.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tutor.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="font-normal"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600">
                          {tutor.availability}
                        </span>
                        <Button>Book Session</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="smart-contracts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors
                  .filter((tutor) =>
                    tutor.specialties.includes("Smart Contracts")
                  )
                  .map((tutor) => (
                    <Card
                      key={tutor.id}
                      className="overflow-hidden glass-card hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <img src={tutor.avatar} alt={tutor.name} />
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{tutor.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {tutor.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-1">
                            <span className="text-amber-500">★</span>
                            <span className="font-medium">{tutor.rating}</span>
                            <span className="text-sm text-muted-foreground">
                              ({tutor.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm font-medium">
                            ${tutor.hourlyRate}/hr
                          </span>
                        </div>
                        <p className="text-sm mb-4 line-clamp-2">
                          {tutor.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutor.specialties.map((specialty) => (
                            <Badge
                              key={specialty}
                              variant="secondary"
                              className="font-normal"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-600">
                            {tutor.availability}
                          </span>
                          <Button>Book Session</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tutors;
