import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'

const Preview = ({ active, src, onClick })=> (
  <li className={styles.image_wrap} onClick={onClick}>
    <div className={classNames(styles.image, { [styles.image_active]: active })}>
      <img src={src} alt="preview image"/>
    </div>
  </li>
)

Preview.propTypes = {
  active: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired

}

export default Preview
