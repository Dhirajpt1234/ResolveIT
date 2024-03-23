import React from 'react'
import { useForm,SubmitHandler, } from 'react-hook-form'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { createComplaint } from '../../api/Api'

const ComplaintForm = () => {
    const {register,handleSubmit} = useForm();
    return (
        <form
            noValidate
            onSubmit={handleSubmit((data) =>
            {
                const obj = {
                    title:data.complaint_title,
                    desc:data.complaint_desc,
                    address:data.address,
                    city:data.city,
                    desc:data.complaint_desc,
                    state:data.region,
                    pin:data.pin
                }
                const formData = new FormData();
                formData.append("img",data.img);
                formData.append("pdf",data.pdf);
                formData.append("data",JSON.stringify(obj));
                createComplaint(formData);
            })}
        >
            <div className="space-y-12 p-4">
                <div className="border-b border-gray-900/10 pb-12">
                    <p className="mt-1 text-md font-bold leading-6 text-gray-600 text-center">
                        This information will be displayed publicly.
                    </p>
                    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                What complaint is about?
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('complaint_title', {required: 'Title is required',})}
                                        id="complaint_title"
                                        className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="complaint title...."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Desciption
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="complaint_desc"
                                    rows={3}
                                    {...register('complaint_desc', {required: 'Discription is required',})}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about problem you have faced.</p>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Photo(if any)
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="img-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="img-upload"
                                                type="file"
                                                {...register('img')}
                                                className="multiple sr-only"
                                                multiple/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                PDFs(if any)
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="pdf-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="pdf-upload"
                                                {...register('pdf')}
                                                type="file"
                                                className="multiple sr-only"
                                                multiple/>
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">pdfs up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...register('address', {required: 'Address is required',})}

                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...register('city', {required: 'City name is required',})}
                                    id="city"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...register('region', {required: 'Address is required',})}
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    {...register('pin', {required: 'Pincode is required',})}
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        We'll always let you know about progress. kindly track progress on dashboard.
                    </p>

                </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6 my-4">
                <button
                    type="button"
                    className="rounded-md px-4 bg-red-600 py-2 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-green-700 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-greem-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default ComplaintForm