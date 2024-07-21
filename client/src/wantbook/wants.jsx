import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Wantbook from '../component/Wantbook'


function wants() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Wantbook />
            </div>
   
            <Footer />
        </>
    )
}
export default wants;