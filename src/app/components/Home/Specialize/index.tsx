'use client'

import { Icon } from '@iconify/react'

const skills = [
  {
    icon: 'tabler:database',
    title: 'Informatica Powercenter',
    desc: 'Designing and managing ETL workflows, mappings, sessions, and worklets for large-scale data integration.',
  },
  {
    icon: 'tabler:cloud',
    title: 'Informatica Cloud (IICS)',
    desc: 'Cloud-based data integration and orchestration using Informatica Intelligent Cloud Services platform.',
  },
  {
    icon: 'tabler:building-factory-2',
    title: 'Azure Data Factory',
    desc: 'Building end-to-end data pipelines and processing flows on Microsoft Azure for enterprise data management.',
  },
  {
    icon: 'tabler:robot',
    title: 'AutoSys Workload Automation',
    desc: 'Automating and scheduling end-to-end batch flows and monitoring job execution across environments.',
  },
  {
    icon: 'tabler:terminal-2',
    title: 'Shell Script & Unix',
    desc: 'Writing shell scripts for file transfers, automation, and server-level operations in Unix/Linux environments.',
  },
  {
    icon: 'tabler:table',
    title: 'SQL & Data Handling',
    desc: 'Writing complex SQL queries for data analysis, bug fixes, and data validation in production environments.',
  },
  {
    icon: 'tabler:ticket',
    title: 'Ticket Handling',
    desc: 'Managing service incidents and JIRA tickets using ServiceNow, JIRA, and ALM for issue tracking and resolution.',
  },
  {
    icon: 'tabler:users-group',
    title: 'Agile Collaboration',
    desc: 'Working with QA teams, application owners, and stakeholders to gather requirements and deliver in Agile sprints.',
  },
]

const Skills = () => {
  return (
    <section id='skills' className='scroll-mt-12'>
      <div className='container'>
        <div className='text-center mb-14'>
          <span className='inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3'>
            Capabilities
          </span>
          <h2 className='mb-4'>Technical Skills</h2>
          <p className='text-base font-normal max-w-xl mx-auto text-darkblue/60 dark:text-white/60'>
            Core ETL and data engineering tools I use to build and maintain robust data pipelines.
          </p>
        </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
          {skills.map((item, i) => (
            <div key={i} className='group'>
              <div className='bg-secondary dark:bg-darklight rounded-2xl p-6 border border-black/5 dark:border-white/10 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                <div className='p-3 rounded-xl bg-primary w-fit mb-5 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300'>
                  <Icon icon={item.icon} width={22} height={22} className='text-white' />
                </div>
                <h6 className='font-bold text-darkblue dark:text-white mb-2'>{item.title}</h6>
                <p className='text-sm font-normal text-darkblue/60 dark:text-white/60 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
