import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "sonner";

export interface UserType {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  bio?: string;
  avatar?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: UserType | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  updateUser: (userData: Partial<UserType>) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  resetPassword: async () => false,
  updateUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email.includes("@") && password.length >= 6) {
        const newUser: UserType = {
          id: Math.random().toString(36).substring(2),
          name: email.split("@")[0],
          email,
          createdAt: new Date().toISOString(),
        };

        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));

        toast.success("Login successful", {
          description: "Welcome back to Block Mentor!",
        });
        return true;
      } else {
        toast.error("Invalid credentials", {
          description: "The email or password you entered is incorrect.",
        });
        return false;
      }
    } catch (error) {
      toast.error("Login failed", {
        description: "There was a problem signing you in. Please try again.",
      });
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email.includes("@") || password.length < 6) {
        toast.error("Invalid input", {
          description:
            "Please provide a valid email and a password with at least 6 characters.",
        });
        return false;
      }

      const newUser: UserType = {
        id: Math.random().toString(36).substring(2),
        name,
        email,
        createdAt: new Date().toISOString(),
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      toast.success("Registration successful", {
        description: "Your account has been created successfully!",
      });
      return true;
    } catch (error) {
      toast.error("Registration failed", {
        description:
          "There was a problem creating your account. Please try again.",
      });
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully", {
      description: "You have been signed out of your account.",
    });
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email.includes("@")) {
        toast.error("Invalid email", {
          description: "Please provide a valid email address.",
        });
        return false;
      }

      toast.success("Password reset link sent", {
        description:
          "Check your email for instructions to reset your password.",
      });
      return true;
    } catch (error) {
      toast.error("Password reset failed", {
        description:
          "There was a problem sending the reset link. Please try again.",
      });
      console.error(error);
      return false;
    }
  };

  const updateUser = (userData: Partial<UserType>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success("Profile updated", {
        description: "Your profile information has been updated successfully.",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        resetPassword,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
