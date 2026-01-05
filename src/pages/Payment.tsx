import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const itemType = searchParams.get("type");
  const itemId = searchParams.get("id");
  const price = searchParams.get("price");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!itemType || !itemId || !price) {
      toast.error("Invalid payment details.");
      navigate("/");
    }
  }, [itemType, itemId, price, navigate]);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success("Payment Successful!", {
        description: `You have successfully purchased ${
          itemType === "course" ? "a course" : "a tutoring session"
        }!`,
      });

      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      userData.enrolledCourses = [...(userData.enrolledCourses || []), itemId];
      localStorage.setItem("user", JSON.stringify(userData));

      if (!localStorage.getItem("coursesData")) {
        localStorage.setItem("coursesData", JSON.stringify([]));
      }

      navigate(`/course/${itemId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Payment for {itemType === "course" ? "Course" : "Tutor"}
        </h1>
        <p className="text-gray-600">Item ID: {itemId}</p>
        <p className="text-xl font-bold mb-4">${price}</p>
        <Button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Confirm Payment"}
        </Button>
      </div>
    </div>
  );
};

export default Payment;
