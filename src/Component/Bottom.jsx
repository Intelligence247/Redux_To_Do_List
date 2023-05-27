import React from 'react'
import Todo from './Todo'
import { useState } from 'react'

const Bottom = () => {

  return (
    <div className='w-full px-4 overflow-y-auto overflow-x-hidden lg:h-[20rem] lg:max-[15rem]'>
        <Todo/>
        <Todo/>
       
    </div>
  )
}

export default Bottom

// https://creative-gelato-39395b.netlify.app




// npx create-react-app . --template redux


// https://www.bing.com/videos/search?q=How+to+create+a+task+list+usine+redux+%22Youtube%22&view=detail&mid=5573CC40467B71ABC8825573CC40467B71ABC882&FORM=VIRE