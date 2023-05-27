import React from 'react'

const InputC = ({
    label,
    placeholder,
    width,
    Iheight,
    type,
    value,
    handleInput,

}) => {
  
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
        <label htmlFor="Task Name" className=''>{label}</label>
        <input type= {type} className={`flex bg-primaryblur border-none outline-none rounded-lg pl-2 ${Iheight}`} placeholder={placeholder}
        value={value}
        onChange={handleInput}
         />
    </div>
  )
}

export default InputC