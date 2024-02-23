import React, { useState } from "react";
import "../welcome/welcome.css";

function WelcomePage() {
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userID = document.getElementById("userid").value;
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    console.log("Form submitted successfully!");
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

        <div className='welcomeform'>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-6'>
              <h4>Register Yourself !!! </h4>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='userID'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='userid'
                type='number'
                placeholder='Enter your User ID'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='fullName'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='fullName'
                type='text'
                placeholder='Enter your full name'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='fullName'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='address'
                type='text'
                placeholder='Enter your Address'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='role'></label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='role'
                value={role}
                onChange={handleRoleChange}>
                <option value='Select Role'>Select Role</option>
                <option value='citizen'>Citizen</option>
                <option value='admin'>Admin</option>
              </select>
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
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='confirmpassword'></label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='confirmpassword'
                type='password'
                placeholder='Confirm Password'
              />
            </div>

            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
