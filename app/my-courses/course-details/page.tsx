'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, MoreVertical, Bookmark, Star, Play, Clock, Globe, FileText, Lock, Award, HeadphonesIcon, ChevronDown, ChevronUp, Check, ShoppingCart } from 'lucide-react'

export default function CourseDetails() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('概览')
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    '第一章': true,
    '第三章': false,
    '第四章': false,
    '第五章': false,
  })

  const tabs = ['概览', '课程', '评价']

  const benefits = [
    { icon: <Clock className="w-5 h-5" />, text: '14小时点播视频' },
    { icon: <Globe className="w-5 h-5" />, text: '母语教师' },
    { icon: <FileText className="w-5 h-5" />, text: '100%免费文档' },
    { icon: <Lock className="w-5 h-5" />, text: '终身访问权限' },
    { icon: <Award className="w-5 h-5" />, text: '课程完成证书' },
    { icon: <HeadphonesIcon className="w-5 h-5" />, text: '24/7 支持' },
  ]

  const similarCourses = [
    { title: '产品设计', instructor: '丹尼斯 史威尼', price: '¥590', rating: '4.5', lessons: 12, image: '/placeholder.svg?height=80&width=80' },
    { title: '应用调色板', instructor: '雷蒙德 伍尔茨纳', price: '¥369', rating: '4.5', lessons: 12, image: '/placeholder.svg?height=80&width=80' },
    { title: '移动UI设计', instructor: '雷蒙德 伍尔茨纳', price: '¥199', rating: '4.5', lessons: 12, image: '/placeholder.svg?height=80&width=80' },
  ]

  const reviews = [
    { name: '金妮 奥斯林', avatar: '/placeholder.svg?height=40&width=40', date: '4天前', rating: 5, comment: 'Nostrud excepteur magna id est quis in aliqua consequat. Exercitation enim eiusmod elit sint laborum' },
    { name: '简 巴里', avatar: '/placeholder.svg?height=40&width=40', date: '1天前', rating: 4, comment: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est' },
    { name: '克莱尔 米纳德', avatar: '/placeholder.svg?height=40&width=40', date: '5天前', rating: 4, comment: 'Magna id sint irure in cillum esse nisi dolor laboris ullamco. Consectetur proident ...' },
  ]

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* 头部 */}
      <header className="flex items-center justify-between p-4">
        <button className="p-2" onClick={handleBack}>
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-bold">课程详情</h1>
        <div className="flex items-center space-x-4">
          <Bookmark className="w-6 h-6 text-gray-600" />
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* 课程横幅 */}
      <div className="relative bg-pink-500 h-60">
        <div className="absolute inset-0 flex flex-col justify-center p-6">
          <span className="text-white text-sm mb-2">用户体验基础</span>
          <h2 className="text-white text-3xl font-bold mb-4">用户体验设计<br />入门课程</h2>
          <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-pink-500" />
          </button>
        </div>
        <Image
          src="/placeholder.svg?height=240&width=180"
          alt="课程讲师"
          width={180}
          height={240}
          className="absolute right-0 bottom-0"
        />
      </div>

      {/* 课程信息 */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">用户体验基础：用户体验设计入门</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">4.5 (1233)</span>
          </div>
          <span>•</span>
          <span>12 课时</span>
        </div>
      </div>

      {/* 标签页 */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === '概览' && (
          <div className="space-y-6">
            {/* 讲师信息 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sara Weise"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">萨拉 维瑟</h4>
                  <p className="text-sm text-gray-600">UI/UX 设计师</p>
                </div>
              </div>
              <button className="px-4 py-1 text-blue-600 border border-blue-600 rounded-full text-sm">
                关注
              </button>
            </div>

            {/* 课程描述 */}
            <div>
              <h4 className="font-semibold mb-2">课程描述</h4>
              <p className={`text-gray-600 text-sm ${isDescriptionExpanded ? '' : 'line-clamp-3'}`}>
                本课程将带您深入了解用户体验设计的基础知识。我们将探讨用户研究、信息架构、交互设计和可用性测试等关键概念。通过实际案例和练习，您将学会如何创造直观、高效且令人愉悦的用户体验。无论您是设计新手还是希望提升技能的专业人士，这门课程都将为您的UX设计之旅奠定坚实的基础。
              </p>
              <button
                className="text-blue-600 text-sm mt-1"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? '收起' : '查看更多'}
              </button>
            </div>

            {/* 课程优势 */}
            <div>
              <h4 className="font-semibold mb-2">课程优势</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="text-blue-600">{benefit.icon}</div>
                    <span className="text-sm text-gray-600">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 相似课程 */}
            <div>
              <h4 className="font-semibold mb-2">相似课程</h4>
              <div className="space-y-4">
                {similarCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold">{course.title}</h5>
                      <p className="text-sm text-gray-600">{course.instructor}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-blue-600 font-semibold">{course.price}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{course.rating} ({course.lessons})</span>
                        </div>
                      </div>
                    </div>
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === '课程' && (
          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => toggleSection('第一章')}
              >
                <span className="font-semibold">第一章 - 介绍</span>
                {expandedSections['第一章'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections['第一章'] && (
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                    <div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">01</span>
                        <span>用户体验设计概述</span>
                      </div>
                      <span className="text-sm text-gray-500">01:23 分钟</span>
                    </div>
                    <Check className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-500 rounded-lg">
                    <div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">02</span>
                        <span>用户体验设计的重要性</span>
                      </div>
                      <span className="text-sm text-gray-800">01:23 分钟</span>
                    </div>
                    <Play className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              )}
            </div>

            <div className="border rounded-lg p-3">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => toggleSection('第三章')}
              >
                <span className="font-semibold">第三章 - 用户研究计划</span>
                {expandedSections['第三章'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections['第三章'] && (
                <div className="mt-3 space-y-3">
                  {[3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-2">{String(num).padStart(2, '0')}</span>
                          <span>{num === 5 ? '用户研究方法综述' : '用户研究的重要性'}</span>
                        </div>
                        <span className="text-sm text-gray-500">01:23 分钟</span>
                      </div>
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border rounded-lg p-3">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => toggleSection('第四章')}
              >
                <span className="font-semibold">第四章 - 进行用户研究</span>
                {expandedSections['第四章'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            <div className="border rounded-lg p-3">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => toggleSection('第五章')}
              >
                <span className="font-semibold">第五章 - 研究结果分析</span>
                {expandedSections['第五章'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}

        {activeTab === '评价' && (
          <div className="space-y-6">
            {/* 总体评分 */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">4.5/5</div>
                <div className="text-sm text-gray-600">(1233+ 评价)</div>
              </div>
              <button className="text-blue-600 text-sm">查看全部</button>
            </div>

            {/* 评分分布 */}
            <div className="flex space-x-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <button key={rating} className={`px-3 py-1 rounded-full text-sm ${rating === 5 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {rating} ★
                </button>
              ))}
            </div>

            {/* 评价列表 */}
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 底部 */}
      <div className="border-t p-4 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold">¥259</span>
          <div className="flex items-center text-sm text-gray-500">
            <span>80%折扣</span>
            <span className="mx-2 line-through">¥1020</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          加入购物车
        </button>
      </div>
    </div>
  )
}