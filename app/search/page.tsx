'use client'

import React from 'react'
import { Search, Filter, ChevronRight, BarChart, Pen, Code, Video, Globe, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BottomNavigation } from "@/components/BottomNavigation"

// 将组件重命名为 SearchPage
export default function SearchPage() {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* 头部 */}
      <header className="p-4 pt-8">
        <div className="flex items-center gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input type="text" placeholder="搜索课程" className="pl-10 pr-4 py-2 w-full rounded-md bg-gray-100" />
          </div>
          <Button className="bg-[#636AE8] text-white">
            <Filter className="w-4 h-4 mr-2" />
            筛选
          </Button>
        </div>
      </header>

      <main className="p-4">
        {/* 热门话题 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">热门话题</h2>
          <div className="flex flex-wrap gap-2">
            {['Java', 'SQL', 'Javascript', 'Python', 'Digital marketing', 'Photoshop', 'Watercolor'].map((topic) => (
              <Button key={topic} variant="outline" className="rounded-full border-[#636AE8] text-[#636AE8]">
                {topic}
              </Button>
            ))}
          </div>
        </section>

        {/* 课程分类 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">课程分类</h2>
            <Button variant="ghost" className="text-[#636AE8] text-sm">查看更多</Button>
          </div>
          {[
            { name: '商业', icon: <BarChart className="text-[#636AE8]" /> },
            { name: '设计', icon: <Pen className="text-[#E8618C]" /> },
            { name: '编程', icon: <Code className="text-[#EA916E]" /> },
            { name: '影视', icon: <Video className="text-[#E8618C]" /> },
            { name: '语言', icon: <Globe className="text-[#7F55E0]" /> },
          ].map((category) => (
            <Card key={category.name} className="flex items-center justify-between p-3 mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <span>{category.name}</span>
              </div>
              <ChevronRight className="text-gray-400" />
            </Card>
          ))}
        </section>

        {/* 为你推荐 */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">为你推荐</h2>
            <Button variant="ghost" className="text-[#636AE8] text-sm">查看更多</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: '网站设计', image: '/php.png', instructor: '拉蒙诺·伍尔特施纳', price: '￥3990', rating: '4.5', reviews: '1233', lessons: 9, tag: '畅销' },
              { title: 'UX研究入门', image: '/python.png', instructor: '王小莉', price: '￥1990', rating: '4.5', reviews: '1782', lessons: 12, tag: '8折' },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
                    <div className="absolute top-2 left-2 bg-[#636AE8] text-white text-xs py-1 px-2 rounded">
                      {course.tag}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3">
                  <h3 className="font-bold text-sm mb-1">{course.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#636AE8] font-bold">{course.price}</span>
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>★ {course.rating} ({course.reviews})</span>
                    <span>{course.lessons} 课时</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* 底部导航 */}
      <BottomNavigation />
    </div>
  )
}