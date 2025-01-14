import User from "../../assets/user-2.png";
import {HiArrowUpRight, HiPhone, HiUser} from "react-icons/hi2";
import {HiLocationMarker, HiMail} from "react-icons/hi";
import {BiSolidQuoteAltLeft} from "react-icons/bi";

function AboutContent() {
    return (
        <div className="flex my-28 ml-[115px] justify-between mr-5 items-center">
            <div className="flex flex-col gap-5">
                <span className="font-semibold text-lg italic">Nice to meet you!</span>
                <span className="font-bold text-5xl uppercase">Welcome to...</span>
                <div className="flex justify-center">
                    <img alt="" src={User}/>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <span
                        className="text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-l from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">Refan Surya</span>
                    <span className="text-2xl"><span
                        className="font-bold italic">Fullstack Developer</span> based in <span
                        className="font-bold italic">Indonesia</span></span>
                    <div className="flex gap-2 items-center mt-3">
                        <span className="text-lg font-medium underline cursor-pointer">Download CV</span>
                        <span className="bg-black">
                            <HiArrowUpRight className="size-6 text-white"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 max-w-[660px]">
                <div className="flex gap-10 font-bold italic border-b-2 pb-7">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <span>
                                <HiPhone/>
                            </span>
                            +6283162443210
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>
                                <HiMail/>
                            </span>
                            refandasuryasaputra@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <span>
                                <HiUser/>
                            </span>
                            22 yrs
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>
                                <HiLocationMarker/>
                            </span>
                            Semarang City, Indonesia
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className="flex items-center gap-5 bg-black p-10 text-white">
                    <span className="opacity-20">
                        <BiSolidQuoteAltLeft className="size-[64px]"/>
                    </span>
                    <span className="text-white font-semibold text-xl italic">
                        "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;