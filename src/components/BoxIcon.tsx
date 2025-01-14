import React from "react";

type Props = {
    children: React.ReactElement,
    href: string
}

function BoxIcon({children, href}: Props) {
    return (
        <a href={href} target="_blank" className="flex justify-center items-center size-10 bg-white rounded-full text-black text-3xl">
            {children}
        </a>
    )
}

export default BoxIcon;