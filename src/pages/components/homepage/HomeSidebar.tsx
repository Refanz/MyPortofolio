import BoxIcon from "../../../components/BoxIcon.js";
import {BiLogoGithub, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi";

function HomeSidebar() {
    return (
        <div className="w-72 bg-[#141313] h-screen">
            <div className="text-white mt-16 ml-12">
                <span className="font-bold text-3xl">RSS</span>
                <nav className="mt-28">
                    <ul className="flex flex-col gap-5 text-xl uppercase">
                        <li>
                            <a className="cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer">About</a>
                        </li>
                        <li>
                            <a className="cursor-pointer">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer">Works</a>
                        </li>
                        <li>
                            <a className="cursor-pointer">Blogs</a>
                        </li>
                        <li>
                            <a className="cursor-pointer">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-3 mt-56">
                    <BoxIcon>
                        <BiLogoInstagram className="text-3xl text-black"/>
                    </BoxIcon>
                    <BoxIcon>
                        <BiLogoGithub className="text-3xl text-black"/>
                    </BoxIcon>
                    <BoxIcon>
                        <BiLogoLinkedin className="text-3xl text-black"/>
                    </BoxIcon>
                </div>
                <span className="block mt-8">Copyright @2024 Refanda Surya. All rights reserved.</span>
            </div>
        </div>
    )
}

export default HomeSidebar;