import User from "../../assets/user.png";
import {HiArrowUpRight, HiPhone} from "react-icons/hi2";
import {HiMail} from "react-icons/hi";
import Vector1 from "../../assets/vector-1.svg";
import Vector2 from "../../assets/vector-2.svg";
import Vector3 from "../../assets/vector-3.svg";
import Vector4 from "../../assets/vector-4.svg";
import Vector5 from "../../assets/vector-5.svg";
import Star from "../../assets/star.svg";
import Dots from "../../assets/dots.svg";
import {BiLogoFacebook, BiLogoGithub, BiLogoInstagram} from "react-icons/bi";

function HeroContent() {
    return (
        <div className="flex my-28 ml-[115px] justify-between mr-5 items-center">
            <div className="flex flex-col gap-10 max-w-[545px] relative">
                <img alt="" src={Vector1} className="absolute -z-10 top-[-5px] left-[-30px]"/>
                <div className="flex flex-col uppercase">
                    <span className="leading-none text-[102px]">
                        My Name Is <span className="font-bold">Refan Surya...</span>
                    </span>
                </div>
                <span className="text-3xl"><span className="font-bold italic">Fullstack Developer</span> based in Indonesia</span>
                <button className="flex justify-center items-center  gap-5 bg-black w-64 h-14 text-white font-bold">
                    Let's talk with me
                    <HiArrowUpRight className="size-[24px] bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"/>
                </button>
                <div className="flex gap-10">
                    <div className="flex gap-4">
                        <span className="flex justify-center items-center size-8 bg-[#141313]/[0.05] rounded-full p-1">
                            <HiPhone/>
                        </span>
                        <span className="text-lg font-bold">
                            +6283162443210
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex justify-center items-center size-8 bg-[#141313]/[0.05] rounded-full p-1">
                            <HiMail/>
                        </span>
                        <span className="text-lg font-bold">
                            refandasuryasaputra@gmail.com
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img alt="" src={Vector2} className="absolute -z-10 top-24 -left-4"/>
                <img alt="" src={Vector3} className="absolute top-20 z-10 -right-12"/>
                <img alt="" src={Vector4} className="absolute top-[276px] z-10 -left-10"/>
                <img alt="" src={Vector5} className="absolute -z-10 top-[465px] -right-1"/>
                <img alt="" src={Dots} className="absolute -z-10 bottom-12 right-10"/>
                <img alt="" src={Star} className="absolute"/>
                <img alt="" src={User}/>
            </div>
            <div className="flex gap-[20px] items-center flex-col">
                <span className="size-10 rounded-full border-[#141313]/[.1] border flex justify-center items-center">
                    <BiLogoInstagram/>
                </span>
                <span className="size-10 rounded-full border-[#141313]/[.1] border flex justify-center items-center">
                    <BiLogoFacebook/>
                </span>
                <span className="size-10 rounded-full border-[#141313]/[.1] border flex justify-center items-center">
                    <BiLogoGithub/>
                </span>
                <span className="h-[131px] w-1 bg-[#141313]/[.3]"></span>
            </div>
        </div>
    )
}

export default HeroContent;