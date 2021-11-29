import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Children } from '../../utils'
import { COLOR, THEME, themes } from './colors'
import { ColorPreference, useColorScheme } from './utils'

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
  const colorPreference = useColorScheme()
  const [theme, setTheme] = useState<THEME>(
    colorPreference === ColorPreference.LIGHT ? THEME.LIGHT : THEME.DARK,
  )

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
  }, [])

  const getColor = useCallback(
    (color?: COLOR) => (color ? themes[theme][color] : undefined),
    [theme],
  )

  const value: ThemeContextType = useMemo(
    () => ({ theme, getColor, setTheme, toggleTheme }),
    [theme, getColor, toggleTheme],
  )

  useEffect(() => {
    setTheme(colorPreference === ColorPreference.LIGHT ? THEME.LIGHT : THEME.DARK)
  }, [colorPreference])

  useEffect(() => {
    const backgroundColor = getColor(COLOR.PRIMARY)
    if (backgroundColor) document.body.style.backgroundColor = backgroundColor
  }, [getColor])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
