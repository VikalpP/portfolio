import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Children } from '../../utils'
import { COLOR, THEME, themes } from './colors'

interface ThemeContextType {
  theme: THEME
  getColor: (color?: COLOR) => string | undefined
  setTheme: (theme: THEME) => void
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType>({} as any)

interface Props {
  children: Children
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<THEME>(THEME.DARK)
  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
  }, [])

  const getColor = useCallback(
    (color?: COLOR) => {
      if (color) return themes[theme][color]
    },
    [theme],
  )

  const value: ThemeContextType = useMemo(
    () => ({ theme, getColor, setTheme, toggleTheme }),
    [theme, getColor, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
