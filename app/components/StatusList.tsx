import Image from 'next/image'
import { Heart, MessageCircle, Share2, Star, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

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
  // ... (other status data)
]

export function StatusList() {
  return (
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
  )
}