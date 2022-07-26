//https://github.com/GabrielBB/react-context-combining
import React, { createContext } from "react";

const LanguageContext = createContext({
    language: 'JavaScript',
    setLanguage: (string) => string,
})

const AuthContext = createContext({
    login: false,
    setLogin: (bool) => bool,
})

const AppContextProvider = ({ language, login, setLanguage, setLogin, children }) => {
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <AuthContext.Provider value={{ login, setLogin }}>
                {children}
            </AuthContext.Provider>
        </LanguageContext.Provider>
    )
}


export { AppContextProvider, LanguageContext, AuthContext };