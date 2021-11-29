import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { isBrowser } from './helpers'

export const usePrevNext = (min: number, max: number) => {
  const [index, setIndex] = useState<number>(min)
  const onPrev = useCallback(() => setIndex(index => Math.max(min, index - 1)), [min])
  const onNext = useCallback(() => setIndex(index => Math.min(max, index + 1)), [max])
  return [index, onPrev, onNext] as [number, () => void, () => void]
}

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
