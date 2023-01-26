import React from 'react'
import logo from './assets/logo.png'
import redTriangle from './assets/redTriangle.png'
import hero from './assets/hero.png'
import { AwesomeButton } from 'react-awesome-button'
import './App.css'

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="relative background font-ptsans px-[50px] py-[48px] max-w-[1512px]">
        <img src={redTriangle} alt="" className="absolute top-0 right-0 h-[100vh] max-h-[1000px] z-0" />
        <img src={hero} alt="Jadon Garcia" className="absolute right-[107px] top-[136px] h-[80vh] max-h-[800px] z-0" />
        <nav className="flex justify-between">
          <img src={logo} alt="" className="z-10 w-[250px]" />
          <ul className="z-10 flex justify-between gap-x-[96px] text-white">
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>  
        <div className="flex flex-col gap-y-[37px] w-[50%] mt-[5vh]"> 
          <h1 className="uppercase text-[3.75rem] text-[#caab69] font-bold">Training By Jadon Garcia</h1>
          <p className="text-white text-[1.25rem]">Achieve your fitness aspirations with personalized one-on-one training from a certified professional. I will work closely with you to create a customized workout plan tailored to your goals, needs, and abilities. Benefit from the undivided attention and guidance of a single trainer who will ensure you stay motivated and on track. Book your first session now and experience the difference of individualized training.</p>
          <div>
            <button className="text-white border-2 border-[#caab69] rounded-md px-[20px] py-[15px] shadow-[0px_4px_4px_#bfa264]">
              Schedule With Me!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
