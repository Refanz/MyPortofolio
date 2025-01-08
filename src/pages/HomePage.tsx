import HomeSidebar from "./components/homepage/HomeSidebar.tsx";
import HeroSection from "./components/homepage/HeroSection.tsx";

function HomePage() {
    return (
        <div className="flex">
            <HomeSidebar/>
            <div className="flex flex-1 flex-col h-screen">
                {/*Hero Section*/}
                <div className="h-[960px] max-w-[1635px]">
                    <HeroSection/>
                </div>

                {/*Section 2*/}
                <div>

                </div>

                {/*Section 3*/}
                <div>

                </div>
            </div>
        </div>
    )
}

export default HomePage;