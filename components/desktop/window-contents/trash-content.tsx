import { Trash2 } from "lucide-react"

export function TrashContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-[#808080]">
      <Trash2 className="w-16 h-16 mb-4" />
      <p className="text-sm">Trash is empty</p>
      <p className="text-xs mt-2">0 items</p>
    </div>
  )
}
