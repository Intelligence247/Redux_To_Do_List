import reactLogo from './assets/react.svg'
import './App.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrease, increase, reset, addtwo } from './Redux/Action'
import Top from './Component/Top'
import Bottom from './Component/Bottom'

function App() {
  // const distpatch = useDispatch()
  // const counter = useSelector((state)=> state)
  return (
    <div className="body">
      <main>
        <h1 className='title'>Create Task List</h1>
    <Top/>
    <Bottom/>
      </main>
    </div>
  )
}

export default App


// Task Name
// Start Time
// End Time
// Description


/*  <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={() => distpatch(increase())}>increase</button>
        <button onClick={() => distpatch(decrease())}>decrease</button>
        <button onClick={() => distpatch(reset())}>reset</button>
        <button onClick={() => distpatch(addtwo())}>AddTwo</button> */ 