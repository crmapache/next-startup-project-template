import { ImageProps as NextImageProps } from 'next/image'

export type ResponsiveImageProps = Omit<
  NextImageProps,
  'width' | 'height' | 'alt' | 'fill' | 'sizes' | 'style'
> & {
  alt?: string
}
