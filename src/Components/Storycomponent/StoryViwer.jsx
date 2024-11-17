import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Progressbar from './Progressbar'
const StoryViewerContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:black;
`

const StoryImage=styled.img`
max-hieght:90vh;
object-fit:contain;

`
const StoryViwer = ({stories}) => {
    
    const[currentstoryindex,setcurrentstoryindex]=useState(0);
 

    const[activeIndex,setActiveIndex]=useState(0);
const handleNextStory=()=>{
    if(currentstoryindex<stories.length-1){
        setcurrentstoryindex(currentstoryindex+1)
        setActiveIndex(activeIndex+1)
    }
    else if(currentstoryindex===stories.length-1){
        setcurrentstoryindex(0);
        setActiveIndex(0);
    }
}
useEffect(()=>{
const interval=setInterval(()=>{handleNextStory()},2000)
return()=>clearInterval(interval);
},[currentstoryindex])
    return (
    <div>
            <div className='relative w-full'>
                <StoryViewerContainer>
                    <StoryImage src={stories?.[currentstoryindex].image} />
                        <div className='absolute top-0 flex w-full'>
                            {stories.map((item,index)=><Progressbar key={index} duration={2000} index={index} activeIndex={activeIndex} />)}
                        </div>
                </StoryViewerContainer>
            </div>
    </div>
  )
}

export default StoryViwer