
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeRange, decrement, increment, reset } from './redux/Counterslice';
import { useState } from 'react';

function App() {
  const [range,setrange]=useState("")
 const counter = useSelector((state)=>state.counter.value)
 console.log(counter);

 
const dispatch = useDispatch()/* call action */
  

  return (
    <>
      <div className='d-flex justify-content-center align-items-center ' style={{height:'100vh',width:'100%',backgroundColor:'black'}}>
          <div className='bg-light p-5 rounded' style={{width:'500px'}}>

            <h1 className='text-primary text-center'>Counter Application</h1>
              <h1 className='text-center my-5'style={{fontSize:'70px'}}>{counter}</h1>
            
         <div className='d-flex justify-content-evenly'>
         <Button onClick={()=>dispatch(increment())} className='btn btn-warning '>Decrement</Button>
         <Button onClick={()=>dispatch(reset())}  className='btn btn-danger'>Reset</Button>
         <Button onClick={()=>dispatch(decrement())} className='btn btn-success'>Increment</Button>
         </div>
        <div className='d-flex mt-5'>
           <input type="text" placeholder='Enter the range' className='form-control' onChange={(e)=>setrange(e.target.value)} />
            <button className='btn btn-primary ms-3 'onClick={()=>dispatch(changeRange(Number(range)))}>click</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
