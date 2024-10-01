import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const GoogleOauth = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const handleGoogleOauth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      dispatch(signInStart());
      const result = await signInWithPopup(auth, provider);
      const username = result.user.displayName.split(" ");
      const res = await fetch("/api/auth/google-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: username[0],
          lname: username[1],
          email: result.user.email,
          phone: result.user.phoneNumber,
          avatar: result.user.photoURL,
          access_token: result.user.accessToken,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/profile");
      } else {
        setError(true);
        dispatch(signInFailure(data.message));
      }
    } catch (error) {
      setError(true);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
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
        onClick={handleGoogleOauth}
        disabled={loading}
      >
        <a className='flex gap-5 items-center justify-center'>
          <img
            src='https://img.icons8.com/color/48/000000/google-logo.png'
            alt='Google'
            className='w-6 h-6 mr-2'
          />
          <span className='text-sm'>Continue with Google</span>
        </a>
      </button>
    </>
  );
};

export default GoogleOauth;
