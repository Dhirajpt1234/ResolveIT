import React from 'react'

import NavBar from '../components/navbar';
const AboutUsPage=()=>{
    return(
        <div>
            <NavBar></NavBar>
            <About></About>
        </div>
    )
}

const About = () =>
{
   return <section class="max-w-6xl m-auto bg-white p-4">
        <h2 class="mb-4 mt-4 text-4xl font-semibold text-[#08a3f2] text-center">
            About Us
            </h2>
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap flex-col lg:flex-row  items-center lg:items-start">
                <div class="px-4 mb-10 lg:w-3/5 lg:mb-0">
                    <img src="AboutImage.jpg" alt=""
                        class="object-cover w-full h-96 rounded-3xl"/>
                </div>
                <div class="w-full px-4 mb-10 lg:w-2/5 lg:mb-0 ">

                    <p class="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">
                    we're passionate about fashion and dedicated to bringing you the latest trends with a touch of unique style. Our journey began with a simple idea: to create a space where fashion enthusiasts like you can explore, discover, and express your individuality through clothing.
                    </p>
                    <p class="mb-3 text-base leading-7 text-gray-500 dark:text-gray-400">

                    our mission is simple – to inspire and empower you to embrace your unique style. We believe that fashion is a form of self-expression, and our curated collections reflect the diversity and beauty of individual tastes.
                    </p>
                    <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    We value the relationships we build with our customers. Your feedback, stories, and experiences matter to us. Feel free to connect with us through. We'd love to hear from you!
                    </p>

                    <a href="#"
                        class="px-4 py-3 text-[#08a3f2] transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 hover:bg-[#08a3f2] hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </section>

}

export default AboutUsPage;