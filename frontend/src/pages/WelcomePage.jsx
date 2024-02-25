import React, { useState } from "react";
import {useForm} from "react-hook-form";
import Navbar from "../components/navbar";
import axios from 'axios';
import { useContext } from "react";
import {UserContext} from "../App"


function LoginForm()
{
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const {setUser} = useContext(UserContext)
  return (
    <div className="flex m-auto bg-white w-[400px] min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
            noValidate
            onSubmit={handleSubmit((data) =>
            {
              axios.post('http://localhost:8080/auth/login', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
                }).then(response => {
                  setUser({...response});
                  reset();
                }).catch(error => {
                   alert(error)
                });

            })}
            className="space-y-4"
          >
            <div>
                <label
                  htmlFor="email"
                  className="w-fit block text-sm font-medium leading-6 text-gray-900"
                  >
                  Email address
                </label>
              <div>
                <input
                  id="email"
                  {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'email not valid',
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#08a3f2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#08a3f2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
  )

}

function RegisterForm()
{
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  return (
    <div className="flex m-auto bg-white w-[400px] min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
            Register Yourself
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit((data) =>
            {
              axios.post('http://localhost:8080/auth/register', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
                }).then(response => {
                  reset();
                }).catch(error => {
                   alert(error)
                });
            }
            )}
            className="space-y-4"
          >
            <div>
                <label
                  htmlFor="name"
                  className="w-fit block text-sm font-medium leading-6 text-gray-900"
                  >
                  Name
                </label>
              <div>
                <input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
                <label
                  htmlFor="email"
                  className="w-fit block text-sm font-medium leading-6 text-gray-900"
                  >
                  Email address
                </label>
              <div>
                <input
                  id="email"
                  {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'email not valid',
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />

              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#08a3f2] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-row justify-between gap-4">
            <div>
                <label
                  htmlFor="state"
                  className="w-fit block text-sm font-medium leading-6 text-gray-900"
                  >
                  State
                </label>
              <div>
                <input
                  id="state"
                  {...register('state', {
                    required: 'state is required',
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
                <label
                  htmlFor="dist"
                  className="w-fit block text-sm font-medium leading-6 text-gray-900"
                  >
                  District
                </label>
              <div>
                <input
                  id="dist"
                  {...register('dist', {
                    required: 'District is required',
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#08a3f2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
  )

}

function WelcomePage()
{
  const [login,setLogin] = useState();
  return (
    <div className="max-w-7xl m-auto">
      <Navbar></Navbar>
      <div className="flex flex-row g-2 w-[100%] justify-around mt-[50px]">
        <div className='w-[40%]'>
          <img
            src='https://factech.co.in/fronts/images/svg/customer-complaint-management-system.svg '
            alt=''
            />
        </div>
        <div>
          <div className="flex flex-row justify-center gap-2">
            <button onClick={()=>{setLogin(1)}} className="w-[45%] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm focus:bg-[#08a3f2]"
            >Login</button>
            <button onClick={()=>{setLogin(0)}} className="w-[45%] justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm focus:bg-[#08a3f2]"
            >Register</button>
          </div>
          {
            (login===0) ? <RegisterForm></RegisterForm> : <LoginForm></LoginForm>
          }
        </div>

      </div>
    </div>
  );
}

export default WelcomePage;
