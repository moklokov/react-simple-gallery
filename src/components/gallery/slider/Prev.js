import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import arrowStyles from './Arrow.module.css'
import styles from './Prev.module.css'

const Prev = ({ onClick })=> (
  <div className={classNames(arrowStyles.root, styles.root)} onClick={onClick}>
    <span className={classNames(arrowStyles.arrow, styles.arrow)}>&lt;</span>
  </div>
)

Prev.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Prev
