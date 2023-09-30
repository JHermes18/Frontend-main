import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-9'>
          Welcome to WebWorkWave, We're an employment-focused application that
          provides job offers from companies to the alumni of the PHINMA - University of Pangasinan.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[400px]' />
      </div>
      

      <div className='leading-8 px-5 text-justify'>
      
      <h1 className='text-2xl text-blue-600 font-bold mb-5'>Core Values</h1>
      <h1 className='text-2xl text-blue-400 font-italic mb-5'>Innovation</h1>
      <h1 className='text-2xl text-blue-400 font-italic mb-5'>Excellence</h1>
      <h1 className='text-2xl text-blue-400 font-italic mb-5'>Collaboration</h1>
      <h1 className='text-2xl text-blue-400 font-italic mb-5'>Diversity</h1>
      </div>
    </div>
  );
};

export default About;
