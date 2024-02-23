import React from 'react'
import "./adminDashboard.css"
import Navbar from '../../components/navbar'
import ProjectCard from '../../components/projectCard/projectCard'

const AdminDashboard = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="heading">
                <h2 >DashBoard</h2>
            </div>
            <div className='projectWrapper'>
                <h1 style={{fontSize:"30px"}}>
                    Recent projects:
                </h1>
                <div className='project-list'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>


            </div>

            <div className='projectWrapper'>
                <h1 style={{fontSize:"30px"}}>
                    Recent Queries:
                </h1>
                <div className='complaint-list'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

                
            </div>
        </div>
    )
}

export default AdminDashboard