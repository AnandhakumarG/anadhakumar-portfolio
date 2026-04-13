'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from "next/image";

const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 dark:from-primary/10 dark:to-primary/5 pointer-events-none' />

      <div className='container relative z-10 pt-14 pb-16'>
        <div className='grid lg:grid-cols-12 grid-cols-1 items-center gap-12 lg:gap-16'>
          {/* Text Content */}
          <div className='lg:col-span-7 col-span-1'>
            <div className='flex flex-col lg:items-start items-center gap-7'>
               {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              <span className="text-green-500 text-xs sm:text-sm font-semibold">
                Available for opportunities
              </span>
            </div>

              {/* Name */}
              <div className='lg:text-left text-center'>
                <h1 className='text-5xl lg:text-6xl font-extrabold text-darkblue dark:text-white leading-tight mb-3'>
                  Anandhakumar G
                </h1>
                <p className='text-xl lg:text-2xl text-primary font-semibold'>
                  Data Engineer <span className='text-darkblue/40 dark:text-white/40 font-normal'>|</span> ETL Developer
                </p>
              </div>

              {/* Summary */}
              <p className='text-base font-normal text-darkblue/70 dark:text-white/70 leading-relaxed max-w-xl lg:text-left text-center'>
                Dynamic and highly responsible data warehouse engineer with <strong className='text-darkblue dark:text-white'>4+ years of experience</strong> in data integration and data management technologies. I have a proven track record of delivering high-quality integration solutions while collaborating in Agile environments. Seeking opportunities to expand my knowledge and take on challenging roles within forward-thinking teams.
              </p>

              {/* Contact Info */}
              <div className='flex flex-wrap gap-4 lg:justify-start justify-center'>
                <a
                  href='tel:7904113886'
                  className='flex items-center gap-2 text-sm font-medium text-darkblue/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors duration-200'
                >
                  <Icon icon='tabler:phone' width={16} height={16} className='text-primary' />
                  7904113886
                </a>
                <a
                  href='mailto:mailtoanandhakumar@gmail.com'
                  className='flex items-center gap-2 text-sm font-medium text-darkblue/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors duration-200'
                >
                  <Icon icon='tabler:mail' width={16} height={16} className='text-primary' />
                  mailtoanandhakumar@gmail.com
                </a>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-wrap gap-4 lg:justify-start justify-center'>
                <Link href='/#contact'>
                  <button className='flex items-center gap-2 px-8 py-3.5 font-semibold text-white border-2 rounded-xl border-primary bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300 shadow-lg shadow-primary/25'>
                    <Icon icon='tabler:mail' width={18} height={18} />
                    Hire Me
                  </button>
                </Link>
                <Link href='/#experience'>
                  <button className='flex items-center gap-2 px-8 py-3.5 font-semibold text-primary border-2 rounded-xl border-primary bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer duration-300'>
                    <Icon icon='tabler:eye' width={18} height={18} />
                    View Experience
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className='lg:col-span-5 col-span-1 flex justify-center'>
            <div className='relative'>
              {/* Glow effect */}
              <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-105' />
              <div className='relative bg-white dark:bg-darklight rounded-3xl p-8 shadow-2xl border border-black/5 dark:border-white/10'>
                {/* Avatar placeholder */}
                <div className='w-30 h-40 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30'>
                  <Image
                    src="/images/Anadhakumar Image.jpeg"
                    alt="Anandhakumar"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>

                {/* Info */}
                <div className='text-center mb-6'>
                  <h4 className='font-bold text-darkblue dark:text-white text-lg mb-1'>Anandhakumar G</h4>
                  <p className='text-primary font-semibold text-sm'>Programmer Analyst</p>
                  <p className='text-darkblue/50 dark:text-white/50 text-sm mt-1'>Cognizant Technology Solutions</p>
                </div>

                {/* Stats row */}
                <div className='grid grid-cols-3 gap-4 pt-5 border-t border-black/10 dark:border-white/10'>
                  <div className='text-center'>
                    <p className='text-xl font-extrabold text-primary'>4+</p>
                    <p className='text-xs text-darkblue/60 dark:text-white/60 mt-0.5'>Years Exp.</p>
                  </div>
                  <div className='text-center border-x border-black/10 dark:border-white/10'>
                    <p className='text-xl font-extrabold text-primary'>6+</p>
                    <p className='text-xs text-darkblue/60 dark:text-white/60 mt-0.5'>Technologies</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-xl font-extrabold text-primary'>2</p>
                    <p className='text-xs text-darkblue/60 dark:text-white/60 mt-0.5'>Awards</p>
                  </div>
                </div>

                {/* Social links */}
                <div className='flex justify-center gap-3 mt-5'>
                  <a
                    href='https://www.linkedin.com/in/anandhakumar-gunasekarapandian-06bb5a1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-200'
                  >
                    <Icon icon='tabler:brand-linkedin' width={20} height={20} />
                  </a>
                  <a
                    href='https://profile.indeed.com/p/anandhakumarg-16xyzj0'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-200'
                  >
                    <Icon icon='simple-icons:indeed' width={20} height={20} />
                  </a>
                  <a
                    href='mailto:mailtoanandhakumar@gmail.com'
                    className='p-2.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-200'
                  >
                    <Icon icon='tabler:mail' width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
