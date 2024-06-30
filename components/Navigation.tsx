"use client"

import { NavLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Transition from './Transition'

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState(path)

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true)
            setPrevPath(path)
        }
    }, [path, prevPath])

    useEffect(() => {
        if (isRouting) {
            const timeout = setTimeout(() => {
                setIsRouting(false)
            }, 1200) // Adjust the timeout duration based on your animation length

            return () => clearTimeout(timeout)
        }
    }, [isRouting])

    console.log(path)
    console.log(prevPath)

    return (
        <>
            <Transition />
            {isRouting && <Transition />}
            <div className='left-[20%] absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[130px] rounded-full flex justify-between items-center border border-white bg-black py-7 px-7'>

                {NavLinks.map((nav) => (
                    <Link
                        key={nav.name}
                        href={nav.link}
                        className='mb-16 '
                        onClick={() => setIsRouting(true)}
                    >
                        <nav.icon className={`w-[24px] h-[24px] ${path === nav.link ? 'text-purple-800' : 'text-white'}`} />
                    </Link>
                ))}
            </div>
        </>

    )
}

export default Navigation
