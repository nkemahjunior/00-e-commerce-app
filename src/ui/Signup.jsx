'use client'

import { BsApple } from 'react-icons/bs'
import '../app/globals.css'
import {FcGoogle} from 'react-icons/fc'
import { FaSquareTwitter } from 'react-icons/fa6'
import { SiFacebook } from 'react-icons/si'
import { BiLoaderAlt } from 'react-icons/bi'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


import { useSignUp } from '@/app/(noAuth)/signup/useSignUp'

function Signup() {

    const {signup,isLoading} = useSignUp();

 

    const { register,formState: { errors }, handleSubmit } = useForm()

    const[confirmPassword,setConfirmPassword] = useState()
    const[confirmPassword2,setConfirmPassword2] = useState('')
    const [passWordNoMatch,setPasswordNoMatch] = useState()
    
    function onSubmit({ fullName, email, password}){
        if(passWordNoMatch ) return
       
        signup({ fullName, email, password})
    }

    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
        

        if(confirmPassword2 !== '' && confirmPassword2 === e.target.value )
            setPasswordNoMatch(false) 

        if(confirmPassword2 !== '' && confirmPassword2 !== e.target.value )
            setPasswordNoMatch(true)
    }

    function handleConfirmPassword2(e){
        setConfirmPassword2(e.target.value)
        confirmPassword === e.target.value ? setPasswordNoMatch(false) : setPasswordNoMatch(true)
    }

  
    return (
        <>
       

            <div className='flex justify-center items-center h-screen '>

                

                <div className='h-fit w-full md:w-[50%] flex flex-col justify-center items-center py-4 px-1 space-y-4'>


                
                    <form action="auth/sign-up" className=' w-full md:w-[80%] space-y-4' onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <h1 className="text-center uppercase text-3xl">zeco shopping</h1>
                            <p className='text-center uppercase text-xl '>checkout</p>
                        </div>

                         <div className=''>
                            <label htmlFor="name"></label>

                            <input type="text"  placeholder='Enter your name' 
                            className=' outline-none border-solid border-2 border-stone-300 p-2 bg-stone-50 rounded-md 
                            w-full placeholder:font-light  
                            focus:border-stone-600
                            '
                            {...register("name",{ required: true, maxLength: 20 ,pattern: /^[A-Za-z0-9" "]+$/i})}
                            />
                                { errors.name?.type === "required" && (
                                    <p role="alert" className='text-red-600'> name is required</p>
                                )}
                                { errors.name?.type === "pattern" && (
                                    <p role="alert" className='text-red-600'> name can include only letters</p>
                                )}
                        </div>

                        <div>
                            <label htmlFor="email"></label>
                            <input type="email"  placeholder='Enter your email'
                             className=' outline-none border-solid border-2 border-stone-300 p-2 bg-stone-50 rounded-md 
                             w-full placeholder:font-light  
                             focus:border-stone-600
                             '
                             {...register("email",{ required: true })}
                            />
                                { errors.email?.type === "required" && (
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
                             onChange={handleConfirmPassword}
                            />
                                { errors.password?.type === "required" && (
                                    <p role="alert" className='text-red-600'> password is required</p>
                                )}
                                { errors.password?.type === "min" && (
                                    <p role="alert" className='text-red-600'> password should not be less than 8</p>
                                )}
                        </div>

                        <div>
                            <label htmlFor="password"></label>
                            <input type="password"  placeholder='Confirm password'
                             className=' outline-none border-solid border-2 border-stone-300 p-2 bg-stone-50 rounded-md 
                             w-full placeholder:font-light  
                             focus:border-stone-600
                             '
                             onChange={handleConfirmPassword2}
                            />
                            {passWordNoMatch && <p role="alert" className='text-red-600'> passwords don&apos;t match</p>}

                        </div> 
                        

                        <div className='flex justify-center '>
                            <button className='capitalize bg-black text-white text-center p-2 w-[60%] rounded-md lg:hover:scale-95 flex justify-center items-center space-x-2'>
                            signup { isLoading && <span className=' animate-spin'> <BiLoaderAlt/> </span> }
                        </button>
                        </div>
                    </form>

                    <div className=' w-full md:w-[80%] space-y-4'>

                        <div className='flex justify-around border-solid  items-center  '>

                            <p className='bg-stone-400 h-[0.5px] w-[100%]  '></p>

                            <p className='text-center w-[100%]  '>or login with</p>

                            <p className='bg-stone-400 h-[0.5px] w-[100%] '></p>

                        </div>

                        <div className=' flex justify-between'>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem]
                            lg:hover:scale-95'><FcGoogle/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><BsApple/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem] xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><FaSquareTwitter/></button>

                            <button className='border-solid border-2 border-stone-300 p-2 w-[4.3rem]  lg:w-[5.5rem]  xl:w-[6.8rem] flex justify-center items-center rounded-md md:w-[4.1rem] lg:hover:scale-95 '><SiFacebook style={{color:'#3b5998'}}/></button>

                        </div>

                        <div className='flex justify-center'>
                            <p > Already have an account ?</p>
                            <Link href={'/login'}><p className='underline'>Login</p></Link>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Signup
