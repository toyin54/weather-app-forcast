"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'

import { useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import ThemeDropDown from './ThemeDropDown/ThemeDropDown'
import SearchBar from './SearchDialog/SearchBar'
import { useGlobalContext } from '@/app/context/globalContext'

export default function NavBar() {
  const router = useRouter();
  const { state } = useGlobalContext()

  const [location, setLocation] = useState<string>('')


  console.log(location)
  return (
    <div className='w-full py-4 flex items-center justify-between'>
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
      <SearchBar />
        <div className="btn-group flex items-center gap-2">
        
          <ThemeDropDown />
          <Button className='source-code flex items-center gap-2'
            onClick={() => {
              router.push("https://www.facebook.com/")
            }
            }
          >
            {<Github />}Source Code</Button>
        </div>
      </div>
    </div>
  )
}