import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import styles from './Modal.module.css'

class Next extends Component {
  render() {
    const { disable } = this.props;
    return (
      <div className={classNames(styles.arrow, styles.arrow_next, { [styles.arrow_disable]: disable })} onClick={this.handleClick}>
        <FontAwesomeIcon icon="angle-right" size="10x"/>
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

Next.propTypes = {
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Next
