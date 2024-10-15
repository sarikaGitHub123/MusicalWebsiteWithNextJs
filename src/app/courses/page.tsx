'use client'
import { BackgroundGradient } from "@/components/ui/background-gradient"

const MainComp = () =>{
    return(
    <div className="h-screen flex items-center flex justify-center">
        <BackgroundGradient>
        <h1 className="text-2xl font-bold p-10">This is CourseComp</h1>
        </BackgroundGradient>
    </div>
    )
}


export default MainComp