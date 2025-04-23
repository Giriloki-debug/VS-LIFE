import React, { useState } from 'react'
// import logo from './../assets/logo/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SerchBox from '../assets/common/SerchBox';
import PlansNavList from './PlansNavList';
import InsuranceNavList from './InsuranceNavList';

const Navbar = () => {

 const [toggle,setToggle]=useState(false)

 const handleToggle=()=>{
    setToggle(!toggle)
 }



  return (
    <div className='w-[100vw]  shadow-lg shadow-gray-400 z-[99]'>
        <nav className='w-[80vw] h-[80px] flex items-center justify-between px-[10px] mx-auto bg'>
            {/* logo */}
             <div>
                <img src={logo} alt='logo' className='h-[50px] '/>
             </div>
             {/* nav Items */}
             <div className='hidden lg:block'>
                <ul className='flex gap-10 text-lg font-semibold'>
                    <li><a href=''>Home</a></li>
                    <li className='insurance relative'>
                        <a href=''>Insurances</a>
                        <InsuranceNavList />
                        </li>
                    <li className='plans relative'>
                        <a href=''>Plans</a>
                        <PlansNavList />
                    </li>

                    <li><a href=''>About</a></li>
                    <li><a href=''>Contact </a></li>
                </ul>
             </div>
          
              {/* serch and Others */}

             <div className='flex items-center gap-5'>
                <button onClick={handleToggle} ><SearchIcon /></button>
                <button className=" text-semibold px-5 py-2  rounded-full  text-[#ffffff] bg-[#344CB7]"><PhoneInTalkIcon />Call Us</button>
             </div>
            
        </nav>
        <SerchBox handleToggle={handleToggle} toggle={toggle} />
    </div>
  )
}

export default Navbar