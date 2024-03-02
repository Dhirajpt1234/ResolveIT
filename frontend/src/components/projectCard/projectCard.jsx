import React from 'react'
import "./ProjectCard.css"
import LocationImage from "../../assets/location.png"

// title: { type: String, },
//   desc: { type: String},
//   state: {type: String},
//   district: {type: String},
//   status:{ type:String, default:"Pending"},
//   images : {type:[String]}

const ProjectCard = ({ complaint }) => {
    return (
        <div className='card'>
            <div className='headingCard'>
                <h1>{complaint.title} </h1>
            </div>

            <div className='locWrapper'>
                <img className='locImage' src={LocationImage} alt="#" />

                <div className="location">
                    {complaint.district}{", "} {complaint.state}
                </div>
            </div>

            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum saepe nesciunt deserunt commodi inventore fuga, ad ratione in aliquam!
            </span>


            <div className='buttons'>
                <button className='edit'>Edit</button>
                <button className='cancel'>Ok</button>
            </div>
        </div>
    )
}

export default ProjectCard