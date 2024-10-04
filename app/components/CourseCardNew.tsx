import Image from 'next/image'

interface CourseCardProps {
  title: string
  image: string
  duration: string
  progress: number
}

export default function CourseCardNew({ title, image, duration, progress }: CourseCardProps) {
  return (
    <div className="mx-5 h-[120px] bg-white rounded-md shadow-sm flex p-3">
      <Image
        src={image}
        alt={title}
        width={96}
        height={96}
        className="rounded-lg"
      />
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-[#171A1F]">{title}</h3>
          <p className="text-xs text-[#9095A0] mt-1">{duration}</p>
        </div>
        <div>
          <p className="text-xs text-[#9095A0]">已完成 {progress}%</p>
          <div className="w-[207px] h-1 bg-[#CED0F8] rounded-full mt-1">
            <div
              className="h-full bg-[#636AE8] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}