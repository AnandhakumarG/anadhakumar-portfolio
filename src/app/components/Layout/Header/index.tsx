'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
]

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full transition-all duration-300 ${sticky
        ? 'shadow-lg dark:shadow-neutral-50/5 bg-white/95 dark:bg-darklight/95 backdrop-blur-md'
        : 'bg-transparent'
        }`}>
      <div
        className={`container flex items-center justify-between gap-10 duration-300 ${sticky ? 'py-3' : 'py-4'
          }`}>
        {/* Logo / Name */}
        <Link href='/' className='flex items-center gap-2 group'>
          <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30'>
            <Image
              src="/images/Logo.png"
              alt="Anandhakumar"
              width={400}
              height={400}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <span className='font-bold text-darkblue dark:text-white text-base tracking-tight'>
            Anandhakumar G
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className='hidden xl:flex flex-grow items-center justify-start gap-8'>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className='text-base font-medium text-darkblue/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors duration-200'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          {/* Theme Toggle */}
          <button
            aria-label='Toggle theme'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-neutral-50 rounded-full dark:bg-darklight p-2 outline-none border border-black/10 dark:border-white/10'>
            <Icon
              icon='solar:sun-2-bold'
              width='20'
              height='20'
              className='hidden dark:block'
            />
            <Icon
              icon='solar:moon-bold'
              width='20'
              height='20'
              className='dark:hidden block'
            />
          </button>

          {/* Hire Me CTA */}
          <Link
            href='/#contact'
            className='hidden xl:flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl outline-none hover:bg-transparent hover:text-primary border-2 border-primary duration-300 text-sm font-semibold'>
            <Icon icon='tabler:mail' width={16} height={16} />
            Hire Me
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block xl:hidden p-2 rounded-lg hover:cursor-pointer'
            aria-label='Toggle mobile menu'>
            <span className='block w-6 h-0.5 bg-darkblue dark:bg-white' />
            <span className='block w-6 h-0.5 bg-darkblue dark:bg-white mt-1.5' />
            <span className='block w-6 h-0.5 bg-darkblue dark:bg-white mt-1.5' />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darklight shadow-2xl transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
        <div className='flex items-center justify-between p-5 border-b border-black/10 dark:border-white/10'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-lg bg-primary flex items-center justify-center'>
              <span className='text-white font-extrabold text-xs'>AG</span>
            </div>
            <span className='font-bold text-darkblue dark:text-white text-sm'>Anandhakumar G</span>
          </div>
          <button onClick={() => setNavbarOpen(false)} aria-label='Close mobile menu'>
            <Icon
              icon='tabler:x'
              width={24}
              height={24}
              className='dark:text-white hover:text-primary dark:hover:text-primary'
            />
          </button>
        </div>

        <nav className='flex flex-col p-5 gap-1'>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className='text-base font-medium text-darkblue/80 dark:text-white/80 hover:text-primary dark:hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/5 transition-all duration-200'
            >
              {item.label}
            </Link>
          ))}
          <div className='mt-4'>
            <Link
              href='/#contact'
              className='flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white rounded-xl outline-none hover:bg-transparent hover:text-primary border-2 border-primary duration-300 text-sm font-semibold'
              onClick={() => setNavbarOpen(false)}>
              <Icon icon='tabler:mail' width={16} height={16} />
              Hire Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
