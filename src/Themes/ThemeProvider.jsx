import React from "react"

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") || "normal";
    })

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return React.useContext(ThemeContext);
}