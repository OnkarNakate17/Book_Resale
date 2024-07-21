import React from 'react'

import Navbar from '../../src/component/Navbar.jsx'
import Banner from '../../src/component/Banner.jsx'
import Footer from '../../src/component/Footer.jsx'
import FreeSource from '../../src/component/FreeSource.jsx'
import Addbook from '../component/Addbook.jsx'

function Home() {
    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white'>

                <Navbar />
                <Banner />
                <FreeSource />
                <Footer />
                <Addbook />
            </div>
        </>
    )
}

export default Home
