import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState("0")

  function klikAngka(num){
    if(count === "0"){
      setCount(num)
    }else{
      setCount(count + num)
    }
  }

  function buttonHasil(){
    const result = eval(count)
    console.log(result, " hasil")
    setCount(result)
  }

  function buttonDelete(){
    console.log("l")
    setCount("0")
  }

  return (
    <div className=" bg-slate-500">
      <div className='container flex mx-auto flex-col justify-center items-center min-h-screen'>
      <div className='p-2 py-10 justify-center items-center flex flex-col gap-10 w-[300px] rounded-md border-2 border-green-300'>
        <div className='border-2 border-green-400 w-full rounded-md p-2'>
          <h1 className='text-end text-3xl'>{count}</h1>
        </div>
        <div className='flex gap-6'>
          <button type='button' onClick={()=>klikAngka("1")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>1</button>
          <button type='button' onClick={()=>klikAngka("2")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>2</button>
          <button type='button' onClick={()=>klikAngka("3")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>3</button>
          <button type='button' onClick={()=>klikAngka("4")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>4</button>
        </div>
        <div className='flex gap-6'>
          <button type='button' onClick={()=>klikAngka("5")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>5</button>
          <button type='button' onClick={()=>klikAngka("6")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>6</button>
          <button type='button' onClick={()=>klikAngka("7")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>7</button>
          <button type='button' onClick={()=>klikAngka("8")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>8</button> 
        </div>
        <div className='flex gap-6'>
          <button type='button' onClick={()=>klikAngka("9")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>9</button>
          <button type='button' onClick={()=>klikAngka("0")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>0</button>
          <button type='button' onClick={()=>klikAngka("+")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>+</button>
          <button type='button' onClick={()=>klikAngka("*")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>*</button>
        </div>
        <div className='flex gap-6'>
        <button type='button' onClick={()=>klikAngka("/")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>/</button>
          <button type='button' onClick={()=>klikAngka("-")} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>-</button>
          <button type='button' onClick={buttonDelete} className='p-2 border-2 border-green-200 rounded-xl text-xl font-semibold'>Del</button>
          <button type='button' onClick={buttonHasil} className='p-4 border-2 border-green-200 rounded-xl text-xl font-semibold'>=</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
