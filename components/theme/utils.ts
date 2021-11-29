import { useEffect, useState } from 'react'

export enum ColorPreference {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  NONE = 'NONE',
}

const getUserColorPreference = () => {
  if (typeof window === 'undefined') return ColorPreference.NONE

  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)')

  return darkModeMediaQuery?.matches
    ? ColorPreference.DARK
    : lightModeMediaQuery?.matches
    ? ColorPreference.LIGHT
    : ColorPreference.NONE
}

const addOnChangeListener = (query: string, onChange: (e: MediaQueryListEvent) => void) => {
  const mediaQuery = window.matchMedia(query)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

export function useColorScheme() {
  const [colorPreference, setColorPreference] = useState(getUserColorPreference())
  console.log({ colorPreference })

  useEffect(() => {
    return addOnChangeListener('(prefers-color-scheme: light)', e => {
      setColorPreference(e.matches ? ColorPreference.LIGHT : ColorPreference.DARK)
    })
  }, [])

  return colorPreference
}
