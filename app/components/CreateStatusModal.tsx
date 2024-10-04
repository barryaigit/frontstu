import { useState } from 'react'
import { X, ImageIcon, Calendar, Link2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CreateStatusModalProps {
  isOpen: boolean
  onClose: () => void
  onCreateStatus: (content: string) => void
}

export function CreateStatusModal({ isOpen, onClose, onCreateStatus }: CreateStatusModalProps) {
  const [newStatusContent, setNewStatusContent] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-[#272727]">创建状态</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6 text-[#131313]" />
        </Button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <Textarea
          placeholder="你在想什么？"
          value={newStatusContent}
          onChange={(e) => setNewStatusContent(e.target.value)}
          className="min-h-[200px] text-sm text-[#242424] bg-transparent border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ImageIcon className="h-6 w-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Calendar className="h-6 w-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link2 className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
        </div>
        <Button className="w-full bg-black text-white rounded-md" onClick={() => onCreateStatus(newStatusContent)}>
          发布
        </Button>
      </div>
    </div>
  )
}