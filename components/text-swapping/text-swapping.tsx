import React, { memo, useEffect, useState } from 'react'
import { Text, TextProps } from '../text'

interface Props extends TextProps {
  children: string[]
}

export const TextSwapping = memo(({ children: words, ...textProps }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const wordsCount = words.length

  useEffect(() => {
    const swap = () => {
      setCurrentIndex(prev => (prev + 1) % wordsCount)
    }

    const t = setInterval(swap, 5000)
    return () => clearInterval(t)
  }, [wordsCount])

  return (
    <div className='relative overflow-hidden w-100'>
      {words.map((word, wordIndex) => (
        <div
          className={`flex top-0 ${wordIndex !== currentIndex ? 'absolute' : ''}`}
          key={wordIndex}
        >
          {word.split('').map((letter, letterIndex) => (
            <div
              key={letterIndex}
              style={{
                transform: `translateY(${
                  (currentIndex + 1) % wordsCount === wordIndex
                    ? 110
                    : currentIndex === wordIndex
                    ? 0
                    : -110
                }%)`,
                opacity:
                  (currentIndex === 0
                    ? wordIndex === wordsCount - 1
                    : (currentIndex - 1) % wordsCount === wordIndex) || currentIndex === wordIndex
                    ? 1
                    : 0,
                transition: 'transform 300ms ease',
                transitionDelay: `${letterIndex * 100}ms`,
              }}
            >
              <Text {...textProps}>{letter === ' ' ? '\u00a0' : letter}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
})

TextSwapping.displayName = 'TextSwapping'
