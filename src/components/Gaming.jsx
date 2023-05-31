import React from 'react'
import image2 from "../assets/image2.jpeg"

function Gaming() {
    return (
        <div>
            <div className='grid grid-cols-5 gap-8 p-2'>
                <div className='flex flex-col justify-center items-center  col-span-2 bg-orange-400 h-[100vh] '>
                    <p className='text-4xl text-white px-8 py-5 pb-8 '>
                    Experience the power of Gaming    
                    </p>
                    <button className='bg-white rounded-full h-10 w-32'>Gaming</button>
                <div className='h-full pt-12'><img src={image2} alt="" /></div>
                </div>
                
                <div className='col-span-3 bg-blue-800 h-[100vh]'>
                cxjnjkfv  
</div>
            </div>
</div>
)
}

export default Gaming