import { ImageProps as NextImageProps } from 'next/dist/client/image'

export type ImageProps = Omit<NextImageProps, 'width' | 'height' | 'alt'> & {
  width: number
  height: number
  alt?: string
}
