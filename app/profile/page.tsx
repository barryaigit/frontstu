'use client'

import Header from '../components/Header'
import UserInfo from '../components/UserInfo' 
import ProfileStats from '../components/ProfileStats' 
import CourseCard from '../components/CourseCard'
import Navigation from '../components/Navigation'

export default function Page() {
  const courses = [
    {
      title: "产品设计",
      instructor: "丹尼斯·斯威尼",
      price: "¥1290",
      rating: "4.5",
      reviews: "1233",
      lessons: "12",
      image: "/placeholder.svg",
    },
    // ... other courses
  ]

  return (
    <div className="bg-white min-h-screen pb-16 font-sans">
      <Header />
      <UserInfo />
      <ProfileStats />
      <div className="px-4">
        <h3 className="text-lg font-bold mb-4">已保存课程</h3>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  )
}