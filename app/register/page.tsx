"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(res)

    if (!res?.ok) {
      alert('Credential not correct!')
      return
    }
    redirect('/chat')
  };

  return (
    <div className="w-full min-h-screen grid items-center text-center">
      <form  onSubmit={handleLogin} className="space-y-4 p-6 max-w-96 mx-auto border border-gray-200 shadow  shadow-blue-200  ">
      <h1 className="text-4xl font-bold">LogIn</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}
