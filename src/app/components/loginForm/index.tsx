'use client'

import React, { useState } from 'react'
import {signIn} from "next-auth/react"
import {useRouter} from "next/navigation"

const LoginForm = () => {
  const router= useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        console.log(res?.error);
      } 
    });
  };
  
  return (
    <form
    className="flex flex-col items-center justify-normal gap-4"
    onSubmit={handleSubmit}
  >
    <div className="text-2xl font-semibold text-red-500 mb-6">
      You are not logged in
    </div>
    <label className="flex flex-col flex-wrap text-white">
      Email:
      <input
        type="email"
        placeholder="myemail@email.com"
        className="px-4 py-3 mt-2 rounded text-black"
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
    <label className="flex flex-col flex-wrap text-white">
      Password:
      <input
        type="password"
        placeholder="hard_password123_"
        className="px-4 py-3 rounded mt-2 text-black"
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <button
      className="text-xl font-bold text-gray-50 bg-vibrant-green px-4 py-3 rounded"
      type="submit"
    >
      Login
    </button>
  </form>
  )
}

export default LoginForm