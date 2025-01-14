import {HiPlus} from "react-icons/hi2";

function ServiceContent() {
    return (
        <div className="flex flex-col gap-10 my-28 ml-[115px]">
            <div className="flex flex-col gap-5">
                <span className="text-lg font-semibold italic">Service</span>
                <span className="text-5xl font-bold uppercase">My Specialties</span>
            </div>
            <div className="flex flex-col gap-5 mr-10">
                <div className="flex justify-between items-center border-b-2 p-5">
                    <div className="flex gap-4 items-center min-w-[450px]">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <span className="text-[32px] uppercase font-bold">Website Development</span>
                    </div>
                    <span className="text-[16px] max-w-[545px]">
                        I can develop websites for the frontend and backend using technologies such as React, Spring Boot, Tailwind, Slim and Laravel.
                    </span>
                    <span className="text-[32px] cursor-pointer">
                        <HiPlus/>
                    </span>
                </div>
                <div className="flex justify-between items-center border-b-2 p-5">
                    <div className="flex gap-4 items-center min-w-[450px]">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        <span className="text-[32px] uppercase font-bold">Android Development</span>
                    </div>
                    <span className="text-[16px] max-w-[545px]">
                        I can develop Android applications using technologies such as Android Studio, Java, Kotlin, XML, Jetpack Compose, and React Native.
                    </span>
                    <span className="text-[32px] cursor-pointer">
                        <HiPlus/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ServiceContent;