import React, { createContext, useContext, useState } from 'react'

const themeContext = createContext()
const themeUpdateContext = createContext()

export const useTheme = () => {
    return useContext(themeContext)
}
export const useUpdateTheme = () => {
    return useContext(themeUpdateContext)
}

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(prev => !prev)
    }
  return (
    <themeContext.Provider value={darkTheme}>
        <themeUpdateContext.Provider value={toggleTheme}>
            {children}
        </themeUpdateContext.Provider>
    </themeContext.Provider>
  )
}

export default ThemeProvider