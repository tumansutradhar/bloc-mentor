import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBlockchain } from "@/context/BlockchainContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Award,
  BookOpen,
  User,
  DollarSign,
  Calendar as CalendarIcon,
  UserCog,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const upcomingSessions = [
  {
    id: "sess-1",
    tutorName: "Dr. Sarah Johnson",
    tutorAvatar: "/placeholder.svg",
    date: "2023-09-15",
    time: "14:00",
    duration: 60,
    topic: "Smart Contract Security",
    contractAddress: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
    price: 75,
  },
  {
    id: "sess-2",
    tutorName: "Michael Chen",
    tutorAvatar: "/placeholder.svg",
    date: "2023-09-17",
    time: "10:30",
    duration: 90,
    topic: "DeFi Protocol Analysis",
    contractAddress: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1a",
    price: 120,
  },
];

const pastSessions = [
  {
    id: "past-1",
    tutorName: "Elena Petrov",
    tutorAvatar: "/placeholder.svg",
    date: "2023-09-01",
    time: "15:00",
    duration: 60,
    topic: "Blockchain Architecture Basics",
    contractAddress: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1a2b",
    price: 75,
    completed: true,
    rating: 5,
  },
  {
    id: "past-2",
    tutorName: "James Williams",
    tutorAvatar: "/placeholder.svg",
    date: "2023-08-27",
    time: "11:00",
    duration: 120,
    topic: "NFT Marketplace Development",
    contractAddress: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1a2b3c",
    price: 150,
    completed: true,
    rating: 4,
  },
  {
    id: "past-3",
    tutorName: "Dr. Sarah Johnson",
    tutorAvatar: "/placeholder.svg",
    date: "2023-08-20",
    time: "13:30",
    duration: 60,
    topic: "Introduction to Solidity",
    contractAddress: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1a2b3c4d",
    price: 75,
    completed: true,
    rating: 5,
  },
];

const learningProgress = [
  {
    id: 1,
    course: "Blockchain Fundamentals",
    progress: 100,
    completed: true,
  },
  {
    id: 2,
    course: "Smart Contract Development",
    progress: 68,
    completed: false,
  },
  {
    id: 3,
    course: "DeFi Protocols",
    progress: 42,
    completed: false,
  },
  {
    id: 4,
    course: "NFT Development",
    progress: 25,
    completed: false,
  },
];

const learningAnalytics = [
  { name: "Week 1", hours: 3 },
  { name: "Week 2", hours: 5 },
  { name: "Week 3", hours: 4 },
  { name: "Week 4", hours: 7 },
  { name: "Week 5", hours: 6 },
  { name: "Week 6", hours: 8 },
];

const Dashboard = () => {
  const {
    isConnected,
    walletAddress,
    balance,
    connectWallet,
    completeSession,
  } = useBlockchain();
  const [isCompleting, setIsCompleting] = useState(false);
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(
    null
  );

  const handleCompleteSession = async (
    sessionId: string,
    contractAddress: string
  ) => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsCompleting(true);
    try {
      const success = await completeSession(contractAddress);
      if (success) {
        toast.success(`Session ${sessionId} completed successfully!`);
      }
    } catch (error) {
      toast.error("Failed to complete session");
      console.error(error);
    } finally {
      setIsCompleting(false);
    }
  };

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="py-12 px-6 max-w-7xl mx-auto">
          {!isConnected ? (
            <Card className="text-center p-8 glass-card">
              <CardHeader>
                <CardTitle>Connect Your Wallet</CardTitle>
                <CardDescription>
                  Connect your wallet to view your dashboard and manage your
                  tutoring sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" onClick={connectWallet} className="mt-4">
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="glass-card px-4 py-2 rounded-lg">
                        <span className="text-sm text-muted-foreground mr-2">
                          Wallet:
                        </span>
                        <span className="font-mono">
                          {walletAddress?.substring(0, 6)}...
                          {walletAddress?.substring(38)}
                        </span>
                      </div>
                      <div className="glass-card px-4 py-2 rounded-lg">
                        <span className="text-sm text-muted-foreground mr-2">
                          Balance:
                        </span>
                        <span>{balance}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/profile">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <UserCog size={16} />
                      <span>
                        {user?.name || user?.email
                          ? `Edit profile (${user.name || user.email})`
                          : "Edit profile"}
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Learning Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Total Learning Hours
                          </p>
                          <p className="text-2xl font-bold">33 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Courses Enrolled
                          </p>
                          <p className="text-2xl font-bold">4</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Tutors Engaged
                          </p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Certificates Earned
                          </p>
                          <p className="text-2xl font-bold">1</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Your Learning Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {learningProgress.map((course) => (
                        <div key={course.id} className="space-y-2">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">
                              {course.course}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {course.progress}%
                            </p>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          {course.completed && (
                            <Badge
                              variant="outline"
                              className="text-green-600 border-green-600"
                            >
                              Completed
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Learning Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={learningAnalytics}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar
                            dataKey="hours"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Hours spent learning per week
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Tabs defaultValue="upcoming" className="mb-10">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                  <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
                  <TabsTrigger value="past">Past Sessions</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingSessions.length > 0 ? (
                      upcomingSessions.map((session) => (
                        <Card
                          key={session.id}
                          className="glass-card overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex-shrink-0">
                                <img
                                  src={session.tutorAvatar}
                                  alt={session.tutorName}
                                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{session.topic}</h3>
                                <p className="text-sm text-muted-foreground">
                                  with {session.tutorName}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3 mb-4">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  {new Date(session.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  {session.time} • {session.duration} minutes
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  ${session.price}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="text-xs bg-green-100 text-green-800 hover:bg-green-200">
                                Paid
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Contract:{" "}
                                {session.contractAddress.substring(0, 6)}...
                                {session.contractAddress.substring(38)}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1">
                                Reschedule
                              </Button>
                              <Button
                                className="flex-1"
                                onClick={() =>
                                  handleCompleteSession(
                                    session.id,
                                    session.contractAddress
                                  )
                                }
                                disabled={isCompleting}
                              >
                                Complete
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center p-10">
                        <p className="text-muted-foreground">
                          No upcoming sessions found.
                        </p>
                        <Button className="mt-4">Book a Session</Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="past" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pastSessions.length > 0 ? (
                      pastSessions.map((session) => (
                        <Card
                          key={session.id}
                          className="glass-card overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex-shrink-0">
                                <img
                                  src={session.tutorAvatar}
                                  alt={session.tutorName}
                                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{session.topic}</h3>
                                <p className="text-sm text-muted-foreground">
                                  with {session.tutorName}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-3 mb-4">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  {new Date(session.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">
                                  {session.time} • {session.duration} minutes
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 mb-4">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-lg ${
                                      i < session.rating
                                        ? "text-amber-500"
                                        : "text-gray-300"
                                    }`}
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground ml-2">
                                Your rating
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                                Completed
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                ${session.price}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center p-10">
                        <p className="text-muted-foreground">
                          No past sessions found.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
