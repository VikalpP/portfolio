import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { COLOR, useTheme } from '../theme'
import { Text } from '../text'

type Item<T> = { key: T; title: string; experienceTime: string }

interface Props<T> {
  items: Item<T>[]
  selectedItem?: T
  onSelect?: (key: T) => void
}

export function Selector<T>({ items, selectedItem, onSelect }: Props<T>) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { getColor } = useTheme()

  const selectedTextStyle: CSSProperties = useMemo(
    () => ({
      color: getColor(COLOR.ACCENT),
      fontWeight: 500,
      fontSize: 24,
      transition: 'font-size 300ms ease',
    }),
    [getColor],
  )

  const unselectedTextStyle: CSSProperties = useMemo(
    () => ({
      color: getColor(COLOR.ACCENT),
      opacity: 0.5,
      fontWeight: 300,
      fontSize: 18,
      transition: 'font-size 300ms ease',
    }),
    [getColor],
  )

  const lineStyle: CSSProperties = useMemo(
    () => ({
      opacity: 0.5,
      height: 'calc(100% + 16px)',
      marginTop: -8,
      borderColor: getColor(COLOR.ACCENT),
    }),
    [getColor],
  )

  const selectionLineStyle: CSSProperties = useMemo(
    () => ({
      top: `${(selectedIndex / items.length) * 100}%`,
      borderColor: getColor(COLOR.ACCENT),
      transition: 'top 300ms ease',
    }),
    [getColor, items.length, selectedIndex],
  )

  const onPressItem = useCallback(
    (item: Item<T>, index: number) => () => {
      setSelectedIndex(index)
      onSelect?.(item.key)
    },
    [onSelect],
  )

  useEffect(() => {
    if (selectedItem) {
      setSelectedIndex(items.findIndex(i => i.key === selectedItem))
    }
  }, [selectedItem, items])

  return (
    <div className='flex justify-end'>
      <div className='flex flex-column'>
        {items.map((item, index) => (
          <span
            key={index}
            className='h3 pa3 flex items-end justify-end pointer flex-shrink-0 flex-column'
            onClick={onPressItem(item, index)}
            style={selectedIndex === index ? selectedTextStyle : unselectedTextStyle}
          >
            {item.title}
            <Text fontSize={10} thin italic style={{ marginTop: 2 }}>
              {item.experienceTime}
            </Text>
          </span>
        ))}
      </div>

      <div className='ml3 h-100 relative'>
        <div className='ba br-pill' style={lineStyle} />
        <div className='absolute ba br-pill h3' style={selectionLineStyle} />
      </div>
    </div>
  )
}
