import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className='text-2xl font-semibold text-center'>
        Welcome {currentUser?.fname} {currentUser?.lname}! to Web{" "}
        <span className='text-green-500'>Authenticator</span>
      </h1>
      <p className='text-center mt-2 text-md capitalize'>
        Our web authentication app, crafted with the robust MERN stack, ensures
        maximum security and flexibility. Whether you prefer{" "}
        <span className='text-green-500'>Google sign-up, GitHub forms</span>, or
        cutting-edge passkey authentication, your data is protected with the
        best modern tools.
      </p>
    </div>
  );
};

export default Welcome;
