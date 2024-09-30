import { useState } from 'react'
import { Button } from './components/ui/button'
import Sidebar from './components/ui/Sidebar'
function App() {


  return (
    <div className='h-screen bg-black' >
      <div className='h-[90%] flex'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
