import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-[100]">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex items-center justify-center">
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain"/>

            </Link>
            <CustomButton title="Sign In" btnType="button" containerStyle="text-primary-blue bg-white min-w-[130px] border !px-4 !py-2 rounded-md"/>
        </nav>
    </header>
  )
}

export default Navbar