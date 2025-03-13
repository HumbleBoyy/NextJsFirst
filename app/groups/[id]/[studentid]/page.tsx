"use client"

import { MainCardSecond } from '@/component/MainCardSecond'
import { getRequest } from '@/service/getRequest'
import { useParams } from 'next/navigation'
import React from 'react'

const SingleStudent = () => {
    const {id, studentid} = useParams()
    const singleStudent = getRequest(`/students/${studentid}`)
  return (
    <div className='flex justify-center items-center  mt-10'>
         <MainCardSecond item={singleStudent} groupId={id}/>
    </div>
  )
}

export default SingleStudent
