'use client'

import Image from 'next/image'
import { Book, Home, Search, User } from 'lucide-react'
import { BottomNavigation } from "@/components/BottomNavigation"

export default function MyCoursesPage() {
  return (
    <div className="w-[375px] h-[964px] bg-white shadow-md relative font-sans">
      {/* 头部 */}
      <header className="h-[76px] bg-white flex items-center justify-center">
        <h1 className="text-[18px] font-bold text-[#171A1F]">我的课程</h1>
      </header>

      {/* 可滚动内容 */}
      <div className="h-[calc(100%-141px)] overflow-y-auto">
        {/* 推广横幅 */}
        <div className="mx-5 mt-6 h-[150px] bg-[#E8618C] rounded-md shadow-sm p-5 flex">
          <div>
            <h2 className="text-[16px] font-bold text-[#12177A] w-[180px] leading-[26px]">
              提升你职业生涯的课程！
            </h2>
            <button className="mt-3 px-2 py-1.5 bg-[#4850E4] text-white text-xs rounded">
              立即查看
            </button>
          </div>
          <Image
            src="/placeholder.svg"
            alt="职业提升"
            width={140}
            height={130}
            className="ml-auto"
          />
        </div>

        {/* 课程标签 */}
        <div className="flex justify-between mx-5 mt-6">
          <div className="w-[77.34px] text-center border-b-4 border-[#636AE8] pb-3">
            <span className="text-sm font-bold text-[#636AE8]">全部</span>
          </div>
          <div className="w-[122.34px] text-center pb-3">
            <span className="text-sm text-[#565E6C]">进行中</span>
          </div>
          <div className="w-[137.34px] text-center pb-3">
            <span className="text-sm text-[#565E6C]">已完成</span>
          </div>
        </div>

        {/* 课程列表 */}
        <div className="mt-6 space-y-4 pb-4">
          {[
            { title: 'UX基础', duration: '2小时25分钟', progress: 30 },
            { title: '创意艺术设计', duration: '3小时25分钟', progress: 70 },
            { title: '应用调色板', duration: '4小时50分钟', progress: 100 },
            { title: 'UI设计中的排版', duration: '4小时50分钟', progress: 50 },
          ].map((course, index) => (
            <div key={index} className="mx-5 h-[120px] bg-white rounded-md shadow-sm flex p-3">
              <Image
                src="/placeholder.svg"
                alt={course.title}
                width={96}
                height={96}
                className="rounded-lg"
              />
              <div className="ml-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#171A1F]">{course.title}</h3>
                  <p className="text-xs text-[#9095A0] mt-1">{course.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9095A0]">已完成 {course.progress}%</p>
                  <div className="w-[207px] h-1 bg-[#CED0F8] rounded-full mt-1">
                    <div
                      className="h-full bg-[#636AE8] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNavigation />
    </div>
  )
}