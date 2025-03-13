"use client"
import { MainCard } from '@/component/MainCard'
import { getRequest } from '@/service/getRequest'
import { StudentType } from '@/types/StudentType'

const Studnets = () => {
  const studentsList = getRequest("/students")
  return (
   <>
   <h2 className='mx-auto text-center font-bold text-[35px] mt-5'>Students</h2>
    <div className='flex flex-wrap justify-center gap-10 mt-10'>
      {studentsList.map((item:StudentType, index:number)=> <MainCard key={index} item={item}/>)}
   </div>
   </>
)
}
export default Studnets
