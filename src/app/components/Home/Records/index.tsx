'use client'

import { Icon } from '@iconify/react'

const stats = [
  {
    icon: 'tabler:calendar-stats',
    digit: '4+',
    desc: 'Years of Experience',
  },
  {
    icon: 'tabler:building-community',
    digit: '1',
    desc: 'Company (Cognizant)',
  },
  {
    icon: 'tabler:trophy',
    digit: '2',
    desc: 'Awards Received',
  },
  {
    icon: 'tabler:code-circle',
    digit: '6+',
    desc: 'Technologies Mastered',
  },
]

const Records = () => {
  return (
    <section className='bg-primary'>
      <div className='container py-12'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
          {stats.map((item, i) => (
            <div key={i} className='flex flex-col items-center gap-3 py-4'>
              <div className='p-3 bg-white/20 rounded-xl'>
                <Icon icon={item.icon} width={32} height={32} className='text-white' />
              </div>
              <h3 className='text-white font-extrabold'>{item.digit}</h3>
              <p className='text-white/80 text-base font-medium text-center'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Records
