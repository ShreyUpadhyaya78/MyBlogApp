import { useState } from "react";

const RegisterPage = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const register=async (ev)=>{
        ev.preventDefault();
         const response = await fetch('http://localhost:4000/register',{
            method:"Post",
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':"application/json"},
        });
        if(response.status===200){
          alert('Registration Successful');
        }
        else{
          alert("Registration Failed");
        }
    }
  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
      <input type='text' placeholder='username' value={username} 
      onChange={ev=>setUsername(ev.target.value)} />
      <input type='password' placeholder='password' value={password}
      onChange={ev=> setPassword(ev.target.value)} />
      <button>Register</button>
    </form>
  );
}
export default RegisterPage