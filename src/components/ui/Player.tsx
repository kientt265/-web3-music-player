import React, { useContext } from 'react'
import { songsData } from '../../assets/assets'
import { assets } from '../../assets/assets'
import { PlayerContext } from '@/context/PlayerContext'
const Player = () => {

    const {seekBar, seekBg, playStatus, play, pause} = useContext(PlayerContext)
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
                <img onClick={play} src= {assets.play_icon} className='w-4 cursor-pointer'/>
                <img onClick={pause} src= {assets.pause_icon} className='w-4 cursor-pointer'/>
                <img  src= {assets.next_icon} className='w-4 cursor-pointer'/>
                <img src= {assets.loop_icon} className='w-4 cursor-pointer'/>
            </div>
            <div className ='flex items-center gap-5'>
                <p>1:06</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 round-full cursor-pointer'>
                    <hr ref={seekBar}  className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.play_icon}></img>
            <img className='w-4' src={assets.mic_icon}></img>
            <img className='w-4' src={assets.queue_icon}></img>
            <img className='w-4' src={assets.speaker_icon}></img>
            <img className='w-4' src={assets.volume_icon}></img>
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img className='w-4' src={assets.mini_player_icon}></img>
            <img className='w-4' src={assets.zoom_icon}></img>
        </div>
    </div>

  )
}

export default Player