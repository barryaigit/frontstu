'use client'

import Image from 'next/image'
import { Bell, Calendar, Home, MoreVertical, Plus, Search } from 'lucide-react'

const members = [
  { name: 'Carlos Garcia', role: 'Owner', initials: 'CG', bgColor: 'bg-purple-200' },
  { name: 'Jennifer Robinson', role: 'Member', initials: 'JR', bgColor: 'bg-blue-200' },
  { name: 'Anthony Davis', role: 'Member', initials: 'AD', bgColor: 'bg-pink-200' },
]

// 修改 PlaceholderAvatar 组件
const PlaceholderAvatar = ({ initials, bgColor, size = 'large' }: { initials: string; bgColor: string; size?: 'small' | 'large' }) => {
  const sizeClasses = size === 'small' ? 'w-9 h-9 text-sm' : 'w-[90px] h-[90px] text-2xl';
  return (
    <div className={`${sizeClasses} rounded-full ${bgColor} flex items-center justify-center font-bold text-gray-700`}>
      {initials}
    </div>
  );
};

export function MemberManagement() {
  return (
    <div className="w-[390px] h-[844px] bg-white shadow-md relative">
      <header className="h-[180px] bg-white rounded p-4">
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

      <main className="p-5 grid grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={index} className="w-[166px] h-[178px] bg-white border border-[#DEE1E6] rounded-lg p-3 relative flex flex-col items-center justify-center">
            <button className="absolute right-3 top-3">
              <MoreVertical size={20} className="text-[#6F7787]" />
            </button>
            <PlaceholderAvatar initials={member.initials} bgColor={member.bgColor} />
            <h3 className="mt-2 font-semibold text-sm text-[#323743]">{member.name}</h3>
            <p className="text-xs text-[#9095A1]">{member.role}</p>
          </div>
        ))}
        <div className="w-[166px] h-[178px] bg-[#F5F1FE] border border-[#DEE1E6] rounded-lg p-3 relative">
          <button className="absolute right-3 top-3">
            <MoreVertical size={20} className="text-[#6F7787]" />
          </button>
          <div className="w-[90px] h-[90px] mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
            <Plus size={32} className="text-[#6D31ED]" />
          </div>
          <h3 className="text-center font-semibold text-sm text-[#323743]">Invite people</h3>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-20 bg-white shadow-md">
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