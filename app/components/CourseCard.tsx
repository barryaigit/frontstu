import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkIcon, StarIcon } from "lucide-react"

interface CourseProps {
  title: string
  instructor: string
  price: string
  rating: string
  reviews: string
  lessons: string
  image: string
}

export default function CourseCard({ course }: { course: CourseProps }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex">
          <Image
            alt={course.title}
            className="rounded-lg"
            height={96}
            src={course.image}
            width={96}
          />
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <h4 className="font-bold">{course.title}</h4>
              <BookmarkIcon className="text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">{course.instructor}</p>
            <p className="text-blue-600 font-bold mt-2">{course.price}</p>
            <div className="flex items-center mt-2">
              <StarIcon className="text-yellow-400 w-4 h-4" />
              <span className="text-sm ml-1">
                {course.rating} ({course.reviews})
              </span>
              <span className="text-sm ml-4">{course.lessons} 课时</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}