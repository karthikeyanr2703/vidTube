import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    
      <div className='container'>
      <Feed/>
      </div>
    </>
  );
};

export default Home;
