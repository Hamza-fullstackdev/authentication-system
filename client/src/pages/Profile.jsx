import React from "react";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";

const Profile = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <div className='w-full px-4 min-h-screen flex justify-center items-center'>
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default Profile;
