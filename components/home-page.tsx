'use client'

import Image from 'next/image'
import { Bell, ShoppingCart, Home, Search, BookOpen, User, ChevronRight, MessageCircle, Phone, Share2, MoreVertical } from 'lucide-react'

export function HomePageComponent() {
  return (
    <div className="w-full max-w-[375px] mx-auto bg-white min-h-screen relative font-sans text-gray-800">
      {/* 头部 */}
      <header className="bg-[#535CE8] text-white p-5 h-[110px]">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">你好，小红！</h1>
          <div className="flex space-x-4">
            <ShoppingCart className="w-6 h-6" />
            <Bell className="w-6 h-6" />
          </div>
        </div>
        <p className="text-sm">今天想学什么？</p>
      </header>

      {/* 主要内容 */}
      <main className="pb-20">
        {/* 讲师资料卡 */}
        <div className="mx-5 mt-4 mb-6 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative p-4 pb-16">
            <div className="absolute w-16 h-2 bg-white left-1/2 -translate-x-1/2 -top-1 rounded"></div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#CACDF8] rounded-full mb-4 overflow-hidden">
                <Image src="/placeholder.svg" alt="李梦瑶" width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-1">李梦瑶</h2>
              <p className="text-gray-500 mb-4">高级讲师</p>
              <div className="flex space-x-4 mb-4">
                <button className="w-11 h-11 bg-[#535CE8] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </button>
                <button className="w-11 h-11 bg-[#535CE8] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </button>
                <button className="w-11 h-11 bg-[#535CE8] rounded-full flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
                <button className="w-11 h-11 bg-[#535CE8] rounded-full flex items-center justify-center">
                  <MoreVertical className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
              <p className="flex items-center text-sm mb-1">
                <Phone className="w-4 h-4 mr-2" />
                202-555-0123
              </p>
              <p className="text-sm text-gray-500">example@gmail.com</p>
            </div>
          </div>
        </div>

        {/* 特色课程 */}
        <div className="bg-[#F1C932] rounded-lg p-4 mx-5 mb-6 relative overflow-hidden h-[156px]">
          <div>
            <p className="text-[#101778] uppercase text-sm mb-1">项目管理</p>
            <h2 className="text-[#101778] text-2xl font-bold mb-2">八折优惠</h2>
            <button className="bg-[#535CE8] text-white px-4 py-2 rounded text-sm">立即加入</button>
          </div>
          <Image
            src="/placeholder.svg"
            alt="项目管理"
            width={99}
            height={148}
            className="absolute right-2 bottom-2"
          />
        </div>

        {/* 分类 */}
        <section className="mb-6 px-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold">分类</h2>
            <button className="text-[#535CE8] text-sm flex items-center">
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: '商业', icon: '📈', color: 'bg-[#535CE8]' },
              { name: '设计', icon: '✒️', color: 'bg-[#F1C932]' },
              { name: '编程', icon: '{ }', color: 'bg-[#2ACCCF]' },
              { name: '写作', icon: '📄', color: 'bg-[#FE763E]' },
              { name: '影视', icon: '🎥', color: 'bg-[#F1C932]' },
              { name: '语言', icon: '🌐', color: 'bg-[#7B48CC]' }
            ].map((category, index) => (
              <div key={index} className="flex items-center space-x-3 border rounded-md p-2">
                <div className={`w-11 h-11 rounded flex items-center justify-center ${category.color}`}>
                  <span className="text-white text-xl">{category.icon}</span>
                </div>
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 热门课程 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4 px-5">
            <h2 className="text-base font-bold">热门课程</h2>
            <button className="text-[#535CE8] text-sm flex items-center">
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
            <div className="pl-5 flex space-x-4">
              {['PHP 速成', 'Python 入门', 'JavaScript 基础', 'React 精通'].map((course, index) => (
                <div key={index} className="flex-shrink-0 w-[198px] border rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image src="/placeholder.svg" alt={course} width={198} height={116} className="w-full h-[116px] object-cover" />
                    {index === 1 && (
                      <span className="absolute top-4 left-4 bg-[#535CE8] text-white text-xs px-2 py-1 rounded">
                        畅销
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm mb-1">{course}</h3>
                    <p className="text-gray-500 text-xs mb-2">王小明</p>
                    <p className="text-[#535CE8] font-bold text-sm mb-2">¥399</p>
                    <div className="flex items-center text-xs">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>4.5 (1233)</span>
                      <span className="mx-2">•</span>
                      <span>{12 + index} 课时</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pr-5 w-1"></div>
          </div>
        </section>

        {/* 推荐课程 */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4 px-5">
            <h2 className="text-base font-bold">为你推荐</h2>
            <button className="text-[#535CE8] text-sm flex items-center">
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
            <div className="pl-5 flex space-x-4">
              {['网页设计', 'UX 研究方法', '移动应用设计', '数据可视化'].map((course, index) => (
                <div key={index} className="flex-shrink-0 w-[198px] border rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image src="/placeholder.svg" alt={course} width={198} height={116} className="w-full h-[116px] object-cover" />
                    <span className={`absolute top-4 left-4 ${index === 0 ? 'bg-[#535CE8] text-white' : 'bg-[#F1C932] text-[#5C4906]'} text-xs px-2 py-1 rounded`}>
                      {index === 0 ? '畅销' : '八折'}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm mb-1">{course}</h3>
                    <p className="text-gray-500 text-xs mb-2">{index % 2 === 0 ? '李小华' : '张小红'}</p>
                    <p className="text-[#535CE8] font-bold text-sm mb-2">¥{index === 0 ? '399' : '199'}</p>
                    <div className="flex items-center text-xs">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>4.5 ({index === 0 ? '1233' : '1782'})</span>
                      <span className="mx-2">•</span>
                      <span>{9 + index} 课时</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pr-5 w-1"></div>
          </div>
        </section>

        {/* 激励课程 */}
        <section className="mb-6 px-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-bold">激励课程</h2>
            <button className="text-[#535CE8] text-sm flex items-center">
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {['数字肖像绘画', '工作空间装饰', '包装设计'].map((course, index) => (
              <div key={index} className="flex border rounded-lg overflow-hidden h-[120px]">
                <Image src="/placeholder.svg" alt={course} width={96} height={96} className="w-24 h-full object-cover" />
                <div className="p-3 flex-grow">
                  <h3 className="font-bold text-sm mb-1">{course}</h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {index === 0 ? '陈小明' : index === 1 ? '刘小芳' : '黄小伟'}
                  </p>
                  <p className="text-[#535CE8] font-bold text-sm mb-2">
                    ¥{index === 0 ? '459' : index === 1 ? '129' : '599'}
                  </p>
                  <div className="flex items-center text-xs">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>4.5 ({index === 1 ? '33' : '1233'})</span>
                    <span className="mx-2">•</span>
                    <span>{index === 0 ? '12' : index === 1 ? '17' : '14'} 课时</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 顶级讲师 */}
        <section>
          <div className="flex justify-between items-center mb-4 px-5">
            <h2 className="text-base font-bold">顶级讲师</h2>
            <button className="text-[#535CE8] text-sm flex items-center">
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
            <div className="pl-5 flex space-x-4">
              {['陈教授', '李博士', '张老师', '王讲师', '刘教授'].map((teacher, index) => (
                <div key={index} className="flex-shrink-0 w-[152px] border rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg" alt={teacher} width={128} height={93} className="w-full h-[93px] object-cover" />
                  <div className="p-3">
                    <h3 className="font-bold text-sm mb-1">{teacher}</h3>
                    <p className="text-gray-500 text-xs mb-2">
                      {index === 0 ? '北京大学' : index === 1 ? '清华大学' : index === 2 ? '复旦大学' : index === 3 ? '浙江大学' : '上海交通大学'}
                    </p>
                    <div className="flex items-center text-xs">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>4.5 (1233)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pr-5 w-1"></div>
          </div>
        </section>
      </main>

      {/* 底部导航 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <button className="flex flex-col items-center text-[#535CE8]">
          <Home className="w-6 h-6" />
          <span className="text-xs">首页</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Search className="w-6 h-6" />
          <span className="text-xs">搜索</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <BookOpen className="w-6 h-6" />
          <span className="text-xs">我的课程</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <User className="w-6 h-6" />
          <span className="text-xs">个人中心</span>
        </button>
      </nav>
    </div>
  )
}