import React from 'react'
import InputC from './InputC'
import { useState } from 'react'
const Top = ({
  handleInput1,input1,
  handleInput2,input2,
  handleInput3, input3,
  handleInput4, input4,
  handleClick,
}) => {

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
<button className='bg-orange w-[7rem] h-[2rem] grid place-items-center rounded-xl'
onClick={handleClick}
>Create Tast</button>
</div>
<p className='errM text-red-500 text-center'>Input field must not be empty</p>
    </div>
  )
}

export default Top
