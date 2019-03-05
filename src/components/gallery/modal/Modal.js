import React from 'react'
import PropTypes from 'prop-types'
import Prev from './Prev'
import Next from './Next'
import Image from './Image'
import Backdrop from './Backdrop'
import styles from './Modal.module.css'

const Modal = ({ count, active, image, onNext, onPrev, onClose })=> (
  <div className={styles.modal} onClick={onClose}>
    <div className="clearfix">
      <Prev onClick={onPrev} disable={active <= 0}/>
      <Image image={image} count={count} active={active}/>
      <Next onClick={onNext} disable={active >= count - 1}/>
    </div>
    <Backdrop onClick={onClose}/>
  </div>
)

Modal.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
