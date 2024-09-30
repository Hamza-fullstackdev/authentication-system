import React, { useState } from "react";
import {
  GithubAuthProvider,
  signOut,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const GithubOauth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth(app);
  const githubProvider = new GithubAuthProvider();
  const handleGithubOauth = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      const result = await signInWithPopup(auth, githubProvider);
      const username = result.user.displayName.split(" ");
      const res = await fetch("/api/auth/github-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: username[0],
          lname: username[1],
          email: result.user.email || "signupwithgithub@gmail.com",
          phone: result.user.phoneNumber || 11111111,
          access_token: result.user.accessToken,
        }),
      });
      setLoading(true);
      const data = await res.json();
      if (res.ok) {
        navigate("/");
      } else {
        setError(true);
        setErrorMessage("Error occurr while Signup process, Try again later!");
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {error && (
        <div
          className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 fixed top-5 right-5 max-w-[400px]'
          role='alert'
        >
          <span className='font-medium'>Oops!</span> {errorMessage}
        </div>
      )}
      <button
        className='w-full border border-gray-300 px-3 py-2'
        onClick={handleGithubOauth}
        disabled={loading}
      >
        <a className='flex gap-5 items-center justify-center'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i4JeVcOzQvFkVuMlN7RM62s298ar3Qv_vw&s'
            alt='Github'
            className='w-10 h-6 mr-2'
          />
          <span className='text-sm'>Continue with Github</span>
        </a>
      </button>
    </div>
  );
};

export default GithubOauth;
