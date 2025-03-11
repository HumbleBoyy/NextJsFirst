"use client"
import { MainCard } from '@/component/MainCard'
import { getRequest } from '@/service/getRequest'
import { StudentType } from '@/types/StudentType'

const Studnets = () => {
  const studentsList = getRequest("/students")
  return (
    <div className='flex flex-wrap justify-center gap-10 mt-10'>
      {studentsList.map((item:StudentType, index:number)=> <MainCard key={index} item={item}/>)}
   </div>
)
}
export default Studnets
