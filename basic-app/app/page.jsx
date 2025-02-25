"use client"

import Link from "next/link";
import React from "react";


const Home = () => {
  return (
    <>
      <div className="border-2 border-red-600 flex justify-center font-bold text-4xl mt-20 p-20 flex-col items-center gap-10">
        This is a BASIC NEXT JS APPLICATION
        <h3 className="text-red-600 text-2xl">
        For demo please click <Link className="text-blue-600" href="/dashboard"> here</Link>.
      </h3>
      </div>
      
    </>
  );
};

export default Home;
