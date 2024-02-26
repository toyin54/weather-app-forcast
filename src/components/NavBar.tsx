"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'

import { useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import ThemeDropDown from './ThemeDropDown/ThemeDropDown'
import SearchBar from './SearchDialog/SearchBar'

type Props = {}

export default function NavBar({ }: Props) {
  const router = useRouter()
  const [location, setLocation] = useState<string>('')

  function locationHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value)
  }
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