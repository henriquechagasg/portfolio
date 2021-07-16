import { createContext, useContext, useRef, ReactNode, MutableRefObject} from "react";

type LocationContextData = {
    aboutRef: MutableRefObject<HTMLDivElement>,
    projectsRef: MutableRefObject<HTMLDivElement>,
    contactRef: MutableRefObject<HTMLDivElement>,

}

const LocationContext = createContext({} as LocationContextData)

type LocationContextProviderProps = {
    children: ReactNode
}

export const LocationContextProvider = ({children}: LocationContextProviderProps) => {

    const aboutRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)


    return (
        <LocationContext.Provider
        value={{
            aboutRef,
            projectsRef,
            contactRef
        }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => {
    return useContext(LocationContext)
}