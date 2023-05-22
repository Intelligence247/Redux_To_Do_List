import React from 'react'
import InputC from './InputC'

const Top = () => {
  return (
    <div className='bg-primary px-4 flex flex-col gap-4 py-8 rounded-r-xl'> 
        <InputC
        placeholder={"Input Your Task"}
        Iheight={'h-8'}
        label={'Task Name'}
        />
        <div className="startend flex justify-between">
            <InputC
            label={'Start Time'}
            placeholder={'Input Start Time'}
            width={"w-[45%]"}
            Iheight={'h-8'}
            />
            <InputC 
            label={'End Time'}
            placeholder={'Input End Time'}
            Iheight={'h-8'}
            width={"w-[45%]"}
            />
        </div>
        <InputC
        label={'Description'}
        placeholder={'Enter Description'}
        Iheight={'h-[3rem]'}
        />
        <div className='w-full grid place-content-center'>
<button className='bg-orange w-[7rem] h-[2rem] grid place-items-center rounded-xl'>Create Tast</button>
</div>

    </div>
  )
}

export default Top