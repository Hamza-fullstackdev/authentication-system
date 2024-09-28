import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div
      style={{
        background: "url('hero-image.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: '#0000009c',
        backgroundBlendMode:'multiply'
      }}
      className='w-100 h-[100vh]'
    >
      <Header />
    </div>
  );
};

export default Home;
