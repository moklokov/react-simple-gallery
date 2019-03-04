import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import stylesArrow from './Arrow.module.css'
import styles from './Prev.module.css'

const Prev = ({ disable, onClick })=> (
  <div className={classNames(stylesArrow.root, styles.root, { [stylesArrow.disable]: disable })} onClick={disable ? undefined : onClick}>
    <span className={classNames(stylesArrow.arrow, styles.arrow)}>&lt;</span>
  </div>
)

Prev.propTypes = {
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Prev
