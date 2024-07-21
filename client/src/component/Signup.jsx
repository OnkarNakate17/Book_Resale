import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
import toast from "react-hot-toast";

import { useForm } from "react-hook-form"

export default function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userinfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userinfo)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success("Loggedin Successfully");
              document.getElementById("my_modal_3").close();
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
              }, 1000);
            }
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
              setTimeout(() => {}, 2000);
            }
          });
    }

    return (
        <>
            <div id="my_modal_4" className=" flex h-screen items-center justify-center ">
                <div className="w-[600px]">
                    <div className='modal-box dark:bg-slate-600 dark:text-white'>

                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("fullname", { required: true })}
                                    placeholder='Enter your fullname' />
                                {errors.fullname && <span className='text-sm text-red-200'><br />This field is required</span>}                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("email", { required: true })}
                                    placeholder='Enter your email address' />
                                {errors.email && <span className='text-sm text-red-200'><br />This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                    {...register("password", { required: true })}
                                    placeholder='Enter your password' />
                                {errors.password && <span className='text-sm text-red-200'><br />This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-10'>
                                <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600 '>
                                    Signup
                                </button>
                                <p className='text-xl'>already have account <span href='/signup' className='underline text-green-400 cursor-pointer '
                                    onClick={() => document.getElementById("my_modal_3").showModal()} > Login </span></p>
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    )
}
