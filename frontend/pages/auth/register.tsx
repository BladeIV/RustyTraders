import {useState} from 'react'; import axios from 'axios'; import Navbar from '../../components/Navbar';
export default function Register(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const API=process.env.NEXT_PUBLIC_API_BASE_URL||'http://localhost:4000';
  const submit=async(e)=>{e.preventDefault();try{await axios.post(`${API}/auth/register`,{name,email,password});alert('Registered placeholder');}catch{alert('Failed');}};
  return(<><Navbar/><main className="max-w-md mx-auto p-6"><h1 className="text-2xl font-semibold mb-4">Register</h1>
    <form onSubmit={submit} className="space-y-4">
      <input className="w-full border p-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input className="w-full border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className="w-full border p-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className="w-full bg-blue-600 text-white py-2 rounded">Create Account</button></form></main></>);
}

