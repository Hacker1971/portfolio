import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Tanvir Islam, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a dedicated, goal-oriented, innovative, and enthusiastic front-end developer and always determined to work hard and meet tight deadlines. I'm highly motivated and passionate about coding to make delightful user-interactive interfaces. It is my goal to make a positive impact through my work as a front-end developer as I continue to grow in my career. As a technology enthusiast, I'm always looking for new ways to collaborate and make a difference in the world through technology.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
