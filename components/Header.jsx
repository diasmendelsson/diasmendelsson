'use client'
import Image from "next/image"
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react"
import Navbar from "./Navbar"

export default function Header() {

    const [isOpen, setOpen ] = useState(false)

    const onToggled = () =>{

        setOpen(!isOpen)
    }

    return (

    <header className="h-14 items-center px-4 py-12 flex justify-between">
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-700"></div>
                <h1 className="text-2xl  font-bold">Mendelsson Dias</h1>
            </div>
            

            <Image className="hidden" src="/barra.svg" alt="icone de barra" width={20} height={10} />

            <p className="text-xl font-extralight uppercase tracking-wide">Desenvolvedor Web</p>
        </div>

        <Navbar />
    </header>
    )
}