"use client";
import React, { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react'
import { Practice } from './components/Practice';
import { createContext } from 'vm';

type counter = {
  showCount: () => void
}

const text = {
  name: "hukuryo",
  age: "25"
}

const TextContext = createContext(text);

export default function Home() {
  // useState
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    console.log("カウントアップ")
    setCount(count + 1);
  }; 
  
  // useEffect
  useEffect(() => {
    console.log("カウントアップ")
  }, [])

  const [counter, setCounter] = useState(0);

  const showCounter = useCallback(() => {
    alert('コールバック')
  }, [counter])

  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  const countUp = (count1: number) => {
    count1 * 2
  };
  const baiCount = useMemo(() => countUp(count1), [count1]);

  return (
    <TextContext.Provider value={text}>
      <>
        <div className='text-center mt-10'>
          <h2 className='font-bold'>useState、useEffect</h2>
          <p className='mb-10'>{count}</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 mb-10" onClick={onClickCountUp}>カウントアップ</button>
        </div>
        <div className='text-center mt-10'>
        <h2 className='font-bold'>useCallback</h2>
          <Practice showCount={showCounter}/>
        </div>
      </>
    </TextContext.Provider>
  )
}
