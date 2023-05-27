import React from 'react'
import InputC from './InputC'
import { useState } from 'react'
const Top = () => {
  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')

  const handleInput1 = (e) => {
    setinput1(e.target.value)
  }

  const handleInput2 = (e) =>{
    setinput2(e.target.value)
  }

  const handleInput3 = (e) =>{
    setinput3(e.target.value)
  }
  const handleInput4 = (e) =>{
    setinput4(e.target.value)
  }
  console.log(input1,input2,input3,input4)
  return (
    <div className='bg-primary px-4 flex flex-col gap-2 py-2 rounded-r-xl'> 
        <InputC
        placeholder={"Input Your Task"}
        Iheight={'h-8'}
        label={'Task Name'}
        handleInput={handleInput1}
        value={input1}
        />
        <div className="startend flex justify-between">
            <InputC
            label={'Start Time'}
            placeholder={'Input Start Time'}
            width={"w-[45%]"}
            Iheight={'h-8'}
            handleInput={handleInput2}
            value={input2}
            />
            <InputC 
            label={'End Time'}
            placeholder={'Input End Time'}
            Iheight={'h-8'}
            width={"w-[45%]"}
            handleInput={handleInput3}
            value={input3}
            />
        </div>
        <InputC
        label={'Description'}
        placeholder={'Enter Description'}
        Iheight={'h-[3rem]'}
        handleInput={handleInput4}
        value={input4}
        />
        <div className='w-full grid place-content-center'>
<button className='bg-orange w-[7rem] h-[2rem] grid place-items-center rounded-xl'>Create Tast</button>
</div>
<p className='errM text-red-500 text-center'>Input field must not be empty</p>
    </div>
  )
}

export default Top
