import React from 'react'
import { PropTypes } from 'prop-types'
import RenderIntoBody from '../../common/RenderIntoBody'
import styles from './Modal.module.css'

const Backdrop = ({ onClick })=> (
  <RenderIntoBody>
    <div className={styles.backdrop} onClick={onClick}></div>
  </RenderIntoBody>
)

Backdrop.propTypes = {
  onClick: PropTypes.func
}

export default Backdrop
