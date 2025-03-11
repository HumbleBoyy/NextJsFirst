import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-slate-500 p-5'>
       <h1 className='text-[20px] font-bold'>StudyPro</h1>
       <nav className='flex items-center justify-between text-[18px] font-semibold gap-5'>
         <Link href={"/"}>Home</Link>
         <Link href={"/students"}>Students</Link>
         <Link href={"/groups"}>Groups</Link>
       </nav>
    </div>
  )
}

export default Header
