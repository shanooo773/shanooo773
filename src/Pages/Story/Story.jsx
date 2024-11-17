import React from 'react'
import StoryViwer from '../../Components/Storycomponent/StoryViwer'

const Story = () => {
    const story=[
        {
            image:"https://images.pexels.com/photos/29258518/pexels-photo-29258518/free-photo-of-beautiful-rocky-lagoon-in-lanzarote-spain.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },{
            image:"https://images.pexels.com/photos/8402676/pexels-photo-8402676.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },{
            image:"https://images.pexels.com/photos/29414630/pexels-photo-29414630/free-photo-of-bustling-galata-bridge-overlooking-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },{
            image:"https://images.pexels.com/photos/28999324/pexels-photo-28999324/free-photo-of-vintage-red-tram-on-cobbled-prague-street.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },{
            image:"https://images.pexels.com/photos/29276458/pexels-photo-29276458/free-photo-of-colorful-wooden-houses-in-bergen-norway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
        
        

    ]
  return (
    <div>
        <StoryViwer stories={story}/>
    </div>
  )
}

export default Story