import BoxIcon from "../../components/BoxIcon.tsx";
import {BiLogoGithub, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi";
import {Link} from "react-router-dom";

function HomeSidebar() {
    return (
        <div className="w-72 bg-[#141313] p-10 text-white">
            <span className="font-bold text-3xl">RSS</span>
            <nav className="mt-28">
                <ul className="flex flex-col gap-5 text-xl uppercase">
                    <li>
                        <Link className="cursor-pointer" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/works">Works</Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col gap-3 mt-56">
                <BoxIcon href="https://www.instagram.com/refan_surya/">
                    <BiLogoInstagram className="text-3xl text-black"/>
                </BoxIcon>
                <BoxIcon href="https://github.com/Refanz">
                    <BiLogoGithub className="text-3xl text-black"/>
                </BoxIcon>
                <BoxIcon href="https://linkedin.com/in/refanda-surya-saputra-966b26216/">
                    <BiLogoLinkedin className="text-3xl text-black"/>
                </BoxIcon>
            </div>
            <span className="block mt-8">Copyright @2024 Refanda Surya. All rights reserved.</span>
        </div>
    )
}

export default HomeSidebar;