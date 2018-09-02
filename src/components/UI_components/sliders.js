import React from 'react'
import {Slider, Slide} from 'react-materialize'
import spiderman from '../../images/spiderman.jpg'
import deadpool from '../../images/deadpool.jpg'
import avatar from '../../images/vatar.jpg'

export const Sliders = () => {
  return (
  <Slider>
  <Slide
    src={spiderman}
    title="This is our big Tagline!">
    Here's our small slogan.
  </Slide>
  <Slide
    src={deadpool}
    title="Left aligned Caption"
    placement="left">
    Here's our small slogan.
  </Slide>
  <Slide
    src={avatar}
    title="Right aligned Caption"
    placement="right">
    Here's our small slogan.
  </Slide>
</Slider>
  )
}
