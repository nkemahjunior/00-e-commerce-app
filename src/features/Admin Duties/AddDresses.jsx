"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";

 function AddDresses() {

  const {register,formState: { errors },handleSubmit} = useForm();

  const [loading,setLoading] = useState(false)

  const [file,setFile] = useState()

  


  async function submitForm(e){

    e.preventDefault();
   
    setLoading(true);
    
    const obj = Object.fromEntries(new FormData(e.currentTarget))

    // const test = new FormData()
    // test.append("z",file)
    


    const res = await fetch(`${location.origin}/addADressAPI`,{
      
        method:'post',
        body:JSON.stringify(obj)
    })

    if(!res.ok) {
      setLoading(false)
      toast.error("error adding dress..Refresh page and try again")
    }

    if(res.ok) {
      setLoading(false)
      toast.success("Dress added")
    }

    const data =  await res.json()
    console.log(res) //check for res.ok
    console.log("////////////////////")
    console.log(data)

  }


  function selectFile(e){
    setFile(e.target.files?.[0])
  }

  

  return (
    <div className="px-2 md:pl-4 md:flex justify-center">

      <form encType="multipart/form-data" id="FormAddDress" onSubmit={   submitForm}  className="space-y-3">

        <h1 className="uppercase text-2xl font-light">add a new dress</h1>

        <div className="flex flex-col ">
          <label htmlFor="name">cloth name </label>
          <input
            name="clothName"
            type="text"
            className="outline-none border-2 border-solid border-black"
            {...register("name", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z0-9" "]+$/i,
            })}
          />

          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              name is required
            </p>
          )}

          {errors.name?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              name can include only letters
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="price">price </label>
          <input
            name="price"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("price", {
              required: true,
             
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.price?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              price is required
            </p>
          )}

          {errors.price?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              price should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="qty">total QTY </label>
          <input
            name="quantity"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("qty", {
              required: true,
              
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.qty?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              quantity is required
            </p>
          )}

          {errors.qty?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              quantity should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="type">dress type </label>
          <select
            name="category"
            id="" 
            className="outline-none border-2 border-solid border-black"
          >
            <option  value="casual">casual</option>
            <option value="formal">formal</option>
            <option value="gym">gym</option>
            <option value="party">party</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="image">Image of dress </label>
          <input
            name="image"
            type="file"
           
            className="outline-none border-2 border-solid border-black"
            {...register("image", { required: true })}
            onChange={selectFile}
          />

          {errors.image?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              image is required
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="xs">Qty of xs available </label>
          <input
            name="xs"
            type="number"
            
            className="outline-none border-2 border-solid border-black"
            {...register("xs", {
              required: true,
              
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.xs?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              quantity of xs is required
            </p>
          )}

          {errors.xs?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              xs should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="s">Qty of s available </label>
          <input
            name="s"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("s", {
              required: true,
             
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.s?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              s is required
            </p>
          )}

          {errors.s?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              s should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="m">Qty of m available </label>
          <input
            name="m"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("m", {
              required: true,
             
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.m?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              m is required
            </p>
          )}

          {errors.m?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              m should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="l">Qty of l available </label>
          <input
            name="l"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("l", {
              required: true,
              
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.l?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              l is required
            </p>
          )}

          {errors.l?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
             l can should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="xl">Qty of xl available </label>
          <input
            name="xl"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("xl", {
              required: true,
             
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.xl?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              xl is required
            </p>
          )}

          {errors.xl?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              xl can should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="2xl">Qty of 2xl available </label>
          <input
            name="twoXl"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("twoXl", {
              required: true,
              
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.twoXl?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              2xl is required
            </p>
          )}

          {errors.twoXl?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              2xl can should include only numbers
            </p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="3xl">Qty of 3xl available </label>
          <input
            name="threeXl"
            type="number"
            className="outline-none border-2 border-solid border-black"
            {...register("threeXl", {
              required: true,
             
              pattern: /^[0-9]+$/i,
            })}
          />

          {errors.threeXl?.type === "required" && (
            <p role="alert" className="text-red-600">
              
              3xl is required
            </p>
          )}

          {errors.threeXl?.type === "pattern" && (
            <p role="alert" className="text-red-600">
              
              3xl can should include only numbers
            </p>
          )}
        </div> 

        <button className={` flex items-center justify-center  p-2 border-2 border-solid border-black w-full  text-white  font-bold lg:hover:scale-95 ${loading ? 'bg-[#373737]' : 'bg-black' }`}
        type="submit"
        aria-disabled={loading}
        disabled={loading}
       
        >
          add dress { loading && <span className=' animate-spin'> <BiLoaderAlt/> </span>  }
        </button>
        
      </form>
    </div>
  );
}

export default AddDresses;
