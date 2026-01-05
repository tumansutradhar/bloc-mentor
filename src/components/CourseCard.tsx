import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseProps } from "@/data/coursesData";

const CourseCard = ({ course }: { course: CourseProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-card overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#0A84FF]">
            {course.level}
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full overflow-hidden">
            <img
              src={course.tutor.avatar}
              alt={course.tutor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-[#86868B]">{course.tutor.name}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-sm text-[#86868B] mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-[#86868B] mb-4 mt-auto">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500" />
            <span>{course.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold">${course.price.toFixed(2)}</span>
          <Link to={`/courses-detail/${course.id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-transparent hover:text-[#0A84FF] flex items-center gap-1"
            >
              View Course
              <ChevronRight
                size={16}
                className="transition-transform duration-300"
                style={{
                  transform: isHovered ? "translateX(4px)" : "translateX(0)",
                }}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
