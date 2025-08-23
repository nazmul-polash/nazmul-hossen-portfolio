import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function AnimatedIcon({Icon, className, iconClassName}) {
  return (
     <div className={twMerge(`flex absolute`, className)}>
        <Icon  className={` ${iconClassName}`} size={50} />
    </div>
  )
}
