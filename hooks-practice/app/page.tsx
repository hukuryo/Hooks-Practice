"use client";
import React, { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react'
import { Practice } from './components/Practice';
import { createContext } from 'vm';

type counter = {
  showCount: () => void
}



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
  
  
  type text = {
    name: string;
    age: number;
  }
  
  
  return (
    <>
      <Practice name={"hukuryo"} age={25}/>
    </>
  )
}
