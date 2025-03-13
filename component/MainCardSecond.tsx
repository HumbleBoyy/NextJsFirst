"use client"
import {StudentType } from "@/types/StudentType"
import { usePathname, useRouter } from "next/navigation"
import { FC } from "react"


export const MainCardSecond:FC<{item:StudentType, groupId:string}> = ({item,groupId}) =>  {
  const router = useRouter()
  const pathname = usePathname()


  const handleClick = (id:string):any => {
      if(pathname !== `/groups/${groupId}/${id}`){
         router.push(`/groups/${groupId}/${id}`)
         console.log(groupId)
      }else{
        router.push(`/groups`)
      }
  }

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

    <button onClick={()=> handleClick(item.id)} className={`${pathname === `/groups/${groupId}/${item.id}` ? "bg-red-500" : "bg-blue-500"} w-full rounded-md p-2 text-[20px] font-medium cursor-pointer`}>{pathname === `/groups/${groupId}/${item.id}` ? "Back To" : "More"}</button>
    </div>
)
}
