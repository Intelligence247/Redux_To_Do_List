import React from 'react'
import Todo from './Todo'

const Bottom = () => {
  return (
    <div className='w-full px-4 overflow-y-auto overflow-x-hidden h-[15rem]'>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
    </div>
  )
}

export default Bottom