'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { BottomNavigation } from "@/components/BottomNavigation"

export default function ProfilePage() {
  return (
    <div className="bg-white min-h-screen pb-16 font-sans">
      {/* ... 保留现有的 Profile 组件内容 ... */}
      
      <BottomNavigation />
    </div>
  )
}