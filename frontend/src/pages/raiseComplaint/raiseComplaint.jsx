import React, { useContext } from 'react'
import Navbar from '../../components/navbar/navbar'
import ComplaintForm from '../../components/complaintForm/complaintForm'
import { UserContext } from '../../App'
import { Navigate } from 'react-router-dom'

export default function RaiseComplaintPage()
{
    const {user} = useContext(UserContext);
    return (
        (user) ?
        <div className='max-w-7xl m-auto'>
            <Navbar></Navbar>
            <div>
                <h1 className='text-3xl font-bold text-gray-600 text-center mt-4 mb-1'>Complaint Form</h1>
                <ComplaintForm></ComplaintForm>
            </div>
        </div>
        : <Navigate to='/' replace={true}></Navigate>
    )
}