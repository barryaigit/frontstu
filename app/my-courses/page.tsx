import PromoBanner from '../components/PromoBanner'
import CourseTabs from '../components/CourseTabs'
import CourseList from '../components/CourseList'
import Navigation from '../components/Navigation'

export default function CoursesPage() {
  return (
    <div className="w-[375px] h-[964px] bg-white shadow-md relative">
      <header className="h-[76px] bg-white flex items-center justify-center">
        <h1 className="text-[18px] font-bold text-[#171A1F]">我的课程</h1>
      </header>
      
      <div className="h-[calc(100%-141px)] overflow-y-auto">
        <PromoBanner />
        <CourseTabs />
        <CourseList />
      </div>

      <Navigation />
    </div>
  )
}