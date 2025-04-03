import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react"
import navBarLinks from '@/constants'
import {usePathname} from "next/navigation"
import Link from 'next/link'
import { cn } from '@/lib/utils'



export default function Navbar(){

    const pathname = usePathname();

    const [isOpen, setOpen ] = useState(false)
    
    const onToggled = () =>{
    
            setOpen(!isOpen)
    }
    
    return(


     <nav className='absolute bg-red-400 w-[1000px] flex items-center justify-center'>
        <ul>
            {navBarLinks.map((item) =>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (

                    <li key={item.label}>
                        <Link className={cn({'text-blue-700': isActive})} href={item.route}>{item.label}</Link>
                    </li>
                )
            })}
        </ul>
        
     </nav>

    )
}