import React from 'react'
import { songsData } from '../../assets/assets'
import { assets } from '../../assets/assets'
const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4  '>
        <div className='hidden lg:flex items-center gap-4'>
            <img src ={songsData[0].image} className='w-12'/>
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0, 12)}</p>
            </div>
        </div>    
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img src= {assets.shuffle_icon} className='w-4 cursor-pointer'/>
                <img src= {assets.prev_icon} className='w-4 cursor-pointer'/>
                <img src= {assets.play_icon} className='w-4 cursor-pointer'/>
                <img src= {assets.next_icon} className='w-4 cursor-pointer'/>
                <img src= {assets.loop_icon} className='w-4 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Player