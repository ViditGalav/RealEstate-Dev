import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

export default function CreateVote() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [textColor, setTextColor] = useState("");
  const [optionColor, setOptionColor] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [option, setOption] = useState("");

  return (
    <div className='text-gray-200 w-full min-h-[90vh] flex items-center justify-center max-lg:flex-col rounded-3xl lg:justify-evenly'>
      <div className='max-lg:w-11/12 w-[48%]  blue-glassmorphism p-4 max-sm:2'>
        <h1 className='text-3xl max-md:text-xl text-white'>Preview</h1>

        <div className='h-[0.5px] border-b-2 border-gray-400 my-4' />

        <div>
          {question && (
            <h1 className={`text-3xl max-md:text-xl text-gray-200 mb-5 ${textColor}`}>Question - {question}</h1>
          )}
        </div>

        <div>
          {option1 && (
            <p onClick={() => setOption("one")} className={`px-3 text-lg font-semibold py-2 text-gray-300 ${optionColor} ${option == "one" && selectColor} my-1 bg-opacity-40 rounded-lg cursor-pointer animate-fade-in duration-300 ease-linear`}>1. {option1}</p>
          )}

          {option2 && (
            <p onClick={() => setOption("two")} className={`px-3 text-lg font-semibold py-2 text-gray-300 ${optionColor} ${option == "two" && selectColor} my-1 bg-opacity-40 rounded-lg cursor-pointer animate-fade-in duration-300 ease-linear`}>2. {option2}</p>
          )}

          {option3 && (
            <p onClick={() => setOption("three")} className={`px-3 text-lg font-semibold py-2 text-gray-300 ${optionColor} ${option == "three" && selectColor} my-1 bg-opacity-40 rounded-lg cursor-pointer animate-fade-in duration-300 ease-linear`}>3. {option3}</p>
          )}

          {option4 && (
            <p onClick={() => setOption("four")} className={`px-3 text-lg font-semibold py-2 text-gray-300 ${optionColor} ${option == "four" && selectColor} my-1 bg-opacity-40 rounded-lg cursor-pointer animate-fade-in duration-300 ease-linear`}>4. {option4}</p>
          )}
        </div>
        {option1 && option2 && option3 && option4 && question && (
          <button className='flex items-center mr-2 rounded-md py-2 px-5 outline-none text-white cursor-pointer bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear justify-center w-2/3'>Submit <BsCheck2Circle color='yellow' className='ml-2' /></button>
        )}
      </div>

      <div className='max-lg:w-11/12 w-[48%] blue-glassmorphism p-4 max-sm:2 max-lg:my-2'>
        <h1 className='text-3xl max-md:text-xl text-white'>Set the question</h1>

        <div className='h-[0.5px] border-b-2 border-gray-400 my-4' />

        <input type='text' className='py-2 px-3 mb-5 rounded-md outline-none white-glassmorphism w-full' onChange={(e) => setQuestion(e.target.value)} placeholder='Enter question...' />


        <div className='flex flex-col'>
          <div className='flex flex-col my-2'>
            <input type='text' className='py-2 px-3 rounded-md outline-none white-glassmorphism w-full' onChange={(e) => setOption1(e.target.value)} placeholder='Input first option...' />
          </div>
          <div className='flex flex-col my-2'>
            <input type='text' className='py-2 px-3 rounded-md outline-none white-glassmorphism w-full' onChange={(e) => setOption2(e.target.value)} placeholder='Input second option...' />
          </div>
          <div className='flex flex-col my-2'>
            <input type='text' className='py-2 px-3 rounded-md outline-none white-glassmorphism w-full' onChange={(e) => setOption3(e.target.value)} placeholder='Input third option...' />
          </div>
          <div className='flex flex-col my-2'>
            <input type='text' className='py-2 px-3 rounded-md outline-none white-glassmorphism w-full' onChange={(e) => setOption4(e.target.value)} placeholder='Input fourth option...' />
          </div>
        </div>

        <div className='h-[0.5px] border-b-2 border-gray-400 my-4' />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold mb-2'>Set Colors</h1>
          <div className='flex justify-center'>
            <div className='flex flex-col '>
              <h1>Question</h1>
              <select name='textColor' onChange={(e) => setTextColor(e.target.value)} className='py-2 px-3 rounded-md outline-none bg-gray-200 w-full text-black cursor-pointer'>
                <option value='white'>White</option>
                <option value='text-gray-300'>Light Gray</option>
                <option value='text-yellow-300'>Yellow</option>
                <option value='text-yellow-200'>Light Yellow</option>
                <option value='text-pink-300'>Light Pink</option>
                <option value='text-red-300'>Red</option>
                <option value='text-orange-300'>Orange</option>
              </select>
            </div>

            <div className='flex flex-col mx-2'>
              <h1>Options</h1>
              <select name='optionColor' onChange={(e) => setOptionColor(e.target.value)} className='py-2 px-3 rounded-md outline-none bg-gray-200 w-full text-black cursor-pointer'>
                <option value='white'>White</option>
                <option value='text-gray-500'>Light Gray</option>
                <option value='text-yellow-500'>Yellow</option>
                <option value='text-black'>Black</option>
                <option value='text-pink-500'>Light Pink</option>
                <option value='text-red-500'>Red</option>
                <option value='text-orange-500'>Orange</option>
              </select>
            </div>
            <div className='flex flex-col '>
              <h1>Select</h1>
              <select name='textColor' onChange={(e) => setSelectColor(e.target.value)} className='py-2 px-3 rounded-md outline-none bg-gray-200 w-full text-black cursor-pointer'>
                <option value='white-glassmorphism'>White</option>
                <option value='bg-gray-100'>Light Gray</option>
                <option value='bg-yellow-100'>Yellow</option>
                <option value='bg-yellow-100'>Light Yellow</option>
                <option value='bg-pink-100'>Light Pink</option>
                <option value='bg-red-100'>Red</option>
                <option value='bg-orange-100'>Orange</option>
              </select>
            </div>
          </div>



          <div className='flex justify-evenly my-2'>
            <button className='flex items-center mr-2 rounded-md py-2 px-5 outline-none text-white cursor-pointer bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-linear justify-center w-2/3'>Done <BsCheck2Circle color='yellow' className='ml-2' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
