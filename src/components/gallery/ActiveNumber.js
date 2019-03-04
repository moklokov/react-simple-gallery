import React from 'react'
import PropTypes from 'prop-types'

const ActiveNumber = ({ count, active })=> (
  <span>{active}/{count}</span>
)

ActiveNumber.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

export default ActiveNumber
