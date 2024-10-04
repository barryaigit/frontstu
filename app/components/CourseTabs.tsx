export default function CourseTabs() {
    return (
      <div className="flex justify-between mx-5 mt-6">
        <div className="w-[77.34px] text-center border-b-4 border-[#636AE8] pb-3">
          <span className="text-sm font-bold text-[#636AE8]">全部</span>
        </div>
        <div className="w-[122.34px] text-center pb-3">
          <span className="text-sm text-[#565E6C]">进行中</span>
        </div>
        <div className="w-[137.34px] text-center pb-3">
          <span className="text-sm text-[#565E6C]">已完成</span>
        </div>
      </div>
    )
  }