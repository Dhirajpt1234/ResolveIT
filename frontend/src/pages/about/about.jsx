import React from 'react'

import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
const AboutUsPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <About></About>
        </div>
    )
}

const About = () => {
    const navigate = useNavigate();
    return <section className="max-w-6xl m-auto bg-white p-4">
        <h2 className="mb-4 mt-4 text-4xl font-semibold text-[#08a3f2] text-center">
            About Us
        </h2>
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap flex-col lg:flex-row  items-center lg:items-start">
                <div className="px-4 mb-10 lg:w-2/5 lg:mb-0">
                    <img src="About_Image.jpg" alt=""
                        className="object-cover w-full h-96 rounded-3xl" />
                </div>
                <div className="w-full px-4 mb-10 lg:w-3/5 lg:mb-0 ">


                    {/* Welcome to [Your Website Name]!

                At [Your Website Name], we are dedicated to fostering transparency and accountability in government projects by providing a platform for citizens to voice their concerns and raise complaints. Our mission is to empower citizens to actively participate in the governance process and drive positive change in their communities.

                Who We Are:
                    D:\Sumit\Hackforge\Dhirajpt1234-Hackforge-codeLegits-1B\frontend\public
                What We Do:
                Our platform allows citizens to submit complaints and raise issues related to government projects in their area. Whether it's road construction, public infrastructure, environmental conservation, or any other government initiative, we provide a channel for citizens to voice their concerns and demand action.

                How It Works:
                Submitting a complaint on [Your Website Name] is easy and straightforward. Simply navigate to the "Submit a Complaint" section, fill out the form with details about the project and your concerns, and submit it. Our team will review the complaint and take appropriate action, working with relevant authorities to address the issue. */}

                    <h3>Welcome to ComplaintDesk</h3>
                    <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
                        At ComplaintDesk, we are dedicated to fostering transparency and accountability in government projects by providing a platform for citizens to voice their concerns and raise complaints. Our mission is to empower citizens to actively participate in the governance process and drive positive change in their communities.
                    </p>

                    <h3>Who We Are</h3>
                    <p className="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
                        ComplaintDesk is a community-driven initiative founded on the principles of transparency, accountability, and civic engagement. We believe that every citizen has the right to hold their government accountable and ensure that public projects are carried out efficiently and effectively for the benefit of all.
                    </p>
                    <h3>What We Do</h3>
                    <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                        Our platform allows citizens to submit complaints and raise issues related to government projects in their area. Whether it's road construction, public infrastructure, environmental conservation, or any other government initiative, we provide a channel for citizens to voice their concerns and demand action.
                    </p>

                    <button
                        className="px-4 py-3 text-[#08a3f2] transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 hover:bg-[#08a3f2] hover:text-white"
                        onClick={() => { navigate('/contact', { replace: true }); }}
                    >Contact</button>
                </div>
            </div>
        </div>
    </section>

}

export default AboutUsPage;