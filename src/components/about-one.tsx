import React from 'react'
import { FiAperture, FiShield } from 'react-icons/fi'

// Define a type for icons that accepts className
type IconComponent = React.ComponentType<{ className?: string }>

interface Data {
  icon: IconComponent
  title: string
  desc: string
}

export default function AboutOne() {
  const data: Data[] = [
    {
      icon: FiShield as IconComponent, // Explicit type assertion
      title: 'Enhance Security',
      desc: 'There are many variations of passages of Lorem Ipsum available',
    },
    {
      icon: FiAperture as IconComponent, // Explicit type assertion
      title: 'High Performance',
      desc: 'There are many variations of passages of Lorem Ipsum available',
    },
  ]

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6'>
      {data.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className='group flex relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-[#0e2aff] dark:hover:bg-[#0e2aff] duration-500'
          >
            <span className='dark:text-[#02EAFF] text-[#0e2aff] group-hover:text-white text-5xl font-semibold duration-500'>
              <Icon className='size-8 mt-2' />
            </span>
            <div className='flex-1 ms-3'>
              <h5 className='group-hover:text-white text-lg font-semibold duration-500'>
                {item.title}
              </h5>
              <p className='text-slate-400 group-hover:text-white/50 duration-500 mt-2'>
                {item.desc}
              </p>
            </div>
            <div className='absolute start-1 top-5 text-slate-900/[0.02] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.1] duration-500'>
              <Icon className='size-24' />
            </div>
          </div>
        )
      })}
    </div>
  )
}
