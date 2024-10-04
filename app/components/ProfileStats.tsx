export default function ProfileStats() {
    return (
      <div className="flex justify-around mt-6 mb-8">
        <div className="text-center">
          <p className="font-bold text-lg">25</p>
          <p className="text-xs text-gray-500">已保存</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">24</p>
          <p className="text-xs text-gray-500">进行中</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">98</p>
          <p className="text-xs text-gray-500">已完成</p>
        </div>
      </div>
    )
  }