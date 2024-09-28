import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div
      style={{
        background: "url('hero-image.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0000009c",
        backgroundBlendMode: "multiply",
      }}
      className='w-100 h-[100vh] shadow-md'
    >
      <Header />
      <div className='text-center my-20 sm:my-40 px-2 sm:px-16'>
        <h1 className='text-4xl sm:text-5xl text-green-400 font-bold tracking-wide'>
          Web <span className='text-white'>Authenticator</span>
        </h1>
        <p className='mt-3 text-white font-semibold text-lg capitalize'>
          Secure your account with <span className='text-green-400'>Google, GitHub, or a Passkey</span>—your choice,
          your security!
        </p>
        <p className='mt-2 text-white text-md capitalize'>
        Our web authentication app, crafted with the robust MERN stack, ensures maximum security and flexibility. Whether you prefer Google sign-up, GitHub forms, or cutting-edge passkey authentication, your data is protected with the best modern tools.
        </p>
      </div>
    </div>
  );
};

export default Home;
