import React from 'react'

const InputC = ({
    label,
    placeholder,
    width,
    Iheight,
    type
}) => {
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
        <label htmlFor="Task Name" className='lg:text-[1.2rem]'>{label}</label>
        <input type={type} className={`flex bg-primaryblur border-none outline-none rounded-lg pl-2 ${Iheight}`} placeholder={placeholder} />
    </div>
  )
}

export default InputC