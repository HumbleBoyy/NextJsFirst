"use client"
import React, { FC, ReactNode } from 'react'

const layout:FC<{children:ReactNode}> = ({children}) => {
  return (
   <> 
     {children}
   </>
  )
}

export default layout
