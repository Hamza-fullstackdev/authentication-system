import React from "react";

const Signup = () => {
  return (
    <div className='my-28 flex items-center justify-center'>
      <div className='min-w-[380px] max-w-[600px] shadow-lg p-2 sm:p-4 border-t-4 border-green-400 rounded-md'>
        <h2 className='text-green-400 font-bold tracking-wide text-2xl text-center'>
          Web <span className='text-black'>Authenticator</span>
        </h2>
        <div>
          <form className='mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='fname' className='text-green-400 font-semibold'>
                  First Name <span className='text-black'>*</span>
                </label>
                <input
                  type='text'
                  className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                  placeholder='First Name'
                  id='fname'
                  name='fname'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='lname' className='text-green-400 font-semibold'>
                  Last Name <span className='text-black'>*</span>
                </label>
                <input
                  type='text'
                  className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                  placeholder='Last Name'
                  id='lname'
                  name='lname'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='city' className='text-green-400 font-semibold'>
                  City <span className='text-black'>*</span>
                </label>
                <input
                  type='text'
                  className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                  placeholder='City'
                  id='city'
                  name='city'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='country' className='text-green-400 font-semibold'>
                  Country <span className='text-black'>*</span>
                </label>
                <input
                  type='text'
                  className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                  placeholder='Country'
                  id='country'
                  name='country'
                  required
                />
              </div>
              <div className='flex flex-col col-span-2'>
                <label htmlFor='email' className='text-green-400 font-semibold'>
                  Email <span className='text-black'>*</span>
                </label>
                <input
                  type='email'
                  className='placeholder:text-sm px-3 py-2 border border-gray-300 rounded-md outline-none'
                  placeholder='Email Address'
                  id='email'
                  name='email'
                  required
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
                />
              </div>
            </div>
            <div className='mt-5'>
              <button
                type='submit'
                className='w-full px-3 py-2 text-white bg-green-400 rounded-md hover:bg-green-500'
              >
                Sign Up
              </button>
              <p className='mt-2 text-sm'>
                Already have an account?{" "}
                <a href='/login' className='text-green-400'>
                  Login
                </a>
              </p>
            </div>
            <div className="mt-5">
              <button className='w-full border border-gray-300 px-3 py-2'>
                <a href='/' className='flex gap-5 items-center justify-center'>
                  <img
                    src='https://img.icons8.com/color/48/000000/google-logo.png'
                    alt='Google'
                    className='w-6 h-6 mr-2'
                  />
                  <span className="text-sm">Sign Up with Google</span>
                </a>
              </button>
            </div>
            <div className="mt-3">
              <button className='w-full border border-gray-300 px-3 py-2'>
                <a href='/' className='flex gap-5 items-center justify-center'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i4JeVcOzQvFkVuMlN7RM62s298ar3Qv_vw&s'
                    alt='Google'
                    className='w-10 h-6 mr-2'
                  />
                  <span className="text-sm">Sign Up with Github</span>
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
