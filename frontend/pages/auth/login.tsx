import {useState} from 'react'; import axios from 'axios'; import Navbar from '../../components/Navbar';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const API=process.env.NEXT_PUBLIC_API_BASE_URL||'http://localhost:4000';
  const submit=async(e)=>{e.preventDefault();try{await axios.post(`${API}/auth/login`,{email,password});alert('Logged in placeholder');}catch{alert('Login failed');}};
  return(<><Navbar/><main className="max-w-md mx-auto p-6"><h1 className="text-2xl font-semibold mb-4">Login</h1>
    <form onSubmit={submit} className="space-y-4">
      <input className="w-full border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className="w-full border p-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button></form></main></>);
}

