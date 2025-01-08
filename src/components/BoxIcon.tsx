import React from "react";

type Props = {
    children: React.ReactElement
}

function BoxIcon({children}: Props) {
    return (
        <span className="flex justify-center items-center size-10 bg-white rounded-full text-black text-3xl">
            {children}
        </span>
    )
}

export default BoxIcon;