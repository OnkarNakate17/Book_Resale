import React, { useEffect, useState } from 'react'
import Cards from '../../src/component/Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Wantbook() {

    const [book , setbook] = useState([]);
    useEffect(()=>{
        const getBook = async() =>{
            try{
                const res = await axios.get(`http://localhost:4001/book`)
                // console.log(res.data)
                setbook(res.data)   
            }
            catch(err){
                console.log(err)
            }
        }
        getBook();
    })



    return (
        <>
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div className='mt-28 items-cenrter justify-center text-center'>
                    <h1 className='text-2xl mt-4  md:text-4xl'>We're pleased to<span className='text-green-500 '>  welcome you!</span></h1>
                    <p className='mt-12'>Textbooks play a crucial role in guiding students through the intricacies of various subjects, offering structured explanations and exercises to enhance comprehension and learning outcomes.



</p>

                    <Link to="/">                    <button className='mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        // console.log(list)
                        book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
