import React from 'react'

export type MenuItem = {
  name: string
  type: string 
  price: number
}

type MenuCategory = {
  [category: string]: MenuItem[]
}


const MenuList = ({List}:{List:MenuCategory}) => {
    return (
        <div className='columns-1 md:columns-2 lg:columns-2 my-10 py-10 md:px-20' >
            {Object.keys(List).map((category, i) => {
                const key = category as keyof typeof List
                return (
                    <div className=' break-inside-avoid h-fit mb-10 px-10 md:px-20' key={key} >
                        <h1 className='font-[harmond] text-3xl md:text-5xl mb-10' >{category}</h1>
                        {
                            List[key].map((drink, index) => {
                                return (
                                    <div key={index} className='gap-10 my-4 h-auto flex items-center justify-between ' >
                                        <div className='min-w-1/2' >
                                            <h1 className='font-[harmond] text-2xl font-semibold tracking text-[#DCCA87] ' >{drink.name}</h1>
                                            <h5 className='text-[#AAAAAA] text-lg' >{drink.type}</h5>
                                        </div>
                                        <hr className='w-40 mx-auto relative' />
                                        <h5 className='text-2xl w-10 text-end ' >${drink.price}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
            }
        </div>
    )
}

export default MenuList