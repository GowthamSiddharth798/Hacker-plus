import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import {  Zap } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    setError("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-black via-purple-900 to-black px-4 animate-fade-in">
      <div className="bg-zinc-900 text-white rounded-xl shadow-2xl max-w-md w-full p-8 animate-slide-in">
        <div className="flex justify-center mb-6">
<Zap className="w-8 h-8 text-primary-600" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 text-white ml-3">CyberSecurity</span>
              <span className="text-xs font-medium text-primary-600">by Hacker Plus Technologies</span>
            </div>        </div>
        <h2 className="text-center text-2xl font-bold mb-6">
          {isLogin ? "Login to CyberSecure" : "Sign Up to CyberSecure"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-zinc-800 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-zinc-800 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        />

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <button
          onClick={isLogin ? handleLogin : handleSignup}
          className="w-full py-3 rounded-md bg-purple-700 hover:bg-purple-800 transition duration-300 font-semibold"
          disabled={loading}
        >
          {loading ? (isLogin ? "Logging in..." : "Signing up...") : (isLogin ? "Login" : "Sign Up")}
        </button>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 py-3 rounded-md bg-red-600 hover:bg-red-700 font-semibold transition duration-300"
          disabled={loading}
        >
          Sign in with Google
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 text-center text-purple-400 hover:text-purple-300 cursor-pointer"
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already registered? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
