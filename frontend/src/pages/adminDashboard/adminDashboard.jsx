import React, { useEffect, useState } from 'react'
import "./adminDashboard.css"
import Navbar from '../../components/navbar'
import ProjectCard from '../../components/projectCard/projectCard'

const AdminDashboard = () => {


    const Complaints = [];

    const fetchComplaints = async () => {

        try {
            console.log("fetching .... ");
            const response = await fetch('http://localhost:8080/complaint/getComplaint/65d87501b351b7f71e3691c7');
            console.log("fetched .... ");

            if (!response.ok) {
                throw new Error('Network response was not ok');

            }
            const jsonData = await response.json();
            Complaints = jsonData;


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    fetchComplaints()


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="heading">
                <h2 >DashBoard</h2>
            </div>
            <div className='projectWrapper'>
                <h1 style={{ fontSize: "30px" }}>
                    Recent projects:
                </h1>
                <div className='project-list'>
                </div>


            </div>

            <div className='projectWrapper'>
                <h1 style={{ fontSize: "30px" }}>
                    Recent Queries:
                </h1>
                <div className='complaint-list'>
                    {
                        Complaints.map((complaint) => {
                            <ProjectCard complaint={complaint} />
                        })
                    }

                </div>


            </div>
        </div>
    )
}

export default AdminDashboard


