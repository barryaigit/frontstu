import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const users = [
  { name: '你', avatar: '/placeholder.svg', status: '在线', color: '#CED0F8' },
  { name: '小明', avatar: '/placeholder.svg', status: '上课中', color: '#D8CBF5' },
  { name: '小红', avatar: '/placeholder.svg', status: '学习中', color: '#BAF3EB' },
  { name: '小华', avatar: '/placeholder.svg', status: '休息', color: '#F8CEDB' },
  { name: '小李', avatar: '/placeholder.svg', status: '离线', color: '#F8DBD0' },
  { name: '小张', avatar: '/placeholder.svg', status: '离开', color: '#F3F4F6' },
]

export function StatusHeader() {
  return (
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
  )
}