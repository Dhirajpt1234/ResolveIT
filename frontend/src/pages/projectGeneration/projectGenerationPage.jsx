import React from 'react'

import Navbar from '../../components/navbar'
import ComplaintForm from '../../components/complaintForm'
import ProjectGenForm from '../../components/projectGenForm'

const ProjectGenerationPage = () => {
    return (
        <div className='container m-auto'>
            <Navbar />
            <div className='info-form' >
                <h1 className='heading'>
                    Project Generation Form
                </h1>
                <div className='cmpform'>
                    <ProjectGenForm />
                </div>
            </div>
        </div>
    )
}

export default ProjectGenerationPage