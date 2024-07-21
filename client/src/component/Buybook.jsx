import React from 'react'
import {Link} from 'react-router-dom';

export default function Buybook() {
  return (
    <>
      <div id="my_modal_4" className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className='modal-box dark:bg-slate-600 dark:text-white'>
            <form method="dialog">
              <h3 className="font-bold text-lg">Enter Your Address</h3>
              <div className='mt-4 space-y-2'>
                <span>Full Name</span><br />
                <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter your fullname' />
              </div>
              <div className='mt-4 space-y-2'>
                <span>Link Address</span><br />
                <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter your address' />
              </div>
              <div className='mt-4 space-y-2'>
                <span>Mobile Number</span><br />
                <input type="tel" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter your mobile number' />
              </div>
              <div className='mt-4 space-y-2'>
                <span>Alternate Mobile Number</span><br />
                <input type="tel" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' placeholder='Enter your alternate mobile number' />
              </div>
             
              <div className='flex justify-around mt-10'>
                <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600'>
                  <Link to='/payment'>
                  Next
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>


  )
}
