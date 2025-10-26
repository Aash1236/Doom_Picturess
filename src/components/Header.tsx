"use client";

import React,{useState} from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'
import { navItems } from '@/data/data'
 
const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const pathname = usePathname()
  return (
    <header className='border-b border-neutral-900'>
        <div className="container flex items-center justify-between py-5 lg:pb-0">
            {/* Logo */}
            <Link href="/" className='text-3xl font-medium uppercase'>Doom Pictures</Link>
            {/* mobile menu */}
            <nav className={`navbar ${isOpen ? "active" : ""}`}>
                {/* wrapper */}
                <div className="flex justify-between  items-center mb-8">
                    <h3 className='font-medium text-3xl uppercase'>Doom Pictures</h3>
                    <button className="border w-[50px] aspect-square rounded-full flex items-center justify-center border-neutral-800 hover:bg-neutral-900 transition-colors"
                    onClick={handleClick}>
                      <RiCloseLine size={30}/>
                    </button>
                </div>

                {/* nav list */}
                <ul className="grid">
                  {navItems.map((item) => (
                    <li key={item.id} className='border-b border-neutral-900 text-center'>
                      <Link href={item.path} className={`block py-5 hover:bg-neutral-900 ${pathname === item.path ? "bg-neutral-900" : ""}`} onClick={handleClick}>{item.label}</Link>
                    </li>
                  ))}
                </ul>

                {/* contact btn */}
                <Link href='/contact' className='primary-btn block text-center mt-10' onClick={handleClick}>contact me</Link>
            </nav>

            {/* lg menu */}
            <ul className="max-lg:hidden flex items-center border border-neutral-800 rounded-t-2xl overflow-hidden">
                  {navItems.map((item) => (
                    <li key={item.id}>
                    <Link href={item.path} className={`px-8 py-5 block hover:bg-neutral-900 transition-colors ${pathname === item.path ? "bg-neutral-900" : ""}`}>{item.label}</Link>
                    </li>
                  ))}
                </ul>

                {/* lg contact btn */}
                <Link href='/contact' 
                className='max-lg:hidden primary-btn'>
                  contact me</Link>

                {/* menu icon */}
                <button className="lg:hidden" onClick={handleClick}>
                  <RiMenu3Line size={30}/>
                </button>

                {/* overlay */}
                <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}>

                </div>
        </div>
    </header>
  )
}

export default Header