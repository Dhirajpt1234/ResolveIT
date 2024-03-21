import React from 'react'
import Navbar from '../components/navbar';

const ContactUsPage=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
        </div>
    )
}

const ContactUs = () =>
{
   return <div className=' m-auto max-w-6xl bg-white p-4'>
    <h3 className="mt-6 text-4xl font-semibold text-[#08a3f2] text-center"> Contact Us</h3>
    <p class="mb-3 mt-4 text-2xl text-center  text-gray-600">
        If you have any Issue Please feel free to ask
    </p>

   <div class="flex items-center justify-center p-7">
     <div class="mx-auto w-full max-w-[550px]">
       <form  onSubmit={()=>{}}>
         <div class="mb-3">
           <label
             for="name"
             class="mb-2 block text-base font-medium text-[#07074D]"
           >
             Full Name
           </label>
           <input
             type="text"
             name="name"
             id="name"
             placeholder="Full Name"
             class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             />
         </div>
         <div class="mb-3">
           <label
             for="email"
             class="mb-2 block text-base font-medium text-[#07074D]"
             >
             Email Address
           </label>
           <input
             type="email"
             name="email"
             id="email"
             placeholder="example@domain.com"
             class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             />
         </div>
         <div class="mb-3">
           <label
             for="subject"
             class="mb-2 block text-base font-medium text-[#07074D]"
             >
             Subject
           </label>
           <input
             type="text"
             name="subject"
             id="subject"
             placeholder="Enter your subject"
             class="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             />
         </div>
         <div class="mb-3">
           <label
             for="message"
             class="mb-2 block text-base font-medium text-[#07074D]"
             >
             Message
           </label>
           <textarea
             rows="4"
             name="message"
             id="message"
             placeholder="Type your message"
             class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             ></textarea>
         </div>
         <div className='flex justify-center'>
           <button
             class="hover:shadow-form rounded-md bg-[#08a3f2] py-2 px-8 font-semibold text-white"
             type='submit'
             >
             Send
           </button>
         </div>
       </form>
     </div>
   </div>
</div>
}

export default ContactUsPage;