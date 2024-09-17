'use client'

import { useState } from 'react'
import { ChevronLeft, Bookmark, MoreHorizontal, Play, Star, Video, Globe, FileText, Clock, Award, CheckSquare, ShoppingCart, Check, ChevronUp, ChevronDown, Lock } from 'lucide-react'
import Image from 'next/image'

export function CourseDetailsComponent() {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    basics: false,
    research: false,
    design: false,
    evaluation: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      if (section in prev) {
        return { ...prev, [section]: !prev[section as keyof typeof prev] };
      }
      return prev;
    });
  }

  const reviews = [
    {
      name: 'Jinny Oslin',
      avatar: '/placeholder.svg',
      date: 'A day ago',
      rating: 5,
      comment: 'Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum'
    },
    {
      name: 'Jane Barry',
      avatar: '/placeholder.svg',
      date: 'A day ago',
      rating: 4,
      comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est'
    },
    {
      name: 'Claire Mignard',
      avatar: '/placeholder.svg',
      date: '5 days ago',
      rating: 4,
      comment: 'Magna id sint irure in cillum esse nisi dolor laboris ullamco. Consectetur proident ...'
    }
  ]

  return (
    <div className="w-[375px] mx-auto bg-white font-['Noto Sans SC']">
      {/* Header */}
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

      {/* Course Banner */}
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

      {/* Course Info */}
      <div className="px-5">
        <h3 className="text-[16px] font-bold mb-2 text-[#171A1F] mt-4">UX基础：用户体验设计入门</h3>
        <div className="flex items-center text-[12px] mb-4">
          <div className="flex items-center mr-4">
            <Star className="w-[14px] h-[14px] text-[#EFB034] fill-current" />
            <span className="ml-1 text-[#171A1F]">4.5 (1233)</span>
          </div>
          <span className="text-[#171A1F]">12 课时</span>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4 w-full">
          {['overview', 'lessons', 'review'].map((tab) => (
            <button 
              key={tab}
              className={`pb-2 px-4 text-[14px] flex-1 ${activeTab === tab ? 'text-[#6355D8] border-b-2 border-[#6355D8] font-bold' : 'text-[#565D6D]'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'overview' ? '概览' : tab === 'lessons' ? '课程' : '评价'}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Instructor Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="讲师头像"
                  width={36}
                  height={36}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-[14px] font-medium text-[#171A1F]">Sara Weise</p>
                  <p className="text-[12px] text-[#9095A1]">UI/UX 设计师</p>
                </div>
              </div>
              <button className="bg-[#F3F2FC] text-[#6355D8] px-4 py-1 rounded-md text-[11px]">
                关注
              </button>
            </div>

            {/* Course Description */}
            <div className="mb-6">
              <h4 className="text-[16px] font-bold mb-2">课程描述</h4>
              <p className="text-[14px] text-[#171A1F] leading-[22px]">
                本课程将带您深入了解用户体验设计的核心概念和实践方法。从用户研究到原型设计，我们将全面覆盖UX设计的各个方面。适合初学者和希望提升技能的设计师。
                <span className="text-[#6355D8] ml-2">查看更多</span>
              </p>
            </div>

            {/* Course Features */}
            <div className="mb-6">
              <h4 className="text-[16px] font-bold mb-2">课程特点</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Video className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">14小时点播视频</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">母语教师</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">100%免费文档</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">终身学习权限</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">结业证书</span>
                </div>
                <div className="flex items-center">
                  <CheckSquare className="w-6 h-6 text-[#6355D8] mr-4" />
                  <span className="text-[14px] text-[#171A1F]">24/7 支持</span>
                </div>
              </div>
            </div>

            {/* Similar Courses */}
            <div>
              <h4 className="text-[16px] font-bold mb-4">相似课程</h4>
              <div className="space-y-4">
                {[
                  { title: '产品设计', instructor: 'Dennis Sweeney', price: '¥90', rating: '4.5', reviews: '1233', lessons: 12, image: '/placeholder.svg' },
                  { title: '应用调色板', instructor: 'Ramono Wultschner', price: '¥59', rating: '4.5', reviews: '1233', lessons: 12, image: '/placeholder.svg' },
                  { title: '移动UI设计', instructor: 'Ramono Wultschner', price: '¥32', rating: '4.5', reviews: '1233', lessons: 12, image: '/placeholder.svg' },
                ].map((course, index) => (
                  <div key={index} className="flex bg-white shadow-sm rounded-lg p-3">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={96}
                      height={96}
                      className="rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <h5 className="text-[14px] font-bold">{course.title}</h5>
                      <p className="text-[12px] text-[#9095A1] mb-2">{course.instructor}</p>
                      <p className="text-[14px] font-bold text-[#6355D8] mb-2">{course.price}</p>
                      <div className="flex items-center text-[12px]">
                        <Star className="w-3 h-3 text-[#EFB034] fill-current mr-1" />
                        <span className="mr-2">{course.rating}</span>
                        <span className="mr-2">({course.reviews})</span>
                        <span>{course.lessons} 课时</span>
                      </div>
                    </div>
                    <Bookmark className="w-6 h-6 text-[#9095A1]" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'lessons' && (
          <div className="space-y-4">
            {/* Lesson 1 */}
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

            {/* Lesson 2 */}
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

            {/* Additional lessons... */}
            {/* Lesson 3 */}
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

            {/* Lesson 4 */}
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

            {/* Lesson 5 */}
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
        )}

        {activeTab === 'review' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-[#EFB034] fill-current" />
                <span className="text-[20px] font-medium ml-2">4.5/5</span>
                <span className="text-[12px] text-[#565D6D] ml-2">(1233+ reviews)</span>
              </div>
              <button className="text-[12px] text-[#6355D8]">View all</button>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {['All', '5', '4', '3', '2', '1'].map((rating) => (
                <button
                  key={rating}
                  className={`px-3 py-1 rounded-full text-[12px] whitespace-nowrap ${
                    rating === 'All'
                      ? 'bg-[#6355D8] text-white'
                      : 'border border-[#6355D8] text-[#6355D8]'
                  }`}
                >
                  {rating === 'All' ? rating : <><Star className="w-3 h-3 inline mr-1" />{rating}</>}
                </button>
              ))}
            </div>
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#F8F9FA] p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={36}
                    height={36}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-bold text-[12px]">{review.name}</p>
                    <p className="text-[12px] text-[#565D6D]">{review.date}</p>
                  </div>
                  <div className="ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 inline ${
                          i < review.rating ? 'text-[#EFB034] fill-current' : 'text-[#DEE1E6]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[12px]">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DEE1E6] px-5 flex justify-between items-center h-[72px] w-[375px] mx-auto">
        <div>
          <p className="text-[18px] font-bold text-[#171A1F]">¥59</p>
          <div className="flex items-center text-[12px] text-[#9095A1]">
            <span className="mr-2">80% 折扣</span>
            <span className="line-through">¥73.75</span>
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