import { useState, useEffect } from 'react';
import { login, verifyOTP, signup, resetPassword as resetPasswordService } from '../services/authService';
import { getUserById, updateUserById } from '../services/userService';

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  [key: string]: any;
}

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      getUserById(userId)
        .then(data => setUser(data))
        .catch(err => {
          if (err instanceof Error) setError(err.message);
        });
    }
  }, []);

  const signIn = async (credentials: Credentials) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error('Login failed');
    }
  };

  const verifyEmail = async (email: string, otp: string) => {
    try {
      const data = await verifyOTP({ email, otp });
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user.id);
        setUser(data.user);
      }
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error('OTP verification failed');
    }
  };

  const register = async (userData: UserData) => {
    try {
      const data = await signup(userData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      setUser(data.user);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error('Registration failed');
    }
  };

  const updateUser = async (userData: any) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error('User ID not found');
      const data = await updateUserById(userId, userData);
      setUser(data);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error('Failed to update user details');
    }
  };

  const getUserId = () => localStorage.getItem('userId');

  const getToken = () => localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUser(null);
    window.location.href = '/account/login'; // Redirect to sign-in page
  };

  const resetPassword = async (email: string) => {
    try {
      const data = await resetPasswordService(email);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error('Failed to reset password');
    }
  };

  return { user, error, signIn, verifyEmail, register, updateUser, getUserId, getToken, logout, resetPassword };
};