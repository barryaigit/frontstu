'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Phone, MessageCircle, MapPin, Share2, Clock, Heart, Home, BookOpen, User, Calendar } from "lucide-react"

export function ArtEducationApp() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {/* User Profile */}
          <Card className="p-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-48 h-48 border-4 border-gray-200">
                <AvatarImage src="/placeholder.svg?height=192&width=192" alt="李梦瑶" />
                <AvatarFallback>LMY</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-2xl font-semibold">李梦</h2>
              <div className="flex items-center">
                <span className="text-base text-gray-600">高级讲师</span>
              </div>
              <div className="flex mt-2 space-x-2 text-sm text-gray-500">
                <span>插画</span>
                <span>•</span>
                <span>当代艺术</span>
                <span>•</span>
                <span>素描</span>
              </div>
              <span className="text-sm text-gray-500 mt-1">中国家庭美育中心</span>
            </div>

            {/* Action Icons */}
            <div className="flex justify-between mt-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-gray-600" />
                <span className="text-xs mt-1">电话</span>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="w-8 h-8 text-gray-600" />
                <span className="text-xs mt-1">微信</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-gray-600" />
                <span className="text-xs mt-1">导航</span>
              </div>
              <div className="flex flex-col items-center">
                <Share2 className="w-8 h-8 text-gray-600" />
                <span className="text-xs mt-1">分享</span>
              </div>
            </div>

            {/* Book Now Button */}
            <Button className="w-full py-3 mt-6 text-lg font-semibold bg-[#8B4513] hover:bg-[#723A0A] text-white">
              立即预约
            </Button>
          </Card>

          {/* Center Details */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2">书画家少儿美育中心</h3>
            <img src="/placeholder.svg?height=160&width=320" alt="Group Photo" className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>距离3.8km | 中国家庭美育中心</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>营业时间: 09:00-20:00</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">主营业务：</span>美术, 绘画, 古典艺术
            </div>
          </Card>

          {/* Team Section */}
          <Card className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">企业团队</h3>
              <Button variant="link" className="text-sm text-gray-500">
                查看更多 {'>'}
              </Button>
            </div>
            <div className="flex justify-between">
              {[
                { name: "梦梦", role: "古典讲师" },
                { name: "杨杰", role: "素描" },
                { name: "倩倩", role: "美术" },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${member.name}`} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="mt-2 text-sm font-medium">{member.name}</span>
                  <span className="text-xs text-gray-500">{member.role}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Course Offerings */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2">热门课程</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img src="/placeholder.svg?height=96&width=96&text=油画" alt="油画艺术课程" className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">油画艺术课程</h4>
                      <div className="flex items-center text-sm mt-1">
                        <span className="text-red-500 font-bold">¥4180</span>
                        <span className="line-through text-gray-400 ml-2">¥5000</span>
                      </div>
                    </div>
                    <Heart className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">报名人数: 124</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <img src="/placeholder.svg?height=96&width=96&text=素描" alt="创意素描课程" className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">创意素描课程</h4>
                      <div className="flex items-center text-sm mt-1">
                        <span className="text-red-500 font-bold">¥4180</span>
                        <span className="line-through text-gray-400 ml-2">¥5000</span>
                      </div>
                    </div>
                    <Heart className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">报名人数: 210</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center py-2 bg-white border-t">
        <Button variant="ghost" className="flex-col" size="sm">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">首页</span>
        </Button>
        <Button variant="ghost" className="flex-col" size="sm">
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-xs">课程</span>
        </Button>
        <Button variant="ghost" className="flex-col" size="sm">
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-xs">预约</span>
        </Button>
        <Button variant="ghost" className="flex-col" size="sm">
          <Heart className="w-6 h-6 mb-1" />
          <span className="text-xs">收藏</span>
        </Button>
        <Button variant="ghost" className="flex-col" size="sm">
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">我的</span>
        </Button>
      </div>
    </div>
  )
}