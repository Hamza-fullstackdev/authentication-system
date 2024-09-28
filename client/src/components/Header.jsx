import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='px-3 sm:px-16 py-5'>
        <div className='flex items-center justify-between'>
            <div><h3 className='text-green-400 font-bold tracking-wide text-xl'>Web <span className='text-white'>Authenticator</span></h3></div>
            <div className='flex gap-x-4 items-center'>
                <Link className='bg-green-700 text-white text-sm outline-none border-none px-3 py-2 rounded'>Register</Link>
                <Link className='border border-green-700 text-white text-sm px-3 py-2 rounded'>Login</Link>
            </div>
        </div>
    </header>
  )
}

export default Header