'use client'

import { Icon } from '@iconify/react'

const experienceData = {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst',
    period: '03/2022 – Present',
    location: 'Chennai, India',
    responsibilities: [
        'Created and maintained end to end data processing flows between multiple consuming application systems using Azure data factory, Informatica(Powercenter, IICS), Autosys, SQL and Unix Shell scripting technologies combined based on business requirement.',
        'Worked on shell scripts to handle file transfer between different servers.',
        'Involved in automating the end-to-end batch flows using Autosys workload automation.',
        'Perform end to end unit testing before pushing the changes to UAT.',
        'Worked with QA team to share inputs about the components and the end to end flow to prepare necessary testcases.',
        'Worked with QA team and application owners to get the requirements to develop the workflows and get signoff to push the changes to production environment.',
        'Monitored and fixed batch job failures on daily, monthly and adhoc batch jobs using Azure data factory, Informatica(Powercenter, IICS) and Autosys workload automation tools.',
        'Involved in bug and data fixes for errors arising out in production environment.',
        'Worked on maintaining the multiple trackers for business audit purpose.',
        'Created service incident and JIRA tickets for failures we faced in daily and monthly batch batches.',
        'Worked on documenting and maintaining application flow document post production deployment.',
    ],
}

const Experience = () => {
    return (
        <section id='experience' className='scroll-mt-12'>
            <div className='container'>
                {/* Section Header */}
                <div className='text-center mb-14'>
                    <span className='inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3'>
                        Work History
                    </span>
                    <h2 className='mb-4'>Professional Experience</h2>
                    <p className='text-base font-normal max-w-xl mx-auto text-darkblue/60 dark:text-white/60'>
                        Delivering high-quality ETL integration solutions in an Agile environment.
                    </p>
                </div>

                {/* Timeline Card */}
                <div className='relative max-w-4xl mx-auto'>
                    {/* Vertical line */}
                    <div className='absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block' />

                    <div className='md:pl-20 relative'>
                        {/* Timeline dot */}
                        <div className='absolute left-0 md:left-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hidden md:flex'>
                            <Icon icon='tabler:briefcase' width={16} height={16} className='text-white' />
                        </div>

                        <div className='bg-secondary dark:bg-darklight rounded-2xl p-8 border border-black/5 dark:border-white/10 shadow-sm'>
                            {/* Header */}
                            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-6 border-b border-black/10 dark:border-white/10'>
                                <div>
                                    <h3 className='text-xl font-bold text-darkblue dark:text-white mb-1'>
                                        {experienceData.role}
                                    </h3>
                                    <p className='text-primary font-semibold text-base'>
                                        {experienceData.company}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2 sm:items-end'>
                                    <div className='flex items-center gap-2 text-sm font-medium text-darkblue/60 dark:text-white/60'>
                                        <Icon icon='tabler:calendar' width={16} height={16} />
                                        <span>{experienceData.period}</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm font-medium text-darkblue/60 dark:text-white/60'>
                                        <Icon icon='tabler:map-pin' width={16} height={16} />
                                        <span>{experienceData.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className='flex flex-col gap-4'>
                                {experienceData.responsibilities.map((item, i) => (
                                    <li key={i} className='flex items-start gap-3 group'>
                                        <div className='mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200'>
                                            <Icon
                                                icon='material-symbols:check-rounded'
                                                width={13}
                                                height={13}
                                                className='text-primary'
                                            />
                                        </div>
                                        <p className='text-base font-normal text-darkblue/80 dark:text-white/80 leading-relaxed'>
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
