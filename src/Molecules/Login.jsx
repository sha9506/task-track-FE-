import { useState } from "react";
import Input from "../Atoms/Input";


const Login=()=>
{
    const[username, setUsername]=useState('');

    return(
        <div>
            login
            <Input label={"Username"} placeholder={"Enter Your Username"}
                onchange={(e)=>{setUsername(e.target.value)}} type={username}
            />
        </div>
    )
}

export default Login;