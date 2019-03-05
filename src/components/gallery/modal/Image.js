import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ActiveNumber from '../slider/ActiveNumber'
import styles from './Modal.module.css'

class Image extends Component {
  render() {
    const { count, active, image } = this.props;
    return (
      <div className={styles.img_wrap}>
        <img className={styles.img} src={image.large} onClick={this.handleClick}/>
        <div className="text-center">
          <ActiveNumber count={count} active={active}/>
        </div>
      </div>
    )
  }

  handleClick = (e)=> e.stopPropagation()
}

Image.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  image: PropTypes.shape({
    large: PropTypes.string.isRequired
  }).isRequired
}

export default Image
