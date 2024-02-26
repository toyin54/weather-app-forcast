'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
export default function SearchBar() {
  const [location, setLocation] = useState<string>('')

  function locationHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value)
  }
  return (
    <div className='search-btn'>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className='border inline-flex items-center justify-center text-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-red-100 ease-in-out duration-200 dark:border-white border-black'
          >
            <p className='text-sm text-muted-foreground'>Search Here..</p>
            <div className="command dark:bg-[#262626] bg-slate-200 dark:border-white border-black py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
              <Github />
              <span className='text-[9px]'>F</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className= 'p-0'>
            <Command className='rounded-lg border shadow-white '>
             <CommandInput 
             placeholder='Type in a command or search ...'/>
             <ul className='px-3 pb-2'>
              <p className='p-2 text-sm text-muted-foreground'>Suggestions</p>
             </ul>
            </Command>
          </DialogContent>
      </Dialog>
    </div>
  )
}
