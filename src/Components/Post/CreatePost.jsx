import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import { GrEmoji } from "react-icons/gr"
import { GoLocation } from "react-icons/go"
import "./CreatePost.css"
const CreatePost = ({onClose,isOpen}) => {
    const [isDragOver,setIsDragover]=useState(false);
    const [file,setFile]=useState();
    const [caption,setCaption]=useState("");
    const handleDrop=(event)=>{
        event.preventDefault();
        const droppedfile=event.dataTransfer.files[0];
    if(droppedfile.type.startsWith("image/")|| droppedfile.type.startsWith("video/")){
        setFile(droppedfile)
    }
    }
  
    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragover(true)
    }
    const handleDragLeave=()=>{
        setIsDragover(false)
    }
    const handleOnChange=(e)=>{
            const file=e.target.files[0];
            if(file&&(file.type.startsWith("image/")||file.type.startsWith("video/"))){
                setFile(file);
                console.log("file :",file)
            }
            else{
                setFile(null);
                alert("please select an image or video")
            }
    }
    const handleCaption=(e)=>{
        setCaption(e.target.value)
    }
  return (
    <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
         <div className='flex justify-between py-1 px-10 items-center'>
            <p>Create New Post</p>
            <Button variant={"ghost"} size={"sm"} color={"blue"}>
                Share 
            </Button>
         </div>
          <hr />

          <ModalBody>
           <div className='h-[70vh] justify-between flex'>
            <div className='w-[50%]'>
              {!file &&  <div onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className='drag-drop h-full'>

                    <div>
                        <FaPhotoVideo className='text-3xl'/>
                        <p>Drag Photos or Videos here</p>
                    </div>
                    <label htmlFor="file-upload" className='custom-file-upload'>Select from Computer</label>
                    <input type="file" id='file-upload' accept='image/*,video/*' onChange={handleOnChange} />
                </div>}
               {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="" />}
               
            </div>
            <div className='w-[1px] border h-full'></div>
            <div className='w-[50%]'>
                <div className='flex items-center px-2'>

                    <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2022/05/21/09/30/cat-7211080_640.jpg" alt="" />
                <p className='font-semibold ml-4'>username</p>
                </div>
                <div className='px-2'> 
                    <textarea placeholder='write a caption' name="caption" className='captioninput' id="" rows="8" onChange={handleCaption}></textarea>
                </div>
                <div className='flex justify-between px-2'>
                    <GrEmoji/>
                    <p className='opacity-70'>{caption?.length}/2,200</p>
                </div>
                <hr />
                <div className='flex p-2 justify-between items-center'>
                    <input className='LocationInput' type="text" placeholder='Location' name="location" />
                    <GoLocation/>
                </div>
                <hr />
            </div>
           </div>
          </ModalBody>
         
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePost