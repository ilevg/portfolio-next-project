import React from 'react'
import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
      <div className="flex flex-row gap-3 items-center">
        <div className='relative'>
          <Link href='/'>
            <Image
              src='/horseLogo.jpg'
              alt='horse logo'
              height={40}
              width={40}
              className='w-full h-full object-contain rounded-full'
            />
          </Link>

        </div>
        <Link href='/'>
          <h1 className='text-white text-[25px] font-semibold uppercase'>
            ILnytskyi
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {' '}
              Dev{' '}
            </span>
          </h1>
        </Link>
      </div>

      <div className="flex flex-row gap-5 mb-2">

        {Socials.map((social) => (
          <Link href='/' key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              height={28}
              width={28}
            />
          </Link>

        ))}
      </div>

    </div>

  )
}

export default Navbar
