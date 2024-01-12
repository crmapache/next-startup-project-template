'use client'

import Image from 'next/image'

import { ResponsiveImageProps } from './ResponsiveImage.types'

export const ResponsiveImage = ({ src, alt = '', ...rest }: ResponsiveImageProps) => {
  return (
    <Image
      {...rest}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      alt={alt}
    />
  )
}
