import React from 'react'
import Image from 'next/image'

interface Props {
  image: StaticImageData
  alt: string
}

export function SkillImage({ image, alt }: Props) {
  return (
    <div className='relative h-100' style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <Image
        src={image}
        alt={alt}
        layout='fill'
        className='h-100 object-fit-contain br5-l br4-m br3'
      />
    </div>
  )
}
