"use client"
import { GroupType } from "@/types/GroupType"
import { useRouter } from "next/navigation"
import { FC } from "react"


export const SecondaryCard:FC<{item:GroupType}> = ({item}) =>  {
  const router = useRouter()
  return (
    <div className='border-2 rounded-md  p-5 w-[400px]'>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-2xl font-medium leading-none">
          {item.mainTeacher}
        </p>
        <p className="text-md text-muted-foreground">
          Main Teacher
        </p>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-xl font-medium leading-none">
          {item.name}
        </p>
        <p className="text-md font-medium leading-none">
          Group
        </p>
      </div>
    </div>
    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      <div className="space-y-1">
        <p className="text-xl font-medium leading-none">
          Lesson Time
        </p>
        <p className="text-md font-medium leading-none">
          {item.lessonTime}
        </p>
      </div>
    </div>
    <button onClick={()=> router.push(`/groups/${item.id}`)} className="bg-blue-500 w-full rounded-md p-2 text-[20px] font-medium cursor-pointer">More</button>
</div>
)
}
