import React from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs'
const AmountCard = () => {
  return (
    <>
<div className='leading-3 h-20 flex-col flex justify-center px-4'>
    <h5>Good Morning, Dami oma</h5>
    <p>Here's what's happening with your board today.</p>
</div>

<div className=' h-52 flex items-center justify-center gap-5'>
{/* /////////////// A card /////////////// */}
<div className='bg-white w-72 h-40 rounded flex flex-col justify-between ml-2 p-2'>
<div className='flex items-center justify-between px-2 mt-2'>
    <p>TOTAL EARNING</p>
    <p className='text-green-500 flex items-center '><span><BsArrowUpRight /></span> +14.5%</p>
</div>

<h4 className='ml-3'>$ 443.05</h4>

<div className='flex justify-between h-10 '>
<p className='underline text-black mt-3 cursor-pointer'>view net earning</p>
<span className='bg-green-100 w-14 flex justify-center items-center text-2xl text-medium text-green-500 h-10 rounded'><AiOutlineDollarCircle /></span>
</div>
</div>
{/* ///////////////////////// */}

{/* /////////////// A card /////////////// */}
<div className='bg-white w-72 h-40 rounded flex flex-col justify-between ml-2 p-2'>
<div className='flex items-center justify-between px-2 mt-2'>
    <p>TOTAL EARNING</p>
    <p className='text-red-500 flex items-center'><span><BsArrowDownLeft /></span> +14.5%</p>
</div>

<h4 className='ml-3'>$ 443.05</h4>

<div className='flex justify-between h-10 '>
<p className='underline text-black mt-3 cursor-pointer'>view net earning</p>
<span className='bg-indigo-100 w-14 flex justify-center items-center text-2xl text-medium text-indigo-500 h-10 rounded'><AiOutlineDollarCircle /></span>
</div>
</div>
{/* ///////////////////////// */}

{/* /////////////// A card /////////////// */}
<div className='bg-white w-72 h-40 rounded flex flex-col justify-between ml-2 p-2'>
<div className='flex items-center justify-between px-2 mt-2'>
    <p>TOTAL EARNING</p>
    <p className='text-green-500 flex items-center '><span><BsArrowUpRight /></span> +14.5%</p>
</div>

<h4 className='ml-3'>$ 443.05</h4>

<div className='flex justify-between h-10 '>
<p className='underline text-black mt-3 cursor-pointer'>view net earning</p>
<span className='bg-yellow-100 w-14 flex justify-center items-center text-2xl text-medium text-yellow-500 h-10 rounded'><AiOutlineDollarCircle /></span>
</div>
</div>
{/* ///////////////////////// */}

{/* /////////////// A card /////////////// */}
<div className='bg-white w-72 h-40 rounded flex flex-col justify-between ml-2 p-2'>
<div className='flex items-center justify-between px-2 mt-2'>
    <p>TOTAL EARNING</p>
    <p className='text-green-500 flex items-center '><span><BsArrowUpRight /></span> +14.5%</p>
</div>

<h4 className='ml-3'>$ 443.05</h4>

<div className='flex justify-between h-10 '>
<p className='underline text-black mt-3 cursor-pointer'>view net earning</p>
<span className='bg-red-100 w-14 flex justify-center items-center text-2xl text-medium text-red-500 h-10 rounded'><AiOutlineDollarCircle /></span>
</div>
</div>
{/* ///////////////////////// */}
</div>
    </>
  )
}

export default AmountCard