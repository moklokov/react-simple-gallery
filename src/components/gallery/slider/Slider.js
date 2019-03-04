import React from 'react'
import PropTypes from 'prop-types'
import Next from './Next'
import Prev from './Prev'
import Image from './Image'
import styles from './Slider.module.css'

const Slider = ({ image, onNext, onPrev })=> (
  <div className={styles.root}>
    <Prev onClick={onPrev}/>
    <Image src={image.medium}/>
    <Next onClick={onNext}/>
  </div>
)

Slider.propTypes = {
  image: PropTypes.shape({
    medium: PropTypes.string.isRequired,
    large: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

export default Slider
