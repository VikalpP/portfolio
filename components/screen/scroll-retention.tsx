import { useRouterScroll } from '@moxy/next-router-scroll'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export function useScrollRetention() {
  const ref = useRef<HTMLDivElement>(null)
  const { registerElement, unregisterElement } = useRouterScroll()
  const { route } = useRouter()

  useEffect(() => {
    if (!ref.current) return
    registerElement(`screen:${route}`, ref.current)
    return () => unregisterElement(`screen:${route}`)
  }, [registerElement, route, unregisterElement])

  return ref
}
