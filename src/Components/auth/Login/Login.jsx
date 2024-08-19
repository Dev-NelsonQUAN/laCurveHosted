import { Link, useNavigate } from "react-router-dom"
import "./login.css";
import { z } from 'zod'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {login} from '../../Global/Slice'
import { zodResolver } from "@hookform/resolvers/zod";

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../Components/Global/Slice";

const Login=()=>{
    const Nav = useNavigate()
    const dispatch = useDispatch()
    // const [formData, setformData] = useState({})
    const User = z.object({
        email: z.string().email(),
        password: z.string({message: 'Invalid Password'})
    })

    
    const {register, handleSubmit, formState: { errors }, setError} = useForm({
        resolver: zodResolver(User), //apply the zodResolver
    })

    const onSubmit = (data) =>{
        console.log(errors)
        try {
            
            dispatch(login(data))
            console.log(data)
            Nav('/anything/home')
        } catch (error) {
            console.log(error)
            
        }
        
    }
    // .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/, {message: 'This is ife'}

    // const [formData, setFormData]= useState({});
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const isLoggedIn = useSelector((state)=>state.isLoggedIn)
    // const loginHandle = (e)=>{
    //     e.preventDefault();
    //     // dispatch(login(formData));
    //     navigate("/home");
    // }
    // useEffect(()=>{
    //     if(isLoggedIn === true){
    //         navigate("/home");
    //         console.log(isLoggedIn)
    //     }
    // },[isLoggedIn])

  
   
    return(
        <div class="LoginHolder">
        <div className="Login">
            <form 
            onSubmit={handleSubmit(onSubmit)}
            >
                <label>Login</label>
                <input type="email" name="email" placeholder="email" required={true}
                //  onChange={(e)=> setFormData((p)=>{
                //     return {...p, email: e.target.value}
                // })} required={true}
                // onChange={(e)=> setformData({...formData, e.target.value})}
                {...register ('email')}
                />
                {
                    errors.email && <span style={{color: "red"}}> {errors.email.message} </span>
                }
                <input type="password" name="password" placeholder="password" 
                {...register ('password')}
                // onChange={(e)=> setFormData((p)=>{
                //     return {...p, password: e.target.value}
                // })} required={true}
                />
                {
                    errors.email && <span style={{color: "red"}}> {errors.password.message} </span>
                }
                <button type="submit" 
                // onClick={() => Nav("/home")}
                >Login</button>
                <p>Don't have an account? <span><Link to="/">Sign Up</Link></span></p>
            </form>
        </div>
        </div>
    )
}

export default Login