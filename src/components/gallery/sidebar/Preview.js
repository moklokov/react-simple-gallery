import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'

const Preview = ({ src })=> (
  <li className={styles.image_wrap}>
    <div className={styles.image}>
      <img src={src}/>
    </div>  
  </li>
)

Preview.propTypes = {
  src: PropTypes.string.isRequired
}

export default Preview
