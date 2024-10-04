import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function UserInfo() {
  return (
    <>
      <div className="relative px-5 pt-5">
        <Image
          alt="个人资料背景"
          className="w-full h-32 object-cover rounded-lg"
          height={128}
          src="/placeholder.svg"
          width={335}
        />
        <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 border-4 border-white z-10">
          <AvatarImage alt="玛莎·罗西" src="/placeholder.svg" />
          <AvatarFallback>玛莎</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold">玛莎·罗西</h2>
        <p className="text-sm text-gray-500">用户体验/界面设计师</p>
      </div>
    </>
  )
}