import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CreateStatusButtonProps {
  onClick: () => void
}

export function CreateStatusButton({ onClick }: CreateStatusButtonProps) {
  return (
    <Button 
      className="fixed bottom-20 right-4 rounded-full w-10 h-10 bg-green-500 hover:bg-green-600 text-white shadow-lg"
      size="icon"
      onClick={onClick}
    >
      <Plus className="h-5 w-5" />
    </Button>
  )
}