import HomeSidebar from "../features/home/HomeSidebar.tsx";
import {Outlet} from "react-router-dom";

function HomeLayout() {
    return (
        <div className="flex gap-10 h-screen">
            <HomeSidebar/>
            <div className="flex flex-1 flex-col">
                <div className="h-[960px] max-w-[1635px]">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;