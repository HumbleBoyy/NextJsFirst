"use client"

import { MainCard } from '@/component/MainCard'
import { MainCardSecond } from '@/component/MainCardSecond'
import { getRequest } from '@/service/getRequest'
import { StudentType } from '@/types/StudentType'
import { useParams } from 'next/navigation'
import React from 'react'

const SingleGroup = () => {
  const { id } = useParams()
  const getStudents = getRequest(`/students?groupId=${id}`)

  return (
    <>
      <h2 className='mx-auto text-center font-bold text-[35px] mt-5'>Students of the Group</h2>
      <div className='flex justify-center items-center gap-5 mt-10'>
        {getStudents.map((item: StudentType, index: number) => <MainCardSecond key={index} item={item} groupId={id} />)}
      </div>
    </>
  )
}

export default SingleGroup
