
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../../App"
import { signIn } from "../../api/Api";

function LoginForm() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)


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
                    onSubmit={handleSubmit((data) => {
                            signIn(data)
                            .then(response => {
                                setUser({ ...response });
                                navigate('/dashboard', { replace: true });
                            })
                            .catch(error => {
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


export default LoginForm;