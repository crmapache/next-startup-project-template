'use client'

import nextImage from '@assets/next-responsive-image.jpg'

import { Typography } from '@core'
import { ResponsiveImage } from '@core/ResponsiveImage'

import { HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Typography as="h1" variant="title">
        Home
      </Typography>

      <ResponsiveImage src={nextImage.src} />
    </HomePageContainer>
  )
}
