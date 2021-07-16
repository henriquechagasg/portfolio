import { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext} from "react";

type LanguageContextData = {
    language: String,
    toggleLanguage: () => void
}

const LanguageContext = createContext({} as LanguageContextData)

type LanguageContextProviderProps = {
    children: ReactNode
}

export const LanguageContextProvider = ({children}: LanguageContextProviderProps) => {

    const [language, setLanguage] = useState("pt")
    
    const toggleLanguage = () => {
        if (language === "en") {
            setLanguage("pt")
            return
        }
        setLanguage("en")
    }

    return (
        <LanguageContext.Provider
        value={{
            language,
            toggleLanguage,
        
        }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const UseLanguage = () => {
    return useContext(LanguageContext)
}