import React from 'react'
import "./ComplaintGeneration.css"
import Navbar from '../../components/navbar'
import ComplaintForm from '../../components/complaintForm'

const ComplaintGeneration = () => {
    return (
        <>
            <div className='container m-auto'>
                <Navbar />
                <div className='info-form' >
                    <h1 className='heading'>
                        Complaint Form
                    </h1>
                    <div className='cmpform'>

                        <ComplaintForm />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ComplaintGeneration