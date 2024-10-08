import React, { useState } from "react";
import GoogleOauth from "../components/GoogleOauth";
import GithubOauth from "../components/GithubOauth";
import MicrosoftOauth from "../components/MicrosoftOauth";
import { useNavigate } from "react-router-dom";
import FacebookOauth from "../components/FacebookOauth";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(result));
        navigate("/profile");
      } else {
        setError(true);
        dispatch(signInFailure(result.message));
      }
    } catch (error) {
      setError(true);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <section className='relative'>
      {error && (
        <div
          className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 fixed top-5 right-5 max-w-[400px]'
          role='alert'
        >
          <span className='font-medium'>Oops!</span> {errorMessage}
        </div>
      )}
      <div className='my-20 flex items-center justify-center p-3'>
        <div className='min-w-[300px] sm:w-[400px] shadow-lg px-4 py-8 border-t-4 border-green-400 rounded-md'>
          <h2 className='text-green-400 font-bold tracking-wide text-2xl text-center'>
            Web <span className='text-black'>Authenticator</span>
          </h2>
          <div>
            <form className='mt-4' onSubmit={handleFormData}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col col-span-2'>
                  <label
                    htmlFor='email'
                    className='text-green-400 font-semibold'
                  >
                    Email <span className='text-black'>*</span>
                  </label>
                  <input
                    type='email'
                    className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                    placeholder='Email Address'
                    id='email'
                    name='email'
                    required
                    autoComplete='on'
                    onChange={handleOnchange}
                  />
                </div>
                <div className='flex flex-col col-span-2'>
                  <label
                    htmlFor='password'
                    className='text-green-400 font-semibold'
                  >
                    Password <span className='text-black'>*</span>
                  </label>
                  <input
                    type='password'
                    className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                    placeholder='Password'
                    id='password'
                    name='password'
                    required
                    onChange={handleOnchange}
                  />
                </div>
              </div>
              <div className='mt-5'>
                <button
                  type='submit'
                  className='w-full px-3 py-2 text-white bg-green-400 rounded-md hover:bg-green-500'
                >
                  {loading ? (
                    <div
                      role='status'
                      className='flex items-center justify-center gap-3'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='https://www.w3.org/2000/svg'
                      >
                        <path
                          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                          fill='currentColor'
                        />
                        <path
                          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                          fill='currentFill'
                        />
                      </svg>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                <p className='mt-2 text-sm'>
                  New to web authenticator?{" "}
                  <a href='/signup' className='text-green-400'>
                    signup!
                  </a>
                </p>
              </div>
              <div className='mt-5'>
                <GoogleOauth />
              </div>
              <div className='mt-3'>
                <MicrosoftOauth />
              </div>
              <div className='mt-3'>
                <GithubOauth />
              </div>
              <div className='mt-3'>
                <FacebookOauth />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
