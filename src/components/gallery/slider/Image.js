import React from 'react'
import PropTypes from 'prop-types'
import styles from './Image.module.css'

const Image = ({ src })=> (
  <img className={styles.root} src={src}/>
)

Image.propTypes = {
  src: PropTypes.string.isRequired
}

export default Image
