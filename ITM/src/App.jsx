import React from 'react'
import logo from './assets/logo.png'
import redTriangle from './assets/redTriangle.png'
import hero from './assets/hero.png'
import workoutplan from './assets/workoutplan.png'
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import {FiMenu} from 'react-icons/fi'
import './App.css'

const App = () => {

  const highlights = [
    'Dreams',
    'Personalized',
    'Results',
    'Begin'
  ]

  return (
    <div className="flex justify-center">
      <div className="background font-ptsans max-w-[1800px]">
        <div className="relative px-[50px] py-[20px] section">
          <img src={redTriangle} alt="" className="absolute hidden xl:block top-0 right-0 h-full max-h-[1000px] z-0" />
          <img src={hero} alt="Jadon Garcia" className="absolute right-[7vw] top-[100px] h-4/5 max-h-[800px] z-0 hidden xl:block" />
          <nav className="flex justify-between gap-x-[80px]">
            <img src={logo} alt="" className="z-10 w-[150px] sm:w-[250px]" />
            <ul className="z-10 justify-between gap-x-[80px] text-white hidden lg:flex">
              <li><a href="#about">About</a></li>
              <li><a>Services</a></li>
              <li><a>Testimonials</a></li>
              <li><a>Contact</a></li>
            </ul>
            <FiMenu className="text-white w-[30px] h-[30px] block lg:hidden cursor-pointer"/>
          </nav>  
          <div className="flex mt-[5vh] md:mt-0 flex-col-reverse items-start md:flex-row gap-y-[30px] md:items-center justify-between">
            <div className="flex flex-col gap-y-[30px] w-full md:w-[40%] mt-0 mb-[5vh] sm:my-[5vh]"> 
              <h1 className="uppercase text-[2.625rem] sm:text-[3.75rem] text-[#caab69] font-bold">Training By Jadon Garcia</h1>
              <p className="text-white text-[1.125rem] sm:text-[1.25rem]">Achieve your fitness aspirations with personalized one-on-one training from a certified professional. I will work closely with you to create a customized workout plan tailored to your goals, needs, and abilities. Benefit from the undivided attention and guidance of a single trainer who will ensure you stay motivated and on track. Book your first session now and experience the difference of individualized training.</p>
              <div>
                {/* <button className="text-white border-2 border-[#caab69] rounded-md px-[20px] py-[15px] shadow-[0px_4px_4px_#bfa264]">
                  Schedule With Me!
                </button> */}
                <AwesomeButton type="primary" ripple href="/" target="_self">Schedule With Me!</AwesomeButton>
              </div>
            </div>
            <img src={hero} alt="" className="w-[40%] hidden  md:block xl:hidden" />
          </div>
        </div>
        <div className="relative px-[50px] py-[20px] section" id="about">
          <div className="flex flex-col gap-y-[4vh] md:flex-row items-center justify-between gap-x-10">
            <div className="flex flex-col w-full md:w-[60%] gap-y-[4vh]">
              <h2 className="text-white font-bold text-[1.75rem] sm:text-[3rem]">Achieve your <span className="text-[#caab69]">Dreams</span> One Rep at a Time</h2>
              <div className="pl-[6.5vw] flex flex-col gap-y-[4vh]">
                <p className="text-white text-[1.125rem] sm:text-[1.25rem]"><span className="text-[#caab69]">One-on-one training: </span>You'll receive personalized attention and customized training plans tailored to your specific goals and needs.</p>
                <p className="text-white text-[1.125rem] sm:text-[1.25rem]"><span className="text-[#caab69]">Guaranteed results: </span>With my expertise and dedication, I'll help you achieve your fitness goals, whether you want to lose weight, build muscle, or simply improve your overall fitness level.</p>
                <p className="text-white text-[1.125rem] sm:text-[1.25rem]"><span className="text-[#caab69]">Proven track record: </span>I have a proven track record of helping clients achieve their desired results, and I'm confident that I can do the same for you.</p>
                <p className="text-white text-[1.125rem] sm:text-[1.25rem]"><span className="text-[#caab69]">Flexibility and convenience: </span>I'll work with you to schedule sessions that fit your busy schedule and can accommodate your needs, whether you prefer training in a gym or at home.</p>
                <p className="text-white text-[1.125rem] sm:text-[1.25rem]"><span className="text-[#caab69]">Ongoing support: </span>I'll provide ongoing support and guidance to help you stay motivated and on track, and will be available to answer any questions you have along the way.</p>
              </div>
            </div>
            <img src={workoutplan} alt="workout plan" className="w-[40%] max-w-[381px]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
