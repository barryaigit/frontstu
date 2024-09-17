'use client'

import { useState } from 'react'
import { ChevronLeft, Bookmark, MoreHorizontal, Play, Star, Check, ChevronUp, ChevronDown, Lock, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export function CourseDetailsComponent() {
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    basics: false,
    research: false,
    design: false,
    evaluation: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section as keyof typeof prev]: !prev[section as keyof typeof prev]
    }))
  }

  return (
    <div className="w-[375px] mx-auto bg-white font-['Noto Sans SC']">
      {/* 头部 */}
      <header className="flex items-center justify-between px-5 h-[90px]">
        <div className="flex items-center">
          <ChevronLeft className="w-5 h-5 text-[#9095A1] mr-4" />
          <h1 className="text-[18px] font-bold">课程详情</h1>
        </div>
        <div className="flex items-center">
          <Bookmark className="w-6 h-6 text-[#171A1F] mr-4" />
          <MoreHorizontal className="w-6 h-6 text-[#171A1F]" />
        </div>
      </header>

      {/* 课程横幅 */}
      <div className="relative h-[243px] bg-[#E16DDE] w-full">
        <Image
          src="/placeholder.svg"
          alt="课程讲师"
          width={174}
          height={219}
          className="absolute right-0 bottom-0 h-[219px] w-[174px] object-cover"
        />
        <div className="absolute bottom-[24px] left-[24px] text-white">
          <p className="text-[14px] mb-1 text-[#171A1F]">UX基础</p>
          <h2 className="text-[24px] font-extrabold mb-2 text-[#0C3C61] leading-[36px]">用户体验设计<br />入门</h2>
          <div className="flex items-center">
            <Play className="w-[56px] h-[56px] text-white bg-white bg-opacity-30 rounded-full p-3" />
          </div>
        </div>
      </div>

      {/* 课程信息 */}
      <div className="px-5">
        <h3 className="text-[16px] font-bold mb-2 text-[#171A1F] mt-4">UX基础：用户体验设计入门</h3>
        <div className="flex items-center text-[12px] mb-4">
          <div className="flex items-center mr-4">
            <Star className="w-[14px] h-[14px] text-[#EFB034] fill-current" />
            <span className="ml-1 text-[#171A1F]">4.5 (1233)</span>
          </div>
          <span className="text-[#171A1F]">12 课时</span>
        </div>

        {/* 标签页 */}
        <div className="flex border-b mb-4 w-full">
          <button className="pb-2 px-4 text-[#565D6D] flex-1 text-[14px]">概览</button>
          <button className="pb-2 px-4 text-[#6355D8] border-b-2 border-[#6355D8] font-bold flex-1 text-[14px]">课程</button>
          <button className="pb-2 px-4 text-[#565D6D] flex-1 text-[14px]">评价</button>
        </div>

        {/* 课程列表 */}
        <div className="space-y-4">
          {/* 第一节课 */}
          <div className="border border-[#BDC1CA] rounded-md w-full">
            <button 
              className="flex justify-between items-center p-2 cursor-pointer w-full"
              onClick={() => toggleSection('intro')}
              aria-expanded={expandedSections.intro}
            >
              <span className="font-bold text-[16px] text-[#171A1F]">一、介绍</span>
              {expandedSections.intro ? (
                <ChevronUp className="w-4 h-4 text-[#171A1F]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#171A1F]" />
              )}
            </button>
            {expandedSections.intro && (
              <div className="p-4 border-t border-[#DEE1E6]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">什么是用户体验设计</p>
                    <p className="text-[12px] text-[#9095A1]">01:23 分钟</p>
                  </div>
                  <Check className="w-5 h-5 text-[#379AE6]" />
                </div>
                <div className="flex items-center justify-between bg-[#F3F2FC] p-4 rounded-md border border-[#6355D8]">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">用户体验设计的重要性</p>
                    <p className="text-[12px] text-[#171A1F]">01:23 分钟</p>
                  </div>
                  <Play className="w-5 h-5 text-[#6355D8]" />
                </div>
              </div>
            )}
          </div>

          {/* 第二节课 */}
          <div className="border border-[#BDC1CA] rounded-md w-full">
            <button 
              className="flex justify-between items-center p-2 cursor-pointer w-full"
              onClick={() => toggleSection('basics')}
              aria-expanded={expandedSections.basics}
            >
              <span className="font-bold text-[16px] text-[#171A1F]">二、UX设计基础</span>
              {expandedSections.basics ? (
                <ChevronUp className="w-4 h-4 text-[#171A1F]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#171A1F]" />
              )}
            </button>
            {expandedSections.basics && (
              <div className="p-4 border-t border-[#DEE1E6]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">用户中心设计原则</p>
                    <p className="text-[12px] text-[#9095A1]">02:15 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">设计思维过程</p>
                    <p className="text-[12px] text-[#9095A1]">03:45 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
              </div>
            )}
          </div>

          {/* 第三节课 */}
          <div className="border border-[#BDC1CA] rounded-md w-full">
            <button 
              className="flex justify-between items-center p-2 cursor-pointer w-full"
              onClick={() => toggleSection('research')}
              aria-expanded={expandedSections.research}
            >
              <span className="font-bold text-[16px] text-[#171A1F]">三、规划你的UX研究</span>
              {expandedSections.research ? (
                <ChevronUp className="w-4 h-4 text-[#171A1F]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#171A1F]" />
              )}
            </button>
            {expandedSections.research && (
              <div className="p-4 border-t border-[#DEE1E6]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">确定研究目标</p>
                    <p className="text-[12px] text-[#9095A1]">01:23 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">选择合适的研究方法</p>
                    <p className="text-[12px] text-[#9095A1]">01:23 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
              </div>
            )}
          </div>

          {/* 第四节课 */}
          <div className="border border-[#BDC1CA] rounded-md w-full">
            <button 
              className="flex justify-between items-center p-2 cursor-pointer w-full"
              onClick={() => toggleSection('design')}
              aria-expanded={expandedSections.design}
            >
              <span className="font-bold text-[16px] text-[#171A1F]">四、设计过程</span>
              {expandedSections.design ? (
                <ChevronUp className="w-4 h-4 text-[#171A1F]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#171A1F]" />
              )}
            </button>
            {expandedSections.design && (
              <div className="p-4 border-t border-[#DEE1E6]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">创建用户画像</p>
                    <p className="text-[12px] text-[#9095A1]">02:30 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">设计原型</p>
                    <p className="text-[12px] text-[#9095A1]">03:15 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
              </div>
            )}
          </div>

          {/* 第五节课 */}
          <div className="border border-[#BDC1CA] rounded-md w-full">
            <button 
              className="flex justify-between items-center p-2 cursor-pointer w-full"
              onClick={() => toggleSection('evaluation')}
              aria-expanded={expandedSections.evaluation}
            >
              <span className="font-bold text-[16px] text-[#171A1F]">五、评估与迭代</span>
              {expandedSections.evaluation ? (
                <ChevronUp className="w-4 h-4 text-[#171A1F]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#171A1F]" />
              )}
            </button>
            {expandedSections.evaluation && (
              <div className="p-4 border-t border-[#DEE1E6]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">用户测试方法</p>
                    <p className="text-[12px] text-[#9095A1]">02:45 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] text-[#171A1F]">分析反馈并迭代</p>
                    <p className="text-[12px] text-[#9095A1]">02:00 分钟</p>
                  </div>
                  <Lock className="w-4 h-4 text-[#9095A1]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 底部 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DEE1E6] px-5 flex justify-between items-center h-[72px] w-[375px] mx-auto">
        <div>
          <p className="text-[18px] font-bold text-[#171A1F]">¥1799</p>
          <div className="flex items-center text-[12px] text-[#9095A1]">
            <span className="mr-2">80% 折扣</span>
            <span className="line-through">¥8995</span>
          </div>
        </div>
        <button className="bg-[#6355D8] text-white px-4 py-2 rounded-md flex items-center h-[36px]">
          <ShoppingCart className="w-4 h-4 mr-2" />
          加入购物车
        </button>
      </div>
    </div>
  )
}