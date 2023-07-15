"use client";
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react'

export default function Home() {
  
  // useState
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  }; 
  
    // useEffect
  useEffect(() => {
    console.log("カウントアップ")
  }, [])
  
  // useCallback
  const [count2, setCount2] = useState(0);
  const onClickCountUp2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count]); 


  return (
    <>
      <div className='text-center mt-10'>
        <h2 className='font-bold'>useState、useEffect</h2>
        <p className='mb-10'>{count}</p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 mb-10" onClick={onClickCountUp}>カウントアップ</button>
        {/* <h2 className='font-bold mb-10'>useCallback</h2>
        <p className='mb-10'>{count2}</p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 mb-10" onClick={onClickCountUp2}>カウントアップ</button>
        <hr /> */}
      </div>
    </>
  )
}
