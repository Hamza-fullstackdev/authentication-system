import React, { useState } from "react";
import { signInWithPopup, getAuth, OAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const MicrosoftOauth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const auth = getAuth(app);
  const microsoftProvider = new OAuthProvider("microsoft.com");
  const handleMicrosoftOauth = async () => {
    try {
      dispatch(signInStart());
      microsoftProvider.setCustomParameters({
        prompt: "consent",
      });
      const result = await signInWithPopup(auth, microsoftProvider);
      const username = result.user.displayName.split(" ");
      const res = await fetch("/api/auth/microsoft-auth", {
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
        onClick={handleMicrosoftOauth}
        disabled={loading}
      >
        <a className='flex gap-5 items-center justify-center'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqBzOiCcReNkfn1AwiPKmRbDvjLjMPMo9lw&s'
            alt='Microsoft Azure Web Services'
            className='w-4 h-4 mr-2'
          />
          <span className='text-sm'>Continue with Microsoft</span>
        </a>
      </button>
    </div>
  );
};

export default MicrosoftOauth;
