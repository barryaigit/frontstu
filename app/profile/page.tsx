'use client'

import { BottomNavigation } from "@/components/BottomNavigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkIcon, StarIcon } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="bg-white min-h-screen pb-16 font-sans">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-bold">用户资料</h1>
        <Button variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </Button>
      </header>
      <div className="relative">
        <Image
          alt="个人资料背景"
          className="w-full h-32 object-cover"
          height="128"
          src="/Image 67.png"
          style={{
            aspectRatio: "375/128",
            objectFit: "cover",
          }}
          width="375"
        />
        <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 border-4 border-white">
          <AvatarImage alt="玛莎·罗西" src="/Rectangle.png" />
          <AvatarFallback>玛莎</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold">玛莎·罗西</h2>
        <p className="text-sm text-gray-500">用户体验/界面设计师</p>
      </div>
      <div className="flex justify-around mt-6 mb-8">
        <div className="text-center">
          <p className="font-bold text-lg">25</p>
          <p className="text-xs text-gray-500">已保存</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">24</p>
          <p className="text-xs text-gray-500">进行中</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">98</p>
          <p className="text-xs text-gray-500">已完成</p>
        </div>
      </div>
      <div className="px-4">
        <h3 className="text-lg font-bold mb-4">已保存课程</h3>
        <div className="space-y-4">
          {[
            {
              title: "产品设计",
              instructor: "丹尼斯·斯威尼",
              price: "¥1290",
              rating: "4.5",
              reviews: "1233",
              lessons: "12",
              image: "/python.png",
            },
            {
              title: "网站设计",
              instructor: "雷蒙诺·伍尔茨纳",
              price: "¥399",
              rating: "4.5",
              reviews: "1233",
              lessons: "12",
              image: "/php.png",
            },
            {
              title: "移动UI设计",
              instructor: "雷蒙诺·伍尔茨纳",
              price: "¥2180",
              rating: "4.5",
              reviews: "1233",
              lessons: "12",
              image: "/Image 51.png",
            },
            {
              title: "数字肖像",
              instructor: "雷蒙诺·伍尔茨纳",
              price: "¥459",
              rating: "4.5",
              reviews: "1233",
              lessons: "12",
              image: "/Image 52.png",
            },
          ].map((course, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex">
                  <Image
                    alt={course.title}
                    className="rounded-lg"
                    height="96"
                    src={course.image}
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{course.title}</h4>
                      <BookmarkIcon className="text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                    <p className="text-blue-600 font-bold mt-2">{course.price}</p>
                    <div className="flex items-center mt-2">
                      <StarIcon className="text-yellow-400 w-4 h-4" />
                      <span className="text-sm ml-1">
                        {course.rating} ({course.reviews})
                      </span>
                      <span className="text-sm ml-4">{course.lessons} 课时</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}