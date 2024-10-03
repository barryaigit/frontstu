'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, Star, MoreHorizontal, Plus, Home, Search, Bell, User, X, Image as ImageIcon, Calendar, Link2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const statusData = [
  { 
    id: 1,
    user: { name: 'Michael Suew', avatar: '/placeholder.svg' },
    time: '10m',
    image: '/placeholder.svg',
    likes: 342,
    comments: 45,
    shares: 209,
    stars: 1000,
    content: 'London is satisfied, Paris is resigned, but New York is always hopeful. Always it believes that something good is about to come off, and it must hurry to meet it...',
  },
  { 
    id: 2,
    user: { name: 'Sarah Farihah', avatar: '/placeholder.svg' },
    time: '1h',
    image: '/placeholder.svg',
    likes: 523,
    comments: 78,
    shares: 156,
    stars: 2100,
    content: 'The city seen from the Queensboro Bridge is always the city seen for the first time, in its first wild promise of all the mystery and the beauty in the world.',
  },
  { 
    id: 3,
    user: { name: 'Jason Lee', avatar: '/placeholder.svg' },
    time: '3h',
    image: '/placeholder.svg',
    likes: 231,
    comments: 34,
    shares: 89,
    stars: 750,
    content: 'One belongs to New York instantly, one belongs to it as much in five minutes as in five years.',
  },
]

const users = [
  { name: 'You', avatar: '/placeholder.svg', status: 'Active', color: '#CED0F8' },
  { name: 'Sally', avatar: '/placeholder.svg', status: 'In class', color: '#D8CBF5' },
  { name: 'Jason', avatar: '/placeholder.svg', status: 'Studying', color: '#BAF3EB' },
  { name: 'Jena', avatar: '/placeholder.svg', status: 'Break', color: '#F8CEDB' },
  { name: 'Michael', avatar: '/placeholder.svg', status: 'Offline', color: '#F8DBD0' },
  { name: 'Liam', avatar: '/placeholder.svg', status: 'Away', color: '#F3F4F6' },
]

export function StatusPageComponent() {
  const [isCreatingStatus, setIsCreatingStatus] = useState(false)
  const [newStatusContent, setNewStatusContent] = useState('')

  const handleCreateStatus = () => {
    console.log('Creating new status:', newStatusContent)
    setNewStatusContent('')
    setIsCreatingStatus(false)
  }

  return (
    <div className="relative pb-16">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="p-4 bg-[#F8F9FA]">
          <ScrollArea className="w-full overflow-x-auto">
            <div className="flex space-x-4">
              {users.map((user, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-11 h-11 border-2" style={{borderColor: user.color}}>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="mt-2 text-sm font-medium">{user.name}</span>
                  <span className="mt-1 text-xs text-muted-foreground">{user.status}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-180px)]">
            {statusData.map((status, index) => (
              <div key={status.id}>
                <Card className="m-4 border-0 shadow-none">
                  <CardHeader className="flex flex-row items-center p-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={status.user.avatar} alt={status.user.name} />
                      <AvatarFallback>{status.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-semibold">{status.user.name}</p>
                      <p className="text-xs text-muted-foreground">{status.time}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="px-4 py-2">
                    <p className="text-sm mb-4">{status.content}</p>
                    <Image
                      src={status.image}
                      alt="Status image"
                      width={368}
                      height={352}
                      className="w-full object-cover rounded-md"
                    />
                  </CardContent>
                  <CardFooter className="flex items-center p-4">
                    <Button variant="ghost" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      {status.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {status.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      {status.shares}
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <Star className="mr-2 h-4 w-4" />
                      {status.stars}
                    </Button>
                  </CardFooter>
                </Card>
                {index < statusData.length - 1 && (
                  <Separator className="mx-4" />
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
      <Button 
        className="fixed bottom-20 right-4 rounded-full w-10 h-10 bg-green-500 hover:bg-green-600 text-white shadow-lg"
        size="icon"
        onClick={() => setIsCreatingStatus(true)}
      >
        <Plus className="h-5 w-5" />
      </Button>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary">
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <User className="h-6 w-6" />
        </Button>
      </nav>
      {isCreatingStatus && (
        <div className="fixed inset-0 bg-[#E3E6EA] flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium text-[#272727]">Create Status</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsCreatingStatus(false)}>
              <X className="h-6 w-6 text-[#131313]" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex items-center mb-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <span className="ml-2 text-xs text-[#1A1A1A]">Your Name</span>
            </div>
            <Textarea
              placeholder="What's on your mind?"
              value={newStatusContent}
              onChange={(e) => setNewStatusContent(e.target.value)}
              className="min-h-[100px] text-sm text-[#242424] bg-transparent border-none resize-none focus:ring-0"
            />
          </div>
          <div className="p-4 bg-white">
            <div className="flex justify-between mb-4">
              <span className="text-xs text-[#7F7F7F]">Add</span>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ImageIcon className="h-6 w-6 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Calendar className="h-6 w-6 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Link2 className="h-6 w-6 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Plus className="h-6 w-6 text-gray-600" />
                </Button>
              </div>
            </div>
            <Button className="w-full bg-black text-white rounded-md" onClick={handleCreateStatus}>
              Post
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}