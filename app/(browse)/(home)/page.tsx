import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}
