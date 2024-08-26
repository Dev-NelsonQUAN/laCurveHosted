import { Link, useNavigate } from "react-router-dom"
import "./signup.css";
// import { signUp } from "../api/Slice";
import { useDispatch } from "react-redux";
import React,{ useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUps } from "../../Global/Slice";
import { FaEye, FaRegEye } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { signUps } from "../../Global/Slice";

const SignUp =()=>{
    const Nav = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState(false)
    const [toggle, setToggle] = useState(false)

    const User = z.object({
        name: z.string(),
        email: z.string().email({message: 'Must be valid email'}),
        role: z.string(),
        password: z.string({message: 'Must be a string'}).min(5, {message: 'Must be more than 5 characters'}).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/, {message: 'Must conatin numbers and special characters'}),
    })

    const {register, handleSubmit, formState: { errors }, setError} = useForm({
        resolver: zodResolver(User), //apply the zodResolver
    })


    const onSubmit = (data) =>{
        dispatch(signUps(data))
        Nav('/login')
        setToggle(true)
    }
    // const [formData, setFormData] = useState({})
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const signUpAction=(e)=>{
    //     e.preventDefault();
    //     console.log(formData)
    //     // dispatch(signUps(formData));
    //     navigate("/")
    // }
    // console.log(signUpAction);

    // const 

    return(
        <>
        <div className="SignupHolder">
        <div className="SignUp" >
            <form onSubmit={handleSubmit(onSubmit)}
            // onSubmit ={signUpAction}
            >
                <label>Sign Up</label>
                <input type="email" name="email" placeholder="Enter your email" required={true} {...register('email')}
                // onChange={(e)=> setFormData((p)=>{
                //     return {...p, email: e.target.value}
                // })}
                />
                 {
                    errors.email && <span style={{color: "red"}}> {errors.email.message} </span>
                }
                <input type="name" name="name" placeholder="Enter Your name" 
                required={true} {...register('name')}
                // onChange={(e)=> setFormData((p)=>{
                //     return {...p, name: e.target.value}
                // })}
                />

                <select  {...register ('role')}>
                    <option value=""> --Vendor/Buyer-- </option>
                    <option value="vendor"> Vendor </option>
                    <option value="buyer"> Buyer </option>
                </select> 
                {/* <input type="text" /> */}


                {/* input ?  */}
                    <input type="password" name="password" placeholder="Enter Your password" 
                    required={true} {...register ('password')}
                    // onChange={(e)=> setFormData((p)=>{
                    //     return {...p, password: e.target.value}
                    // })
                    // }
                    />

                {/* {
                    input ? 
                    <input type="password" name="password" placeholder="Enter Your password" 
                    required={true} {...register ('password')}
                    // onChange={(e)=> setFormData((p)=>{
                    //     return {...p, password: e.target.value}
                    // })
                    // }
                    />
                    : 
                    <input type="password" name="password" placeholder="Enter Your password" 
                    required={true} {...register ('password')}
                    // onChange={(e)=> setFormData((p)=>{
                    //     return {...p, password: e.target.value}
                    // })
                    // }
                    />
                } */}


        
                {
                    errors.password && <span style={{color: "red"}}> {errors.password.message} </span>
                }

                {/* <FaRegEye color="orange" onClick={() => setInput(true)}/> */}

              


                <button type="submit" 
                // onClick={signUpAction}
                // onClick={() =>Nav("/login")}
                >
                    {
                        toggle ? 
                        "Loading..."
                        // <FaTruckLoading/> 
                        : "Sign Up"
                    }
                    </button>
                <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
            </form>
        </div>
        </div>
        <Toaster/>
        </>
    )
}

export default SignUp