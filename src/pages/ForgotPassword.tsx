import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email required", {
        description: "Please enter your email address.",
      });
      return;
    }

    if (!email.includes("@")) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast.success("Reset instructions sent", {
        description:
          "Check your email for instructions to reset your password.",
      });
    } catch (error) {
      toast.error("Request failed", {
        description:
          "There was a problem processing your request. Please try again.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-20">
      <div className="w-full max-w-md glass-card">
        <Card className="border-0 shadow-elevation">
          <CardHeader className="space-y-1">
            <div className="flex items-center mb-2">
              <Link to="/login">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <span className="flex-1"></span>
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Reset your password
            </CardTitle>
            <CardDescription className="text-center">
              {!isSubmitted
                ? "Enter your email and we'll send you instructions to reset your password"
                : "Check your email for password reset instructions"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4" />
                    <Input
                      id="email"
                      placeholder="Email"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0A84FF] hover:bg-[#0055D4] text-white"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Sending instructions..."
                    : "Send reset instructions"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="mb-4">
                  We've sent instructions to{" "}
                  <span className="font-medium">{email}</span>
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#1D1D1F] hover:bg-[#F5F5F7] mt-2"
                >
                  <Link to="/login">Return to login</Link>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              <span>Remember your password? </span>
              <Link
                to="/login"
                className="underline text-[#0A84FF] hover:text-[#0055D4] font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
