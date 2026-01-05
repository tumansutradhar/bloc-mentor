import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { coursesData } from "@/data/coursesData";

const ITEMS_PER_PAGE = 9;

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchTerm) {
      const filtered = coursesData.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
      setCurrentPage(1);
    } else {
      setFilteredCourses(coursesData);
    }
  }, [searchTerm]);

  const filterByLevel = (level: string) => {
    setActiveFilter(level);

    if (level === "All") {
      setFilteredCourses(coursesData);
    } else {
      const filtered = coursesData.filter((course) => course.level === level);
      setFilteredCourses(filtered);
    }
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setActiveFilter("All");
    setFilteredCourses(coursesData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const indexOfLastCourse = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCourse = indexOfLastCourse - ITEMS_PER_PAGE;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Explore Our{" "}
                <span className="text-gradient">Blockchain Courses</span>
              </h1>
              <p className="max-w-2xl mx-auto text-[#86868B]">
                Dive into expert-led courses designed to build your blockchain
                skills from the ground up, with personalized AI support every
                step of the way.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex flex-col md:flex-row max-w-xl mx-auto gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#86868B]"
                    size={16}
                  />
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  className="gap-2 hover:bg-[#F5F5F7]"
                  onClick={() => setIsFiltering(!isFiltering)}
                >
                  <Filter size={18} />
                  Filter Courses
                </Button>
              </div>
              {isFiltering && (
                <div className="glass-card p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium mb-3">Filter by Level</h3>
                    {activeFilter && activeFilter !== "All" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs border text-[#FF3B30] hover:bg-[#F5F5F7]"
                        onClick={() => filterByLevel("All")}
                      >
                        <X size={14} />
                        Clear Level Filter
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "All",
                      "Beginner",
                      "Intermediate",
                      "Advanced",
                      "All Levels",
                    ].map((level) => (
                      <button
                        key={level}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          activeFilter === level
                            ? "bg-[#0A84FF] text-white"
                            : "bg-[#0A84FF]/10 text-[#1D1D1F] hover:bg-[#0A84FF]/20"
                        }`}
                        onClick={() => filterByLevel(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-[#86868B] mb-4">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <Button className="hover:bg-[#F5F5F7]" variant="outline" onClick={clearAllFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
            {filteredCourses.length > 0 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                  </PaginationItem>
                  {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                      <PaginationLink
                        isActive={currentPage === number}
                        onClick={() => handlePageChange(number)}
                      >
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
