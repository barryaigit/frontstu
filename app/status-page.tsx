'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Navigation from "./components/Navigation"
import { StatusHeader } from "./components/StatusHeader"
import { StatusList } from "./components/StatusList"
import { CreateStatusButton } from "./components/CreateStatusButton"
import { CreateStatusModal } from "./components/CreateStatusModal"

export function StatusPageComponent() {
  const [isCreatingStatus, setIsCreatingStatus] = useState(false)

  const handleCreateStatus = (content: string) => {
    console.log('创建新状态:', content)
    setIsCreatingStatus(false)
  }

  return (
    <div className="relative pb-16 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');
        body {
          font-family: 'Noto Sans SC', sans-serif;
        }
      `}</style>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="p-4 bg-[#F8F9FA]">
          <StatusHeader />
        </CardHeader>
        <CardContent className="p-0">
          <StatusList />
        </CardContent>
      </Card>
      <CreateStatusButton onClick={() => setIsCreatingStatus(true)} />
      <CreateStatusModal 
        isOpen={isCreatingStatus}
        onClose={() => setIsCreatingStatus(false)}
        onCreateStatus={handleCreateStatus}
      />
      <Navigation />
    </div>
  )
}