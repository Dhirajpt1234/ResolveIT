import React, { useState } from "react";
import "../welcome/welcome.css";

function WelcomePage() {
  const [fullname,setFullname] = useState();
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const [state,setState] = useState();
  const [dist,setDist] = useState();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const data = {name:fullname,email:email,pass:pass,state:state,dist:dist}
    console.log(data);
  };

  return (
    <div className='welbody'>
      <div className='welcomeheading'>
        <div className='wlcomeimg'>
          <img
            src='https://factech.co.in/fronts/images/svg/customer-complaint-management-system.svg '
            alt=''
          />
        </div>

        <form className='welcomeform' onSubmit={(e)=>{handleSubmit(e)}}>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h4>Register Yourself !!! </h4>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='fullName'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='fullName'
                type='text'
                placeholder='Enter your full name'
                value={fullname}
                onChange={(e)=>{setFullname(e.target.value)}}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='text'
                placeholder='Enter your email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}

              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Enter your password'
                value={pass}
                onChange={(e)=>{setPass(e.target.value)}}

              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='state'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='state'
                type='state'
                placeholder='Enter your password'
                value={state}
                onChange={(e)=>{setState(e.target.value)}}

              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='dist'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='dist'
                type='dist'
                placeholder='enter state'
                onChange={(e)=>{setDist(e.target.value)}}
                value={dist}
              />
            </div>

            <input
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >

            </input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
