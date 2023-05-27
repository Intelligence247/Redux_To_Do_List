import React from 'react'

const Todo = ({
  taskName,
  startTime,
  endTime,
  description,
  handleDelete,
  handleComplete,
  Check,

  
  
}) => {
  
  return (
    <div className='mt-4 flex lg:w-[23rem] w-full
    
    min-h-[6rem] m-auto bg-orange px-2 py-1 rounded-lg'>
        <div className='flex flex-col gap-2 w-[70%] bg-white rounded-lg p-1'>
        <p className='font-bold w-full'>{taskName}</p>
        <p className='w-full text-[12px]'>{description}</p>
        <p className="time w-full"><span>{startTime}</span> - <span>{endTime}</span></p>
        </div>
    <div className='flex gap-4 flex-col w-[30%] items-center justify-between'>
        <div className='flex lg:gap-2 gap-1'>
        <input type="checkbox" checked={Check} name="" id=""/>
        <button className='lg:text-[16px]'
        onClick={handleComplete}
        >Complete</button>
        </div>
        <p>
        <img 
        src="/media/delete.png" 
        className='w-8 cursor-pointer bg-primary rounded-lg p-1 '
         alt=""
        onClick={handleDelete}
          />
         </p>
    </div>
    </div>
  )
}

export default Todo