'use client'

import { HomeIcon, SearchIcon, BookOpenIcon, UserIcon, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"


export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <Link href="/home">
        <Button variant="ghost" size="icon">
          <HomeIcon className={`h-6 w-6 ${pathname === "/home" ? "text-blue-600" : ""}`} />
        </Button>
      </Link>
      <Link href="/search">
        <Button variant="ghost" size="icon">
          <SearchIcon className={`h-6 w-6 ${pathname === "/search" ? "text-blue-600" : ""}`} />
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost" size="icon">
          <MessageCircle className={`h-6 w-6 ${pathname === "/" ? "text-blue-600" : ""}`} />
        </Button>
      </Link>
      <Link href="/my-courses">
        <Button variant="ghost" size="icon">
          <BookOpenIcon className={`h-6 w-6 ${pathname === "/my-courses" ? "text-blue-600" : ""}`} />
        </Button>
      </Link>
      <Link href="/profile">
        <Button variant="ghost" size="icon">
          <UserIcon className={`h-6 w-6 ${pathname === "/profile" ? "text-blue-600" : ""}`} />
        </Button>
      </Link>
    </nav>
  )
}