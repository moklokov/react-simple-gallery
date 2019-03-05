import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Next from './Next'
import Prev from './Prev'
import ActiveNumber from './ActiveNumber'
import styles from './Slider.module.css'

class Slider extends Component {
  state = { isShowArrows: false }

  render() {
    const { image, count, active, onNext, onPrev, onShow } = this.props;
    const { isShowArrows } = this.state;
    return (
      <>
        <div className={styles.root} onMouseEnter={this.handleToggleArrows} onMouseLeave={this.handleToggleArrows}>
          {isShowArrows && <Prev disable={active <= 0} onClick={onPrev}/>}
          <img className={classNames("img-responsive", styles.img)} src={image.medium} onClick={onShow}/>
          {isShowArrows && <Next disable={active >= count - 1} onClick={onNext}/>}
        </div>
        <div className="text-center white">
          <ActiveNumber count={count} active={active + 1}/>
        </div>
      </>
    )
  }

  handleToggleArrows = ()=> this.setState({ isShowArrows: !this.state.isShowArrows })
}

Slider.propTypes = {
  image: PropTypes.shape({
    medium: PropTypes.string.isRequired,
    large: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Slider
