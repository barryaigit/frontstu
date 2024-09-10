'use client'

import { Bell, Calendar, Home, MoreVertical, Plus, Search } from 'lucide-react'
import { useState, useEffect } from 'react'


const members = [
  { name: 'Carlos Garcia', role: 'Owner', initials: 'CG', bgColor: 'bg-purple-200' },
  { name: 'Jennifer Robinson', role: 'Member', initials: 'JR', bgColor: 'bg-blue-200' },
  { name: 'Anthony Davis', role: 'Member', initials: 'AD', bgColor: 'bg-pink-200' },
  { name: 'Emma Wilson', role: 'Member', initials: 'EW', bgColor: 'bg-green-200' },
  { name: 'Michael Brown', role: 'Member', initials: 'MB', bgColor: 'bg-yellow-200' },
  { name: 'Sophia Lee', role: 'Member', initials: 'SL', bgColor: 'bg-red-200' },
  { name: 'Daniel Kim', role: 'Member', initials: 'DK', bgColor: 'bg-indigo-200' },
  { name: 'Olivia Taylor', role: 'Member', initials: 'OT', bgColor: 'bg-orange-200' },
]

// 修改 PlaceholderAvatar 组件
const PlaceholderAvatar = ({ initials, bgColor, size = 'large' }: { initials: string; bgColor: string; size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'w-9 h-9 text-sm',
    medium: 'w-16 h-16 text-lg',
    large: 'w-[90px] h-[90px] text-2xl'
  }[size];
  return (
    <div className={`${sizeClasses} rounded-full ${bgColor} flex items-center justify-center font-bold text-gray-700`}>
      {initials}
    </div>
  );
};

export function MemberManagement() {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <div className="w-full min-h-screen bg-white shadow-md relative flex flex-col" style={{ height: `${windowHeight}px` }}>
      <header className="flex-none h-auto bg-white rounded p-4">
        <div className="flex justify-between items-center">
          <PlaceholderAvatar initials="ME" bgColor="bg-gray-200" size="small" />
          <button className="text-2xl text-gray-600">•••</button>
        </div>
        <h1 className="text-2xl font-bold text-[#171A1F] mt-10 mb-4">Members</h1>
        <nav className="flex space-x-2">
          <button className="px-4 py-2 text-[#6D31ED] text-sm rounded-full">All files</button>
          <button className="px-4 py-2 bg-[#6D31ED] text-white text-sm rounded-full">Members</button>
          <button className="px-4 py-2 text-[#6D31ED] text-sm rounded-full">Settings</button>
        </nav>
      </header>

      <main className="flex-grow p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {members.map((member, index) => (
          <div key={index} className="bg-white border border-[#DEE1E6] rounded-lg p-3 relative flex flex-col items-center justify-center">
            <button className="absolute right-2 top-2">
              <MoreVertical size={16} className="text-[#6F7787]" />
            </button>
            <PlaceholderAvatar initials={member.initials} bgColor={member.bgColor} size="small" />
            <h3 className="mt-2 font-semibold text-xs sm:text-sm text-[#323743] text-center">{member.name}</h3>
            <p className="text-[10px] sm:text-xs text-[#9095A1]">{member.role}</p>
          </div>
        ))}
        <div className="bg-[#F5F1FE] border border-[#DEE1E6] rounded-lg p-3 relative flex flex-col items-center justify-center">
          <button className="absolute right-2 top-2">
            <MoreVertical size={16} className="text-[#6F7787]" />
          </button>
          <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 bg-white rounded-full flex items-center justify-center">
            <Plus size={24} className="text-[#6D31ED]" />
          </div>
          <h3 className="text-center font-semibold text-xs sm:text-sm text-[#323743]">Invite people</h3>
        </div>
      </main>

      <footer className="flex-none h-20 bg-white shadow-md">
        <nav className="flex justify-around items-center h-full">
          <button className="flex flex-col items-center">
            <Home className="w-6 h-6 text-[#6D31ED]" />
            <span className="text-[10px] font-bold text-[#6D31ED]">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Calendar className="w-6 h-6 text-[#565D6D]" />
            <span className="text-[10px] text-[#565D6D]">Calendar</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-8 h-8 bg-[#6D31ED] rounded-full flex items-center justify-center -mt-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center">
            <Search className="w-6 h-6 text-[#565D6D]" />
            <span className="text-[10px] text-[#565D6D]">Search</span>
          </button>
          <button className="flex flex-col items-center">
            <Bell className="w-6 h-6 text-[#565D6D]" />
            <span className="text-[10px] text-[#565D6D]">Notification</span>
          </button>
        </nav>
      </footer>
    </div>
  )
}