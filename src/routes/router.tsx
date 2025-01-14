import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.tsx";
import HeroContent from "../features/hero/HeroContent.tsx";
import HeroPage from "../pages/HeroPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import AboutContent from "../features/about/AboutContent.tsx";
import ServicePage from "../pages/ServicePage.tsx";
import ServiceContent from "../features/service/ServiceContent.tsx";
import WorkPage from "../pages/WorkPage.tsx";
import WorkContent from "../features/work/WorkContent.tsx";
import BlogPage from "../pages/BlogPage.tsx";
import BlogContent from "../features/blog/BlogContent.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ContactContent from "../features/contact/ContactContent.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <HeroPage/>,
                children: [
                    {
                        index: true,
                        element: <HeroContent/>
                    }
                ]
            },
            {
                path: "/about",
                element: <AboutPage/>,
                children: [
                    {
                        index: true,
                        element: <AboutContent/>
                    }
                ]
            },
            {
                path: "/services",
                element: <ServicePage/>,
                children: [
                    {
                        index: true,
                        element: <ServiceContent/>
                    }
                ]
            },
            {
                path: "/works",
                element: <WorkPage/>,
                children: [
                    {
                        index: true,
                        element: <WorkContent/>
                    }
                ]
            },
            {
                path: "/blogs",
                element: <BlogPage/>,
                children: [
                    {
                        index: true,
                        element: <BlogContent/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <ContactPage/>,
                children: [
                    {
                        index: true,
                        element: <ContactContent/>
                    }
                ]
            }
        ]
    }
]);

export default router;