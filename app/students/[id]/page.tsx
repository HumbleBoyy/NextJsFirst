"use client"

import { MainCard } from '@/component/MainCard'
import { getRequest } from '@/service/getRequest'
import { useParams } from 'next/navigation'
import React from 'react'

const StudentSingle = () => {
    const params:Record<string, string | string[]> | null = useParams()
    const singleData = getRequest(`/students/${params?.id}`)
    
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <MainCard item={singleData}/>
    </div>
  )
}

export default StudentSingle
