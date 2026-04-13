'use client'

import { Icon } from '@iconify/react'

const education = {
    degree: 'Bachelor of Computer Science',
    college: 'NMS S.Vellaichamy Nadar College',
    period: '08/2017 – 05/2020',
    location: 'Madurai, India',
}

const achievements = [
    {
        title: 'Stellar Performance Award',
        icon: 'tabler:medal',
        year: '2024',
        description:
            'Received "Stellar Performance" award from our application manager in the year of 2024.',
    },
    {
        title: 'Working as One Award',
        icon: 'tabler:users',
        year: '2023',
        description:
            'Received "Working as one" award from my Team Leader in the year of 2023.',
    },
]

const EducationAchievements = () => {
    return (
        <section id='education' className='scroll-mt-12 bg-secondary dark:bg-darklight'>
            <div className='container'>
                <div className='text-center mb-14'>
                    <span className='inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3'>
                        Background
                    </span>
                    <h2 className='mb-4'>Education &amp; Achievements</h2>
                    <p className='text-base font-normal max-w-xl mx-auto text-darkblue/60 dark:text-white/60'>
                        Academic foundation and recognition for outstanding contributions.
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-start'>
                    {/* Education */}
                    <div>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='p-2.5 rounded-xl bg-primary shadow-lg shadow-primary/30'>
                                <Icon icon='tabler:school' width={22} height={22} className='text-white' />
                            </div>
                            <h4 className='font-bold text-darkblue dark:text-white'>Education</h4>
                        </div>
                        <div className='bg-white dark:bg-darkmode rounded-2xl p-8 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300'>
                            <h5 className='font-bold text-darkblue dark:text-white mb-1'>
                                {education.degree}
                            </h5>
                            <p className='text-primary font-semibold text-base mb-4'>
                                {education.college}
                            </p>
                            <div className='flex flex-wrap gap-4 text-sm text-darkblue/60 dark:text-white/60'>
                                <div className='flex items-center gap-1.5'>
                                    <Icon icon='tabler:calendar' width={15} height={15} />
                                    <span>{education.period}</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <Icon icon='tabler:map-pin' width={15} height={15} />
                                    <span>{education.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='p-2.5 rounded-xl bg-primary shadow-lg shadow-primary/30'>
                                <Icon icon='tabler:trophy' width={22} height={22} className='text-white' />
                            </div>
                            <h4 className='font-bold text-darkblue dark:text-white'>Key Achievements</h4>
                        </div>
                        <div className='flex flex-col gap-5'>
                            {achievements.map((item, i) => (
                                <div
                                    key={i}
                                    className='bg-white dark:bg-darkmode rounded-2xl p-6 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4'
                                >
                                    <div className='flex-shrink-0 p-2.5 rounded-xl bg-primary/10'>
                                        <Icon
                                            icon={item.icon}
                                            width={22}
                                            height={22}
                                            className='text-primary'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-2 mb-1 flex-wrap'>
                                            <h6 className='font-bold text-darkblue dark:text-white'>
                                                {item.title}
                                            </h6>
                                            <span className='text-xs font-semibold text-white bg-primary rounded-full px-2.5 py-0.5'>
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className='text-sm font-normal text-darkblue/70 dark:text-white/70 leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationAchievements
