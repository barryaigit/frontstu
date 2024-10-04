import CourseCardNew from './CourseCardNew'

const courses = [
  { title: 'UX基础', image: '/Image 52.png', duration: '2小时25分钟', progress: 30 },
  { title: '创意艺术设计', image: '/Image 53.png', duration: '3小时25分钟', progress: 70 },
  { title: '应用调色板', image: '/Image 54.png', duration: '4小时50分钟', progress: 100 },
  { title: 'UI设计中的排版', image: '/Image 55.png', duration: '4小时50分钟', progress: 50 },
]

export default function CourseList() {
  return (
    <div className="mt-6 space-y-4 pb-4">
      {courses.map((course, index) => (
        <CourseCardNew key={index} {...course} />
      ))}
    </div>
  )
}