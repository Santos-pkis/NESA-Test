import { useState, useEffect } from "react";
import { login, verifyOTP, signup, resetPassword as resetPasswordService } from "../services/authService";
import { getUserById, updateUserById } from "../services/userService";

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  fullName: string;
  nomineeType: string;
  email: string;
  password: string;
  role: string;
  state: string;
  region: string;
  phoneNumber: string;
  image?: string;
  [key: string]: any;
}

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = getCookie("token");
    const userId = getCookie("userId");
    if (token && userId) {
      getUserById(userId)
        .then((data) => {console.log(data) 
          setUser(data)})
        .catch((err) => {
          if (err instanceof Error) setError(err.message);
        });
    }
  }, []);

  const signIn = async (credentials: Credentials) => {
    try {
      const data = await login(credentials);
      if (data.token) {
        setCookie("token", data.token, 1); // Store token in cookies for 1 day
        setCookie("userId", data.user.id, 1); // Store userId in cookies for 1 day
        setUser(data.user);
      }
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Login failed");
    }
  };

  const verifyEmail = async (email: string, otp: string) => {
    try {
      const data = await verifyOTP({ email, otp });
      if (data.token) {
        setCookie("token", data.token, 1); // Store token in cookies for 1 day
        setCookie("userId", data.user.id, 1); // Store userId in cookies for 1 day
        setUser(data.user);
      }
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("OTP verification failed");
    }
  };

  const register = async (userData: UserData) => {
    try {
      const data = await signup(userData);
      if (data.token) {
        setCookie("token", data.token, 1); // Store token in cookies for 1 day
        setCookie("userId", data.user.id, 1); // Store userId in cookies for 1 day
        setUser(data.user);
      }
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Registration failed");
    }
  };

  const updateUser = async (userData: any) => {
    try {
      const userId = getUserId(); // Use utility function
      const data = await updateUserById(userId, userData);
      setUser(data);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Failed to update user details");
    }
  };

  const getUserId = (): string => {
    const userId = getCookie("userId");
    if (!userId) {
      throw new Error("User ID not found"); // Handle null case
    }
    return userId;
  };

  const getToken = (): string => {
    const token = getCookie("token");
    if (!token) {
      throw new Error("Token not found"); // Handle null case
    }
    return token;
  };

  const logout = () => {
    deleteCookie("token");
    deleteCookie("userId");
    setUser(null);
    window.location.href = "/account/login"; // Redirect to sign-in page
  };

  const resetPassword = async (email: string) => {
    try {
      const data = await resetPasswordService(email);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Failed to reset password");
    }
  };

  return { user, error, signIn, verifyEmail, register, updateUser, getUserId, getToken, logout, resetPassword };
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; path=/; expires=${expires.toUTCString()}; secure`;
};

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure`;
};