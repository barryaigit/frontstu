'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, Star, MoreHorizontal, Plus, X, Image as ImageIcon, Calendar, Link2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { BottomNavigation } from "@/components/BottomNavigation"

const statusData = [
  { 
    id: 1,
    user: { name: '张三', avatar: '/placeholder.svg' },
    time: '10分钟前',
    image: '/placeholder.svg',
    likes: 342,
    comments: 45,
    shares: 209,
    stars: 1000,
    content: '北京是一座充满活力的城市，总是让人感到希望。它相信美好的事物即将发生，急切地想要迎接...',
  },
  { 
    id: 2,
    user: { name: '李四', avatar: '/placeholder.svg' },
    time: '1小时前',
    image: '/placeholder.svg',
    likes: 523,
    comments: 78,
    shares: 156,
    stars: 2100,
    content: '从长城上俯瞰北京，总是给人一种全新的感觉，仿佛第一次见到这座城市，它承载着世界所有的神秘和美丽。',
  },
  { 
    id: 3,
    user: { name: '王五', avatar: '/placeholder.svg' },
    time: '3小时前',
    image: '/placeholder.svg',
    likes: 231,
    comments: 34,
    shares: 89,
    stars: 750,
    content: '一个人属于北京，可能只需要五分钟，也可能需要五年，但无论如何，这种归属感是即刻而永恒的。',
  },
]

const users = [
  { name: '你', avatar: '/placeholder.svg', status: '在线', color: '#CED0F8' },
  { name: '小明', avatar: '/placeholder.svg', status: '上课中', color: '#D8CBF5' },
  { name: '小红', avatar: '/placeholder.svg', status: '学习中', color: '#BAF3EB' },
  { name: '小华', avatar: '/placeholder.svg', status: '休息', color: '#F8CEDB' },
  { name: '小李', avatar: '/placeholder.svg', status: '离线', color: '#F8DBD0' },
  { name: '小张', avatar: '/placeholder.svg', status: '离开', color: '#F3F4F6' },
]

export function StatusPageComponent() {
  const [isCreatingStatus, setIsCreatingStatus] = useState(false)
  const [newStatusContent, setNewStatusContent] = useState('')

  const handleCreateStatus = () => {
    console.log('创建新状态:', newStatusContent)
    setNewStatusContent('')
    setIsCreatingStatus(false)
  }

  return (
    <div className="relative pb-16 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');
        body {
          font-family: 'Noto Sans SC', sans-serif;
        }
      `}</style>
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
                      alt="状态图片"
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
      {/* 底部导航 */}
      <BottomNavigation />

      {isCreatingStatus && (
        <div className="fixed inset-0 bg-white flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium text-[#272727]">创建状态</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsCreatingStatus(false)}>
              <X className="h-6 w-6 text-[#131313]" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <Textarea
              placeholder="你在想什么？"
              value={newStatusContent}
              onChange={(e) => setNewStatusContent(e.target.value)}
              className="min-h-[200px] text-sm text-[#242424] bg-transparent border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex justify-end mb-4">
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
              </div>
            </div>
            <Button className="w-full bg-black text-white rounded-md" onClick={handleCreateStatus}>
              发布
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}