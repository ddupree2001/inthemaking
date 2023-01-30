import React, {useState} from 'react'
import logo from './assets/logo.png'
import redTriangle from './assets/redTriangle.png'
import hero from './assets/hero.png'
import workoutplan from './assets/workoutplan.png'
import instagram from './assets/instagram.png'
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import {FiMenu} from 'react-icons/fi'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { motion } from "framer-motion"
import './App.css'

const App = () => {

  const [slider, setSlider] = useState(0)
  const [menu, setMenu] = useState(false)

  const testimonials = [
    {
      name: "Blajon L.",
      quote: "I've known Jadon Garcia (In The Making), for many years now. One Thing about him is he knows how to stay consistent and motivate the people around him. I've trained along side with him since we grew up as kids, but since becoming a personal trainer he took my body to new levels that I couldn't reach by myself. He's very polite and makes you feel extremely comfortable (no matter your fitness level). In The Making is the right fit for you if you want to reach your goals and take yourself to the next level. He's a one of a kind trainer, I truly recommend you to book your session today and see for yourself."
    },
    {
      name: "David S.",
      quote: "I started working out with Jadon in May 2021 through 1:1 and small group training. When I started I was about 125lbs and have gained significant strength and size within our time frame of training. Im currently close to my goal weight, along with improved lean mass and noticeably different physique. The workouts are motivating and challenging, with different workouts each session. Jadon has also helped me with nutritional advice that has been helping me throughout this process of reaching my goals."
    },
    {
      name: "Melissa R.",
      quote: "Jadon is the truth! If you're looking for a trainer who listens to your fitness goals and specifies your workout towards theme's the trainer for you! He will push you to be the best version of yourself in every workout! Super friendly and knowledgable. Highly recommend him."
    },
    {
      name: "Chris & Carrie T.",
      quote: "Jadon is an amazing trainer and all-around great person. We highly recommend him. My daughter is a D1 soccer player in college and my son is also a competitive soccer player in highschool. Jadon is the go-to trainer for both. As a former college football player and high level athlete himself, Jadon understands exactly the training athletes need to optimize performance. The workouts are tailored to their specific need. Jadon's energy is infectious and motivating. My son loves training with him and Jadon is able to get the most out of him. He was also great for my daughter in her recovery from injury. He has a gift of connecting with all his clients."
    },
    {
      name: "Diana",
      quote: "I've been training with Jadon for over a year now and can say it's been so much fun! He has helped me build more strength and muscle endurance more than ever before. I also feel more efficient with my movements on the court which has been a game changer to me. As an athlete that values putting in the hard work to achieve my goals, I really appreciate a trainer that has the same mindset and is always working to improve himself as well. He is so encouraging and really pushes you to challenge your mental and physical abilities, so that you can be better as an athlete while achieving whatever physical goals you have. He does an awesome job of mixing in compound exercises with a lot of speed and agility drills too, so you'll have so much fun training with him if you want to get stronger and move better. I've also had a few injuries from volleyball over the year and Jadon was so patient with me, still allowing me to train around that and we were able to incorporate rehab exercises to support my injuries. He's super knowledgable and has a library of exercises in his head so you're definitely in good hands. I'll add that Jadon is also so kind, funny and caring. You'll get your work in but also so kind, funny and caring. You'll get your work in but also feel like you have a friend to talk to and push you through all the hard stuff. Whether you're n athlete or a weekday warrior, you won't regret having him as your trainer."
    },
    {
      name: "David P.",
      quote: "I've tried other trainers. I even did Crossfit for 9 months but Jadon is my all time favorite training experience. Hands down. I trained with him from September of 2020 to November of 2021 so just a little over a year. I started at 270 lbs and ended up at 211 lbs. That was nearly a 60 lbs loss in a little over a year. I actually had the first signs of a six pack for the first time in my life. That felt amazing! I decided to take on a killer combo of practicing Jiu Jitsu twice a week, running on the off days and keeping a strict diet and then training with Jadon twice a week and the results were fast and amazing. I credit Jadon and his program and his consistent affirmation and encouragement with helping me build incredible core strength and a solid body that helped me get there and maintain a robust metabolism to help burn that fat. What I really appreciated about Jadon was his uncanny ability to look at me and judge where I was at and what I was capable of and then assign workouts to me that were just enough to provide me with a great workout but still be on the upper end of my abilities and push me to go a little farther than I thought I could do. He didn’t set insurmountable milestones for me that made me feel inferior or defeated like I often felt at Crossfit. So many times he would assign me an exercise with a specific weight and a specific number of reps and it would turn out to be just exactly what I could handle with a need to really push on the last reps. It was like he was great at finding the workout sweet spot. I was impressed that he could call that out time and time again. I used to bring my son a lot to the workouts too and Jadon made it a fun and bonding time for us. I was very impressed with his wide range of exercises that he was familiar with and how he consistently switched things up during different workouts to keep things interesting and engaging. He even incorporated boxing for me and my son and made it fun. That was wicked cardio too!! I liked how Jadon called out the athlete in both of us and provided lots of affirmation. I would recommend to anybody who wants to get results to train with Jadon."
    },
    {
      name: "Lorenzo",
      quote: "Jadon helped me ease into working out again, after a long break due to covid. He breaks it down for you to simplify the workouts, making it an enjoyable experience."
    },
    {
      name: "Valerie",
      quote: "I have been training with Jadon for a little over a year now, we started on October 18, 2021. My siblings were encouraging me to start working out, but I knew I would need someone to hold me accountable. Jadon has been just that! He works well with your schedule and still keeps a stern stance one the goals we both have set for myself. He is always making sure that I stick to what I said and I really need that accountability reminder. He also listens to you and your body during the sessions so if there's any adjustments that need to be made, he will alter the workout to fit my needs. He's never too pushy, but pushy enough. Y'all get Jadon in your life!"
    }
  ]

  return (
    <div className="flex justify-center">
      <div className="scroll-smooth font-ptsans max-w-[1800px]">
        <div className="relative px-[50px] py-[20px] section">
          <img src={redTriangle} alt="" className="absolute hidden xl:block top-0 right-0 h-full max-h-[1000px] z-0" />
          <img src={hero} alt="Jadon Garcia" className="absolute right-[7vw] top-[100px] h-4/5 max-h-[800px] z-0 hidden xl:block" />
          <nav className="relative flex justify-between gap-x-[80px]">
            <img src={logo} alt="" className="z-10 w-[150px] sm:w-[250px]" />
            <ul className="z-10 justify-between gap-x-[80px] text-white hidden lg:flex">
                <motion.li whileHover={{scale: 1.05}}><a href="#about">About</a></motion.li>
                <motion.li whileHover={{scale: 1.05}}><a href="#services">Services</a></motion.li>
                <motion.li whileHover={{scale: 1.05}}><a href="#testimonials">Testimonials</a></motion.li>
                <motion.li whileHover={{scale: 1.05}}><a href="#contact">Contact</a></motion.li>
            </ul>
            {menu && (
              <ul className="absolute z-10 justify-between gap-x-[80px] text-white flex flex-col lg:hidden right-0 top-[5vh] gap-y-[1vh] bg-[rgba(0,0,0,0.7)] p-4 rounded-md">
                  <motion.li whileHover={{scale: 1.05}}><a href="#about">About</a></motion.li>
                  <motion.li whileHover={{scale: 1.05}}><a href="#services">Services</a></motion.li>
                  <motion.li whileHover={{scale: 1.05}}><a href="#testimonials">Testimonials</a></motion.li>
                  <motion.li whileHover={{scale: 1.05}}><a href="#contact">Contact</a></motion.li>
              </ul>
            )}
            <FiMenu className="text-white w-[30px] h-[30px] block lg:hidden cursor-pointer" onClick={() => setMenu(!menu)}/>
          </nav>  
          <div className="flex mt-[5vh] md:mt-0 flex-col-reverse items-start md:flex-row gap-y-[30px] md:items-center justify-between">
            <div className="flex flex-col gap-y-[30px] w-full md:w-[40%] mt-0 mb-[5vh] sm:my-[5vh]"> 
              <h1 className="uppercase text-[2.625rem] sm:text-[3.75rem] text-[#caab69] font-bold">Training By Jadon Garcia</h1>
              <p className="text-white text-[1.125rem] sm:text-[1.25rem]">Achieve your fitness aspirations with personalized one-on-one training from a certified professional. I will work closely with you to create a customized workout plan tailored to your goals, needs, and abilities. Benefit from the undivided attention and guidance of a single trainer who will ensure you stay motivated and on track. Book your first session now and experience the difference of individualized training.</p>
              <div>
                {/* <button className="text-white border-2 border-[#caab69] rounded-md px-[20px] py-[15px] shadow-[0px_4px_4px_#bfa264]">
                  Schedule With Me!
                </button> */}
                <AwesomeButton type="primary" ripple href="#services" target="_self">Schedule With Me!</AwesomeButton>
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
        <div className="relative px-[50px] py-[20px] section" id="services">
          <div className="flex flex-col items-center justify-center gap-y-[4vh]">
            <h2 className="text-white text-center font-bold text-[1.75rem] sm:text-[3rem]">Transform Your Body and Mind with <span className="text-[#caab69]">Personalized </span> Training</h2>
            <p className="text-white text-center text-[1.125rem] sm:text-[1.25rem] w-full max-w-[700px]">I offer a wide range of personal training, performance training and recovery sessions. Each session can be tailored to your individual goals and needs.</p>
          </div>
          <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 xl:grid-rows-1 justify-center mt-[8vh] gap-y-10 gap-5 xl:gap-0">
            <motion.div whileHover={{scale: 1.1}} className="relative">
              <svg width="325" height="325" viewBox="0 0 342 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 345V22.5C3 11.4543 11.9543 2.5 23 2.5H257.979C263.423 2.5 268.632 4.71922 272.403 8.64541L333.924 72.6948C337.502 76.4197 339.5 81.3844 339.5 86.5494V345C339.5 356.046 330.546 365 319.5 365H23C11.9543 365 3 356.046 3 345Z" stroke="#892827" strokeWidth="5"/>
              </svg>
              <p className="absolute text-white font-bold text-[2rem] left-[40px] top-[20px]">Personal</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[80px]">1 on 1 - $100/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[130px]">Small Group - $60/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[180px]">Large Group - $100/session</p>
              <AwesomeButton type="danger" ripple href="#services" target="_self" className="absolute left-[60px] top-[235px]">Let's Get To Work!</AwesomeButton>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}} className="relative">
              <svg width="325" height="325" viewBox="0 0 342 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 345V22.5C3 11.4543 11.9543 2.5 23 2.5H257.979C263.423 2.5 268.632 4.71922 272.403 8.64541L333.924 72.6948C337.502 76.4197 339.5 81.3844 339.5 86.5494V345C339.5 356.046 330.546 365 319.5 365H23C11.9543 365 3 356.046 3 345Z" stroke="#892827" strokeWidth="5"/>
              </svg>
              <p className="absolute text-white font-bold text-[2rem] left-[40px] top-[20px]">Performance</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[80px]">1 on 1 - $100/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[130px]">Small Group - $55/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[180px]">Large Group - <span className="text-[#892827]">X</span></p>
              <AwesomeButton type="danger" ripple href="#services" target="_self" className="absolute left-[60px] top-[235px]">Let's Get To Work!</AwesomeButton>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}} className="relative">
              <svg width="325" height="325" viewBox="0 0 342 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 345V22.5C3 11.4543 11.9543 2.5 23 2.5H257.979C263.423 2.5 268.632 4.71922 272.403 8.64541L333.924 72.6948C337.502 76.4197 339.5 81.3844 339.5 86.5494V345C339.5 356.046 330.546 365 319.5 365H23C11.9543 365 3 356.046 3 345Z" stroke="#892827" strokeWidth="5"/>
              </svg>
              <p className="absolute text-white font-bold text-[2rem] left-[40px] top-[20px]">Recovery</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[80px]">1 on 1 - $50/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[130px]">Small Group - <span className="text-[#892827]">X</span></p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[180px]">Large Group - <span className="text-[#892827]">X</span></p>
              <AwesomeButton type="danger" ripple href="#services" target="_self" className="absolute left-[60px] top-[235px]">Let's Get To Work!</AwesomeButton>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}} className="relative">
              <svg width="325" height="325" viewBox="0 0 342 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 345V22.5C3 11.4543 11.9543 2.5 23 2.5H257.979C263.423 2.5 268.632 4.71922 272.403 8.64541L333.924 72.6948C337.502 76.4197 339.5 81.3844 339.5 86.5494V345C339.5 356.046 330.546 365 319.5 365H23C11.9543 365 3 356.046 3 345Z" stroke="#892827" strokeWidth="5"/>
              </svg>
              <p className="absolute text-white font-bold text-[2rem] left-[40px] top-[20px]">Speed</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[80px]">1 on 1 - $40/session</p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[130px]">Small Group - <span className="text-[#892827]">X</span></p>
              <p className="absolute text-white text-[1.25rem] left-[60px] top-[180px]">Large Group - <span className="text-[#892827]">X</span></p>
              <AwesomeButton type="danger" ripple href="#services" target="_self" className="absolute left-[60px] top-[235px]">Let's Get To Work!</AwesomeButton>
            </motion.div>
          </div>
        </div>
        <div className="relative px-[50px] py-[20px] section" id="testimonials">
          <div className="flex justify-center mb-[5vh]">
            <h2 className="text-white text-center font-bold text-[1.75rem] sm:text-[3rem]">Real <span className="text-[#caab69]">Results</span> from Real People</h2>
          </div>
          <div className="relative flex justify-center">
            <div className="rounded-md w-[70vw] md:w-[70vw] max-w-[1200px] flex overflow-x-auto overflow-y-auto h-[300px] bg-[#caab69]">
              {testimonials.map((testimonial, index) => (
                <motion.div animate={{ x: slider}} transition={{duration: 0.5}} className="relative flex-[0_0_100%] px-16 py-8" id={index} key={index}>
                  <p className="text-[1.25rem] sm:text-[1.5rem] font-bold mb-[2vh]">{testimonial.name}</p>
                  <p className="text-[1.125rem] sm:text-[1.25rem] pb-8">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
                  <AiOutlineLeft className="text-[#892827] absolute top-[50%] left-[8%] md:left-0 lg:left-[5%] mt-[-15px] sm:mt-[-25px] w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer" onClick={() => slider<0 && (0.7*window.innerWidth)<1200 ? setSlider(slider + (0.7 * window.innerWidth)) : setSlider(slider+1200)}/>
                  <AiOutlineRight className="text-[#892827] absolute top-[50%] right-[8%] md:right-0 lg:right-[5%] mt-[-15px] sm:mt-[-25px] w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer" onClick={() => slider>(-6.9*0.7*window.innerWidth) && (0.7*window.innerWidth)<1200 ? setSlider(slider - (0.7 * window.innerWidth)) : setSlider(slider-1200)} />
          </div>
        </div>
        <div className="relative px-[50px] py-[20px] section" id="contact">
          <div className="flex justify-center">
            <h2 className="text-white text-center font-bold text-[1.75rem] sm:text-[3rem]">Let's <span className="text-[#caab69]">Begin</span> Your Journey Together</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20 gap-y-[5vh] mt-[5vh]">
            <img src={instagram} alt="" className="hidden sm:block" />
            <div className="flex flex-col gap-y-[5vh]">
              <p className="text-white font-bold text-[1.5rem sm:text-[2rem]">Phone: (408) 489-7662</p>
              <p className="text-white font-bold text-[1.5rem sm:text-[2rem]">Email: j.don95@outlook.com</p>
              <p className="text-white font-bold text-[1.5rem sm:text-[2rem]">Instagram: @inthemaking.pt</p>
              <div>
                <AwesomeButton type="secondary" ripple href="#services" target="_self">Book A Session!</AwesomeButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center"> 
          <div className=" h-[1px] bg-white w-[90%] mb-5"></div>
        </div>
        <div className="flex justify-center py-[5vh]">
          <p className="text-white text-[1rem] sm:text-[1.125rem]">© 2022 - In The Making | All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default App
