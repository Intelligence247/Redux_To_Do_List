import { useState } from 'react'
import Top from './Component/Top'
import Bottom from './Component/Bottom'
import Todo from './Component/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from './Redux/Action'
function App() {

  const distpatch = useDispatch()
  const todoArrList = useSelector((state)=> state)

  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')
  const [todo, setTodo] = useState([])

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

  const handleClick = () =>{
    console.log('Adding' +' '+ todo)

    distpatch(addTask({
      TaskName: input1,
      startTime: input2,
      endTime: input3,
      description: input4,
      id: Date.now(),
      delete: false,   
      isComplete: false,    
    }))
  }
  return (
    <div className="body">
      <main>
        <h1 className='title'>Create Task List</h1>
    <Top
    handleInput1={handleInput1}
    handleInput2={handleInput2}
    handleInput3={handleInput3}
    handleInput4={handleInput4}
    input1={input1}
    input2={input2}
    input3={input3}
    input4={input4}
    handleClick={handleClick}
    />
   <div className='w-full px-4 overflow-y-auto overflow-x-hidden lg:h-[20rem] lg:max-[15rem]'>
    {
          todoArrList.map((t)=>(        
        <Todo
        key={t.id}
        taskName={t.taskName}
        startTime={t.startTime}
        endTime={t.endTime}
        description = {t.description}
        Check={t.isComplete}
         />   
      ))} 
           
    </div>
      </main>
    </div>
  )
}

export default App


/*  <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={() => distpatch(increase())}>increase</button>
        <button onClick={() => distpatch(decrease())}>decrease</button>
        <button onClick={() => distpatch(reset())}>reset</button>
        <button onClick={() => distpatch(addtwo())}>AddTwo</button> */ 