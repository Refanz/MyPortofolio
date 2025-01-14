import {HiArrowUpRight, HiLink} from "react-icons/hi2";

function ContactContent() {
    return (
        <div className="flex my-28 ml-[115px] justify-between mr-5">
            <div className="flex flex-col gap-10 max-w-[433px]">
                <div className="flex flex-col gap-5">
                    <span className="font-semibold text-lg italic">Contact</span>
                    <span className="font-bold text-5xl uppercase">Reach Out Me</span>
                </div>
                <span>
                    South Patriot Street 70, Semarang City, Central Java, Indonesia.
                </span>
                <div className="flex flex-col gap-5 text-[32px] font-bold mt-16">
                    <span>+62 83162443210</span>
                    <span>refandasuryasaputra@gmail.com</span>
                </div>
                <div className="flex gap-5 uppercase text-[16px] mt-16 font-medium">
                    <a href="https://github.com/Refanz" target="_blank">Github</a>
                    <a href="" target="_blank">Twitter</a>
                    <a href="https://www.instagram.com/refan_surya/" target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/in/refanda-surya-saputra-966b26216/" target="_blank">Linkedin</a>
                </div>
            </div>
            <div
                className="h-[536px] py-16 px-[85px] w-[775px] bg-gradient-to-l from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
                <form className="flex flex-col gap-5 text-white">
                    <span className="text-[40px] font-bold  uppercase">Any Project?</span>
                    <div className="flex justify-between mt-5 gap-10">
                        <div className="flex flex-col flex-1">
                            <label className="uppercase">Name</label>
                            <input className="bg-transparent border-b-2 focus:outline-0 py-1"/>
                        </div>
                        <div className="flex flex-col flex-1">
                            <label className="uppercase">Email</label>
                            <input className="bg-transparent border-b-2 focus:outline-0 py-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 mt-10">
                        <label className="uppercase">Message</label>
                        <input className="bg-transparent border-b-2 focus:outline-0 py-1"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <HiLink/>
                        <label className="uppercase cursor-pointer" htmlFor="inputFile">
                            Attach File
                        </label>
                        <input type="file" id="inputFile" className="invisible"/>
                    </div>
                    <button className="flex items-center gap-5 w-fit min-h-14 py-[18px] px-10 bg-black text-center cursor-pointer">
                        <span className="text-lg">
                            Submit Now
                        </span>
                        <span className="bg-gradient-to-l">
                            <HiArrowUpRight className="size-6"/>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactContent;