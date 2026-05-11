import React from 'react'

const CustomHeading = ({title}:{title:String}) => {
  return (
    <h1 className='font-[harmond] text-4xl ' >
        {title}
    </h1>
  )
}

export default CustomHeading