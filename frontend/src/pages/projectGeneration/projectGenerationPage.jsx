import React, { useContext } from 'react'

import Navbar from '../../components/navbar'
import ProjectGenForm from '../../components/projectGenForm'
import { UserContext } from '../../App'

const ProjectGenerationPage = () => {
    const {user} = useContext(UserContext)
    return (
        (user) ?
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
        : <Navigate to='/' replace={true}></Navigate>
    )
}

export default ProjectGenerationPage