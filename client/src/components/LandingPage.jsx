import React from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import logo from '../assets/blue-logo-gmaya.png';
import { Loader } from './';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input 
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
)

const LandingPage = () => {
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || keyword || !message) return;

    // sendTransaction();
  }

  return (
    <div className="flex w-full justify-center items-start min-h-screen">
      <div className="flex xl:flex-row flex-col items-start justify-between px-4 mt-10 h-s">
        {/* Left Layout */}
        <div className="flex p-0 md:p-5 flex-col flex-1 items-center justify-start">
          <div className="p-3 justify-end items-start flex-col rounded-xl w-96 h-52 md:w-[576px] md:h-80  my-5 card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <img src={logo} alt="logo" className="w-24 md:w-32 drop-shadow-lg" />
                <BsInfoCircle fontSize={21} color="#000" className="m-2 md:m-5"/>
              </div>
              <div>
                <p className="text-blue-800 font-semibold text-sm md:text-xl pl-1 drop-shadow-lg">
                  0x2B7f6d338aBCA025F356031b908eFA1677eeD57c
                </p>
                <p className="text-blue-800 flex flex-row justify-start items-center font-semibold text-lg md:text-2xl mt-1 drop-shadow-sm">
                  <SiEthereum fontSize={22} className="mr-1 text-blue-800 drop-shadow-sm"/>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Layout */}
        <div className="flex p-0 md:p-5 mt-5 flex-col flex-1 items-center justify-start">
          <div className="p-5 w-96 md:w-[576px] flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={true} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={true} />
            <Input placeholder="Keyword" name="keyword" type="text" handleChange={true} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={true} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : ( 
              <button
                type="button"
                onClick={handleSubmit} 
                className="text-amber-200 font-semibold w-full mt-2 border-[2px] p-2 border-[#bfd30d] hover:bg-[#bfd30d] hover:text-gray-900 rounded-full cursor-pointer">
                Send Now
              </button>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage