"use client"
import {StudentType } from "@/types/StudentType"
import { useRouter } from "next/navigation"
import { FC } from "react"


export const MainCard:FC<{item:StudentType}> = ({item}) =>  {
  const router = useRouter()
  return (
    <div className='border-2 rounded-md  p-5 w-[400px]'>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-2xl font-medium leading-none">
          {item.groupName}
        </p>
        <p className="text-md text-muted-foreground">
          {item.stack}
        </p>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-xl font-medium leading-none">
          {item.name}
        </p>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-md font-medium leading-none">
          {item.phoneNumber}
        </p>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-md font-medium leading-none">
          {item.email}
        </p>
      </div>
    </div>
    <button onClick={()=> router.push(`/students/${item.id}`)} className="bg-blue-500 w-full rounded-md p-2 text-[20px] font-medium cursor-pointer">More</button>
</div>
)
}
