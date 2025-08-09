import React from 'react'
import heroimg from '../../assets/images/muhib1.png'
//import CountUp from 'react-countup/build/CountUp'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className='pt-0 id:"about"'>
    <div className='container pt-14'>
    <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
    {/* ================== hero left contents===========*/}

    <div className='w-full md:basis-1/2'>
    <h5 data-aos='fade-right' data-aos-duration='1500'
     className='text-headingColor font-[600] text-[18px]'>Hello there</h5>
    <h1 data-aos='fade-up' data-aos-duration='1500' 
    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px]
    leading-[30px] sm:leading-[46px] mt-5'> I'm Ismail Muhammad Adam <br/> Software developer </h1>
    <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'
     className=' flex items-center gap-6 mt-7'>
    <a href='#contact'>
    <button className='bg-primaryColor text-white font-[500]
     flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
     <i class='ri-mail-line'></i>Hire me</button>
    </a>
    <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See Portfolio</a>

    
    </div>
    <p data-aos='fade-left' data-aos-duration='1500' className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
    <span><i class="ri-apps-2-line"></i></span>
    As a Frontend Web Developer, I specialize in creating engaging and responsive user interfaces that enhance the user experience. 
    My expertise lies in using modern frameworks and technologies such as React.js and Next.js to build dynamic web applications. 
    
</p>
    <div className='flex items-center gap-9 mt-14'>
    <span className='text-smallTextColor text-[15px] font-[600]'>Follow me:</span>
    <span>
    <a href='#instagram' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-fill"></i></a>
    </span>
    <span>
    <a href='#instagram' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-fill"></i></a>
    </span>
    <span>
    <a href='#instagram' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-linkedin-box-fill"></i></a>
    </span>
    <span>
    <a href='#instagram' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-facebook-circle-fill"></i></a>
    </span>
    </div>
    </div>
        {/* ================== hero left ends===========*/}
        {/* ================== hero image started===========*/}
        <div className='basis-1/2 mt-10 sm:mt-0'>
        <figure className=' flex items-center justify-center'>
        <img src={heroimg} alt=''/>
        </figure>
        </div>
        {/* ================== hero image ended===========*/}
        {/* ================== hero content start==========*/}

        <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end
        md:text-end'>
        <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
        <CountUp start={0} end={3} duration={2} suffix='+' />
        </h2>
        <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
        </div>
         <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
        <CountUp start={0} end={100} duration={2} suffix='%' />
        </h2>
        <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
        </div>
         <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
        <CountUp start={0} end={10} duration={2} suffix='+' />
        </h2>
        <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
        </div>
         <div className='mb-10'>
        <h2 className='text-headingColor font-[700] text-[32px]'>
        <CountUp start={0} end={8} duration={2} suffix='+' />
        </h2>
        <h4 className='text-headingColor font-[600] text-[18px]'>Projects Completed</h4>
        </div>
        </div>
        {/* ================== hero content ended===========*/}
        
    </div>
    </div>
    </section>
  )
}

export default Hero