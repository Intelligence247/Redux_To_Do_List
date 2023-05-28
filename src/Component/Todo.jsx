import React from 'react'

const Todo = ({
  taskName,
  startTime,
  endTime,
  description,
  handleDelete,
  handleComplete,
  Check,
  t,
  lineOver,
  first
  
}) => {
  
  return (
    <div className={`mt-4 flex lg:w-[23rem] w-full    
    min-h-[6rem] m-auto bg-orange px-2 py-1 rounded-lg ${first}`}>
        <div className='flex flex-col gap-2 w-[70%] bg-[#f6f9fb] rounded-lg p-1'>
        <p className={`font-bold w-full ${lineOver}`}>{taskName}</p>
        <p className={`w-full text-[15px] ${lineOver}`}>{description}</p>
        <p className={`time w-full text-base ${lineOver}`}><span>{startTime}</span> - <span>{endTime}</span></p>
        </div>
    <div className='flex gap-4 flex-col w-[30%] items-center justify-between'>
        <div className='flex lg:gap-2 gap-1'>
        <input type="checkbox" className='cursor-pointer' checked={Check} name="" id=""
        onClick={()=> handleComplete(t)}
        />
        <button
        type='submit'
         className={`lg:text-[16px] ${lineOver}`}
        onClick={()=>handleComplete(t)}
        >Complete</button>
        </div>
        <p>
        <img 
        src="/media/delete.png" 
        className={`w-8 cursor-pointer bg-primary rounded-lg p-1`}
         alt=""
        onClick={()=>handleDelete(t)}
          />
         </p>
    </div>
    </div>
  )
}

export default Todo
