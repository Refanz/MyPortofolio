import React, {createContext, useContext, useState} from "react";

type Props = {
    children: React.ReactElement
}

const PageContext = createContext({});

function usePageContext() {
    return useContext(PageContext);
}

function PageProvider({children}: Props) {
    const [activePage, setActivePage] = useState("");

    const getActivePage = (): string => {
        return activePage;
    }

    return (
        <PageContext.Provider value={{
            getActivePage,
            setActivePage
        }}>
            {children}
        </PageContext.Provider>
    )
}

export {
    usePageContext,
    PageProvider
}