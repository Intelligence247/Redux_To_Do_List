import React from 'react'
import Todo from './Todo'

const Bottom = () => {
  return (
    <div className='w-full px-4 overflow-y-auto overflow-x-hidden lg:h-[20rem] lg:max-[15rem]'>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
    </div>
  )
}

export default Bottom

// https://creative-gelato-39395b.netlify.app




// npx create-react-app . --template redux