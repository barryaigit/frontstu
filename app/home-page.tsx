'use client'
import React from 'react'
import Link from 'next/link'
import { Bell, ShoppingCart, Bookmark, BarChart, Pen, Code, FileText, Video, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/BottomNavigation"

export function HomePage() {
  return (
    <div className="bg-white min-h-screen pb-16 font-sans">
      {/* 头部 */}
      <header className="bg-[#636AE8] text-white p-4 pt-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold">你好，同学</h1>
            <p className="text-sm opacity-80">今天想学点什么呢？</p>
          </div>
          <div className="flex space-x-4">
            <ShoppingCart className="w-6 h-6" />
            <Bell className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="p-4">
        {/* 精选课程 */}
        <Card className="bg-[#E8618C] text-white mb-6">
          <CardContent className="p-4">
            <p className="uppercase text-sm mb-1 text-[#12177A]">项目管理</p>
            <h2 className="text-2xl font-bold mb-2 text-[#12177A]">限时8折</h2>
            <Button variant="secondary" className="bg-[#4850E4] text-white">立即参与</Button>
          </CardContent>
        </Card>

        {/* 课程分类 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">课程分类</h2>
            <Button variant="ghost" className="text-[#636AE8]">查看更多</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '商业', icon: <BarChart />, color: 'bg-[#636AE8]' },
              { name: '设计', icon: <Pen />, color: 'bg-[#E8618C]' },
              { name: '编程', icon: <Code />, color: 'bg-[#EA916E]' },
              { name: '写作', icon: <FileText />, color: 'bg-[#22CCB2]' },
              { name: '影视', icon: <Video />, color: 'bg-[#E8618C]' },
              { name: '语言', icon: <Globe />, color: 'bg-[#7F55E0]' }
            ].map((category, index) => (
              <Card key={index} className="flex items-center p-2">
                <div className={`w-10 h-10 rounded ${category.color} mr-3 flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <span>{category.name}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* 热门课程 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">热门课程</h2>
            <Button variant="ghost" className="text-[#636AE8]">查看更多</Button>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[
              { id: 1, title: 'PHP快速入门', image: '/php.png', instructor: '李明', price: '￥399', rating: '4.5', reviews: '1233', lessons: 18 },
              { id: 2, title: 'Python基础教程', image: '/python.png', instructor: '张华', price: '￥299', rating: '4.5', reviews: '1267', lessons: 12 },
            ].map((course, index) => (
              <Link href="/my-courses/course-details" key={index}>
                <Card className="flex-shrink-0 w-48 cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="p-0">
                    <img src={course.image} alt={course.title} className="w-full h-24 object-cover" />
                    {index === 1 && (
                      <div className="absolute top-2 left-2 bg-[#636AE8] text-white text-xs py-1 px-2 rounded">
                        畅销
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                    <p className="text-xs text-gray-500">{course.instructor}</p>
                    <p className="text-[#636AE8] font-bold mt-2">{course.price}</p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0 text-xs flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{course.rating} ({course.reviews})</span>
                    </div>
                    <span>{course.lessons}课时</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 为你推荐 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">为你推荐</h2>
            <Button variant="ghost" className="text-[#636AE8]">查看更多</Button>
          </div>
          <div className="space-y-4">
            {[
              { id: 3, title: '网页设计入门', image: '/Image 77.png', instructor: '王小明', price: '￥399', rating: '4.5', reviews: '1233', lessons: 9 },
              { id: 4, title: 'UX研究基础', image: '/Image 77.png', instructor: '李晓华', price: '￥199', rating: '4.5', reviews: '1782', lessons: 12 },
            ].map((course, index) => (
              <Link href="/my-courses/course-details" key={index}>
                <Card className="flex cursor-pointer hover:shadow-md transition-shadow">
                  <img src={course.image} alt={course.title} className="w-24 h-24 object-cover" />
                  <div className="flex-1 p-3">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-sm">{course.title}</h3>
                        <p className="text-xs text-gray-500">{course.instructor}</p>
                      </div>
                      <Bookmark className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-[#636AE8] font-bold mt-2">{course.price}</p>
                    <div className="flex justify-between items-center mt-2 text-xs">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{course.rating} ({course.reviews})</span>
                      </div>
                      <span>{course.lessons}课时</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 激发灵感的课程 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">激发灵感的课程</h2>
            <Button variant="ghost" className="text-[#636AE8]">查看更多</Button>
          </div>
          <div className="space-y-4">
            {[
              { id: 5, title: '数字肖像绘画', image: '/Image 81.png', instructor: '陈艺', price: '￥459', rating: '4.5', reviews: '657', lessons: 12 },
              { id: 6, title: '工作空间装饰', image: '/Image 73.png', instructor: '刘梦', price: '￥129', rating: '4.5', reviews: '33', lessons: 17 },
              { id: 7, title: '包装设计精髓', image: '/Image 77.png', instructor: '黄晓明', price: '￥599', rating: '4.5', reviews: '1233', lessons: 14 },
            ].map((course, index) => (
              <Link href="/my-courses/course-details" key={index}>
                <Card className="flex cursor-pointer hover:shadow-md transition-shadow">
                  <img src={course.image} alt={course.title} className="w-24 h-24 object-cover" />
                  <div className="flex-1 p-3">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-sm">{course.title}</h3>
                        <p className="text-xs text-gray-500">{course.instructor}</p>
                      </div>
                      <Bookmark className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-[#636AE8] font-bold mt-2">{course.price}</p>
                    <div className="flex justify-between items-center mt-2 text-xs">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{course.rating} ({course.reviews})</span>
                      </div>
                      <span>{course.lessons}课时</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 优秀讲师 */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">优秀讲师</h2>
            <Button variant="ghost" className="text-[#636AE8]">查看更多</Button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[
              { name: '陈明', image: '/teacher1.png', university: '北京大学', rating: '4.5', reviews: '1233' },
              { name: '李华', image: '/teacher1.png', university: '清华大学', rating: '4.5', reviews: '1233' },
              { name: '张三', image: '/teacher1.png', university: '复旦大学', rating: '4.5', reviews: '1233' },
            ].map((teacher, index) => (
              <Card key={index} className="flex-shrink-0 w-36">
                <CardHeader className="p-3">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src={teacher.image} />
                    <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="p-3 text-center">
                  <h3 className="font-semibold text-sm">{teacher.name}</h3>
                  <p className="text-xs text-gray-500">{teacher.university}</p>
                  <div className="flex items-center justify-center mt-2 text-xs">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{teacher.rating} ({teacher.reviews})</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  )
}