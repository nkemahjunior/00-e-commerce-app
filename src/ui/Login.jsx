'use client'

import { BsApple } from 'react-icons/bs'
import '../app/globals.css'
import {FcGoogle} from 'react-icons/fc'
import { FaSquareTwitter } from 'react-icons/fa6'
import { SiFacebook } from 'react-icons/si'
import { BiLoaderAlt } from 'react-icons/bi'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useLogin } from '@/app/(noAuth)/login/useLogin'
import { useSearchParams } from 'next/navigation'





 function Login() {

    const searchParams = useSearchParams();
     const redirect = searchParams.get("redirect") ? searchParams.get("redirect") : "/newArrivals?page=1"
     
     const { register, formState: { errors }, handleSubmit } = useForm();
     const url = window.location.origin
    const {Login,isLoading} = useLogin(origin)
    

    function onSubmit({email,password}){
        Login({email,password})
    }

    return (
        <>
       

            <div className='flex justify-center items-center h-screen '>

                

                <div className='h-fit w-full  flex flex-col justify-center items-center py-4 px-1 space-y-4'>


                
                    <form action="/auth/login" className=' w-full  space-y-6' onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <h1 className="text-center uppercase text-3xl">zeco shopping</h1>
                            <p className='text-center uppercase text-xl '>checkout</p>
                        </div>



                        <div>
                            <label htmlFor="email"></label>
                            <input type="email"  placeholder='Enter your email'
                             className=' outline-none border-solid border-2 border-stone-300 p-2 bg-stone-50 rounded-md 
                             w-full placeholder:font-light  
                              focus:border-stone-600
                             '
                             {...register("email")}
                            />
                                { errors.name?.type === "required" && (
                                    <p role="alert" className='text-red-600'> email is required</p>
                                )}
                        </div>

                        <div>
                            <label htmlFor="password"></label>
                            <input type="password"  placeholder='Enter your Password'
                             className=' outline-none border-solid border-2 border-stone-300 p-2 bg-stone-50 rounded-md 
                             w-full placeholder:font-light  
                             focus:border-stone-600
                             '
                             {...register("password",{ required: true ,min: 8})}
                            />
                                { errors.password?.type === "required" && (
                                    <p role="alert" className='text-red-600'> password is required</p>
                                )}

                        </div>


                        

                        <div className='flex justify-center '>
                            <button className={`capitalize  text-white text-center p-2 w-[60%] rounded-md lg:hover:scale-95 flex justify-center items-center space-x-2 ${isLoading ? 'bg-[#373737]' : 'bg-black'}`}
                            disabled={isLoading}
                            >
                            Login { isLoading && <span className=' animate-spin'> <BiLoaderAlt/> </span> }
                        </button>
                        </div>

                    </form>



                    <div className='  mt-6'>

                        {/* <div className='flex justify-around border-solid  items-center '>

                            <p className='bg-stone-400 h-[0.5px] w-[100%]  '></p>

                            <p className='text-center w-[100%]  '>or login with</p>

                            <p className='bg-stone-400 h-[0.5px] w-[100%] '></p>

                        </div> */}

                        {/* <div className=' flex justify-between'>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem]
                            lg:hover:scale-95'><FcGoogle/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><BsApple/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><FaSquareTwitter/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem]  xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><SiFacebook style={{color:'#3b5998'}}/></button>

                        </div> */}

                        <div className='flex justify-center '>
                            <p > Don&apos;t have an account ? </p>
                            <Link href={`/signup?redirect=${redirect}` } ><p className=' underline ' >&nbsp;sign up now</p></Link>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Login
