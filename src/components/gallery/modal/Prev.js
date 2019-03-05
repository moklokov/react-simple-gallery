import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import styles from './Modal.module.css'

class Prev extends Component {
  render() {
    const { disable } = this.props;
    return (
      <div className={classNames(styles.arrow, styles.arrow_left, { [styles.arrow_disable]: disable })} onClick={this.handleClick}>
        <FontAwesomeIcon icon="angle-left" size="10x"/>
      </div>
    )
  }

  handleClick = (e)=> {
    e.stopPropagation();
    if (!this.props.disable) {
      this.props.onClick()
    }
  }
}

Prev.propTypes = {
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Prev
