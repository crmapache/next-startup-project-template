import { ImageProps as NextImageProps } from 'next/dist/client/image'

export type ImageProps = {
  src: string
  width: number
  height: number
  fill?: boolean
  alt?: string
}
