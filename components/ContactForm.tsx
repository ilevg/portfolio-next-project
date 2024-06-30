import React from 'react'

const ContactForm = () => {
  return (
    <form action="">
        <h2 className="text-2xl font-bold mb-5 text-white">Contact me</h2>
        <div className="mb-3">
            <input
                type="text"
                placeholder='Your Name'
                name='name'
                className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-500 bg-white border-0 rounded shadow'
            />
        </div>

        <div className="mb-3">
            <input
                type="email"
                placeholder='Email'
                name='email'
                className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-500 bg-white border-0 rounded shadow'
            />
        </div>
         
        <div className="mb-3">
            <input
                type="text"
                placeholder='Your message'
                name='message'
                className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-500 bg-white border-0 rounded shadow'
            />
        </div>
        <button className='px-6 mb-5 py-3 text-sm text-white font-bold uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>Send a message</button>
    </form>
  )
}

export default ContactForm
