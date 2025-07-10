import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>WelCome To taking Vai</h1>
      <p>Talk fluent WithOut Any hesitation</p>
      <Link href={'/chat'}  className="cursor-pointer p-4 bg-blue-700 rounded-2xl text-white">Get Started</Link>
    </div>
  )
}
