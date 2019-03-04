import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesArrow from './Arrow.module.css'
import styles from './Next.module.css'

const Next = ({ onClick })=> (
  <div className={classNames(stylesArrow.root, styles.root)} onClick={onClick}>
    <span className={classNames(stylesArrow.arrow, styles.arrow)}>&gt;</span>
  </div>
)

Next.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Next
