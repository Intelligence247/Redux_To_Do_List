import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset, addtwo } from './Redux/Action'
import Top from './Component/Top'
import Bottom from './Component/Bottom'

function App() {
  const distpatch = useDispatch()
  const counter = useSelector((state)=> state)
  return (
    <div className="body">
      <main>
        <h1 className='title'>Create Task List</h1>
    <Top/>
    <Bottom/>
      </main>
    </div>
  )
}

export default App


// Task Name
// Start Time
// End Time
// Description

