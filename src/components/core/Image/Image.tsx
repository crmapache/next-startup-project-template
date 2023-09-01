'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import NextImage from 'next/image'

import { ImageContainer } from './Image.elements'
import { ImageProps } from './Image.types'

export const Image = ({ src, width, height, fill, alt = '' }: ImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [innerWidth, setInnerWidth] = useState<string | number>(0)
  const [innerHeight, setInnerHeight] = useState<string | number>(0)

  const [maxWidth, setMaxWidth] = useState<number | undefined>()

  const setHeight = useCallback(() => {
    const currentWidth = containerRef.current?.offsetWidth

    if (currentWidth !== undefined) {
      const percentage = currentWidth / (width / 100)
      setInnerHeight((height / 100) * percentage)
    }
  }, [width, height])

  useEffect(() => {
    if (!fill) {
      setInnerWidth(width)
      setInnerHeight(height)
    } else {
      setInnerWidth('100%')
      setMaxWidth(width)

      window.addEventListener('resize', setHeight)
    }

    return () => {
      if (fill) {
        window.removeEventListener('resize', setHeight)
      }
    }
  }, [setHeight, fill, width, height])

  return (
    <ImageContainer
      ref={containerRef}
      style={{ width: innerWidth, maxWidth: maxWidth, height: innerHeight }}>
      <NextImage src={src} fill alt={alt} onLoad={setHeight} />
    </ImageContainer>
  )
}
