import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Award, BookOpen, CheckCircle, LockIcon, } from "lucide-react";
import { useBlockchain } from "@/context/BlockchainContext";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { redirectToPayment } from "@/utils/blockchain";
import { coursesData } from "@/data/coursesData";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isConnected } = useBlockchain();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [courseData, setCourseData] = useState(coursesData);
  const course = courseData.find((c) => c.id === id);

  useEffect(() => {
    const storedCourses = JSON.parse(
      localStorage.getItem("coursesData") || "[]"
    );
    const updatedCourses = storedCourses.length ? storedCourses : coursesData;
    setCourseData(updatedCourses);

    const userDataStr = localStorage.getItem("user");
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      setIsLoggedIn(true);

      const enrolledCourses = userData.enrolledCourses || [];
      if (enrolledCourses.includes(id)) {
        setIsEnrolled(true);
      }
    }

    const foundCourse = updatedCourses.find((c) => c.id === id);
    if (!foundCourse) {
      console.warn(`Course with ID ${id} not found in coursesData.`);
    }

    window.scrollTo(0, 0);
  }, [id, isLoggedIn]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/courses")}>
              View All Courses
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const completedLessons = course.modules.reduce((total, module) => {
    return total + module.lessons.filter((lesson) => lesson.completed).length;
  }, 0);
  const progressPercentage = Math.round(
    (completedLessons / totalLessons) * 100
  );
  const isAuthenticated = isConnected || isLoggedIn;

  const handleEnroll = () => {
    if (!isAuthenticated) {
      toast.error("Authentication required", {
        description: "Please login to enroll in this course",
      });
      navigate("/login");
      return;
    }

    if (!localStorage.getItem("coursesData")) {
      localStorage.setItem("coursesData", JSON.stringify(courseData));
    }

    redirectToPayment("course", course.id, course.price);

    toast.success("Redirecting to payment", {
      description: `You'll be redirected to complete payment for ${course.title}`,
    });

  };

  const handlePlayLesson = (lesson) => {
    if (lesson.free) {
      toast.success(`Playing: ${lesson.title}`);
    } else if (!isAuthenticated) {
      toast.error("Please login to access this lesson");
      navigate("/login");
    } else if (!isEnrolled) {
      toast.error("You need to enroll in this course to access this lesson");
    } else {
      toast.success(`Playing: ${lesson.title}`);

      const updatedCourses = [...courseData];
      const courseIndex = updatedCourses.findIndex((c) => c.id === id);

      if (courseIndex !== -1) {
        const moduleIndex = updatedCourses[courseIndex].modules.findIndex((m) =>
          m.lessons.some((l) => l.id === lesson.id)
        );

        if (moduleIndex !== -1) {
          const lessonIndex = updatedCourses[courseIndex].modules[
            moduleIndex
          ].lessons.findIndex((l) => l.id === lesson.id);

          if (lessonIndex !== -1) {
            const newCourses = JSON.parse(JSON.stringify(updatedCourses));
            newCourses[courseIndex].modules[moduleIndex].lessons[
              lessonIndex
            ].completed = true;
            setCourseData(newCourses);
          }
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="outline" className="font-normal">
                  {course.level}
                </Badge>
                <Badge variant="outline" className="font-normal">
                  {course.duration}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{course.enrolled} enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500">★</span>
                  <span>
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img src={course.tutor.avatar} alt={course.tutor.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <p className="font-medium">{course.tutor.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.tutor.title}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {isEnrolled && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Course progress
                      </span>
                      <span className="text-sm font-medium">
                        {progressPercentage}%
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </>
                )}
                <div className="flex gap-2">
                  {!isAuthenticated ? (
                    <Button onClick={() => navigate("/login")} className="flex-1" >
                      Login to Enroll
                    </Button>
                  ) : !isEnrolled ? (
                    <Button onClick={handleEnroll} className="flex-1">
                      Buy This Course (${course.price})
                    </Button>
                  ) : (
                    <Button onClick={() => setActiveTab("curriculum")} className="flex-1" >
                      Continue Learning
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <section className="py-12 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="tutor">Instructor</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      What You'll Learn
                    </h2>
                    <ul className="space-y-4">
                      {course.whatYouWillLearn.map((point, index) => (
                        <li key={index} className="flex gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-2xl font-semibold mt-12 mb-6">
                      Course Features
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span>{totalLessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Certificate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Community Access</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">
                      Course Description
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      {course.courseDescription.map((point, index) => (
                        <p key={index} className="flex gap-3">
                          <span>{point}</span>
                        </p>
                      ))}
                    </div>
                    <h2 className="text-2xl font-semibold mt-12 mb-6">
                      Who This Course is For
                    </h2>
                    <ul className="space-y-2 text-muted-foreground">
                      {course.whoThisCourseIsFor.map((target, index) => (
                        <li key={index} className="flex gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{target}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="mt-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-6">
                    {course.modules.map((module, moduleIndex) => (
                      <Card key={module.id} className="overflow-hidden glass-card" >
                        <div className="bg-muted/50 p-4 border-b">
                          <h3 className="font-medium">
                            Module {moduleIndex + 1}: {module.title}
                          </h3>
                        </div>
                        <CardContent className="p-0">
                          <ul>
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lesson.id} className={`p-4 border-b last:border-b-0 flex justify-between items-center ${lesson.completed ? "bg-green-50/50" : ""}`} >
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : (
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-muted-foreground text-xs">
                                      {moduleIndex + 1}.{lessonIndex + 1}
                                    </div>
                                  )}
                                  <div>
                                    <p className="font-medium">
                                      {lesson.title}
                                    </p>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                      <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {lesson.duration}
                                      </span>
                                      {lesson.free && (
                                        <Badge variant="secondary" className="text-xs" >
                                          Free
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="ml-4" onClick={() => handlePlayLesson(lesson)} >
                                  {lesson.free || isEnrolled ? ("Play") : (<LockIcon className="h-4 w-4" />)}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tutor" className="mt-8">
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img src={course.tutor.avatar} alt={course.tutor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        {course.tutor.name}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {course.tutor.title}
                      </p>
                      <div className="space-y-4">
                        <p>{course.tutor.bio}</p>
                        <p>
                          With a passion for teaching complex concepts in an accessible way, {course.tutor.name} has helped thousands of students understand blockchain technology and practical applications.
                        </p>
                        <p>
                          Their teaching approach combines theoretical knowledge with hands-on projects, ensuring students gain both conceptual understanding and practical skills.
                        </p>
                      </div>
                      <div className="mt-6">
                        <Button variant="outline">View Full Profile</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
