import Image from 'next/image'

export default function PromoBanner() {
  return (
    <div className="mx-5 mt-6 h-[150px] bg-[#E8618C] rounded-md shadow-sm p-5 flex">
      <div>
        <h2 className="text-[16px] font-bold text-[#12177A] w-[180px] leading-[26px]">
          提升你职业生涯的课程！
        </h2>
        <button className="mt-3 px-2 py-1.5 bg-[#4850E4] text-white text-xs rounded">
          立即查看
        </button>
      </div>
      <Image
        src="/Image 51.png"
        alt="职业提升"
        width={140}
        height={130}
        className="ml-auto"
      />
    </div>
  )
}