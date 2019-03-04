import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesArrow from './Arrow.module.css'
import styles from './Next.module.css'

const Next = ({ disable, onClick })=> (
  <div className={classNames(stylesArrow.root, styles.root, { [stylesArrow.disable]: disable })} onClick={disable ? undefined : onClick}>
    <span className={classNames(stylesArrow.arrow, styles.arrow)}>&gt;</span>
  </div>
)

Next.propTypes = {
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Next
