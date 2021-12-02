import React from 'react'
import Image from 'next/image'

interface Props {
  skill: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export function SkillImage({ skill }: Props) {
  return (
    <div className='relative h-100' style={{ aspectRatio: `${skill.width} / ${skill.height}` }}>
      <Image
        src={skill.src}
        alt={skill.alt}
        layout='fill'
        className='h-100 object-fit-contain br5-l br4-m br3'
      />
    </div>
  )
}
