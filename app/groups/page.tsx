"use client"
import { SecondaryCard } from '@/component/Secondary';
import { getRequest } from '@/service/getRequest'
import { GroupType } from '@/types/GroupType';
import React from 'react'

const Groups = () => {
  const groupsList = getRequest("/groups");
  console.log(groupsList)
  return (
    <div className='flex flex-wrap justify-center gap-10 mt-10'>
       {groupsList.map((item:GroupType, index:number)=>  <SecondaryCard key={index} item={item}/>)}
    </div>
  )
}

export default Groups
