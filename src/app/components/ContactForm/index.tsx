'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData({ firstname: '', lastname: '', email: '', phnumber: '', Message: '' })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoader(true)
    fetch('https://formsubmit.co/ajax/mailtoanandhakumar@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.firstname,
        LastName: formData.lastname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setShowThanks(true)
          resetForm()
          setTimeout(() => setShowThanks(false), 5000)
        }
        setLoader(false)
      })
      .catch((error) => {
        setLoader(false)
        console.error(error.message)
      })
  }

  return (
    <section id='contact' className='scroll-mt-12'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-14'>
          <span className='inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3'>
            Get in Touch
          </span>
          <h2 className='mb-4'>Let&apos;s Connect</h2>
          <p className='text-base font-normal max-w-xl mx-auto text-darkblue/60 dark:text-white/60'>
            Have an opportunity or want to discuss a project? I&apos;d love to hear from you.
          </p>
        </div>

        <div className='grid lg:grid-cols-5 grid-cols-1 gap-10 max-w-5xl mx-auto'>
          {/* Info Panel */}
          <div className='lg:col-span-2 flex flex-col gap-8'>
            {/* Contact Items */}
            <div className='flex flex-col gap-6'>
              {[
                {
                  icon: 'tabler:phone',
                  label: 'Phone',
                  value: '+91 7904113886',
                  href: 'tel:7904113886',
                },
                {
                  icon: 'tabler:mail',
                  label: 'Email',
                  value: 'mailtoanandhakumar@gmail.com',
                  href: 'mailto:mailtoanandhakumar@gmail.com',
                },
                {
                  icon: 'tabler:map-pin',
                  label: 'Location',
                  value: 'Chennai, Tamil Nadu, India',
                  href: undefined,
                },
              ].map((contact, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className='p-3 rounded-xl bg-primary/10 flex-shrink-0'>
                    <Icon icon={contact.icon} width={20} height={20} className='text-primary' />
                  </div>
                  <div>
                    <p className='text-xs font-semibold text-darkblue/50 dark:text-white/50 uppercase tracking-widest mb-1'>
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className='text-sm font-medium text-darkblue dark:text-white hover:text-primary dark:hover:text-primary transition-colors'
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className='text-sm font-medium text-darkblue dark:text-white'>
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className='text-sm font-semibold text-darkblue/60 dark:text-white/60 mb-4 uppercase tracking-widest'>
                Connect Online
              </p>
              <div className='flex gap-3'>
                <a
                  href='https://www.linkedin.com/in/anandhakumar-gunasekarapandian-06bb5a1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary dark:bg-darklight border border-black/10 dark:border-white/10 text-sm font-medium text-darkblue dark:text-white hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-200'
                >
                  <Icon icon='tabler:brand-linkedin' width={18} height={18} />
                  LinkedIn
                </a>
                <a
                  href='https://profile.indeed.com/p/anandhakumarg-16xyzj0'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary dark:bg-darklight border border-black/10 dark:border-white/10 text-sm font-medium text-darkblue dark:text-white hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-200'
                >
                  <Icon icon='simple-icons:indeed' width={18} height={18} />
                  Indeed 
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className='lg:col-span-3'>
            <div className='bg-secondary dark:bg-darklight rounded-2xl p-8 border border-black/5 dark:border-white/10'>
              {showThanks && (
                <div className='flex items-center gap-2 bg-primary text-white rounded-xl px-5 py-3 text-sm font-medium mb-6'>
                  <Icon icon='tabler:circle-check' width={20} height={20} />
                  Thank you! I&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                  <div>
                    <label htmlFor='fname' className='block text-sm font-medium text-darkblue dark:text-white mb-2'>
                      First Name
                    </label>
                    <input
                      id='fname'
                      type='text'
                      name='firstname'
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder='Anandha'
                      className='w-full text-sm px-4 py-3 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-darkmode focus:border-primary dark:focus:border-primary outline-none transition-all duration-300'
                    />
                  </div>
                  <div>
                    <label htmlFor='lname' className='block text-sm font-medium text-darkblue dark:text-white mb-2'>
                      Last Name
                    </label>
                    <input
                      id='lname'
                      type='text'
                      name='lastname'
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder='Kumar'
                      className='w-full text-sm px-4 py-3 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-darkmode focus:border-primary dark:focus:border-primary outline-none transition-all duration-300'
                    />
                  </div>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-darkblue dark:text-white mb-2'>
                      Email Address
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='you@example.com'
                      className='w-full text-sm px-4 py-3 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-darkmode focus:border-primary dark:focus:border-primary outline-none transition-all duration-300'
                    />
                  </div>
                  <div>
                    <label htmlFor='Phnumber' className='block text-sm font-medium text-darkblue dark:text-white mb-2'>
                      Phone Number
                    </label>
                    <input
                      id='Phnumber'
                      type='tel'
                      name='phnumber'
                      value={formData.phnumber}
                      onChange={handleChange}
                      placeholder='+91 9876543210'
                      className='w-full text-sm px-4 py-3 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-darkmode focus:border-primary dark:focus:border-primary outline-none transition-all duration-300'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-darkblue dark:text-white mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='Message'
                    value={formData.Message}
                    onChange={handleChange}
                    rows={4}
                    className='w-full text-sm px-4 py-3 rounded-xl border border-black/20 dark:border-white/20 bg-white dark:bg-darkmode focus:border-primary dark:focus:border-primary outline-none resize-none transition-all duration-300'
                    placeholder='Tell me about the opportunity...'
                  />
                </div>
                <button
                  type='submit'
                  disabled={!isFormValid || loader}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${!isFormValid || loader
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}
                >
                  {loader ? (
                    <div className='w-5 h-5 rounded-full animate-spin border-2 border-solid border-white border-t-transparent' />
                  ) : (
                    <>
                      <Icon icon='tabler:send' width={18} height={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
