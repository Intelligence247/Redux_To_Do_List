import { useState } from 'react'
import Top from './Component/Top'
import Bottom from './Component/Bottom'
import Todo from './Component/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, completeTask } from './Redux/Action'

function App() {
  const distpatch = useDispatch()
  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')
  const [todos, setTodos] = useState([])
  const [errM, seterrM] = useState('')


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
 const todoArrList = useSelector((state)=> state)

  const handleClick = (e) =>{
    e.preventDefault();
    if(input1.length!==0 && input2.length!==0 && input3.length !== 0 && input4.length !== 0){
    const todoObj= {
        taskName: input1,
        startTime: input2,
        endTime: input3,
        description: input4,
        id: Date.now(),
      delete: true,   
      isComplete: false,    
    }
// setinput1("")
// setinput2("")
// setinput3("")
// setinput4("")
  distpatch(addTask(todoObj))
seterrM('')
  }else{
seterrM("All input field must not be empty")
  }
}
  const handleComplete =(t)=>{
    distpatch(completeTask(t))
  }
  const handleDelete = (t) =>{
distpatch(deleteTask(t))
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
    Err={errM}
    />
   <div className='w-full px-4 overflow-y-auto overflow-x-hidden lg:h-[20rem] lg:max-[15rem]'>
    {todoArrList.map((t,i)=>(        
        <Todo
        key={t.id}
        taskName={t.taskName}
        startTime={t.startTime}
        t={t.id}
        endTime={t.endTime}
        description = {t.description}
        Check={t.isComplete}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        lineOver= {t.isComplete?"line-through":""}
        first={i==0?'hidden':'block'}
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