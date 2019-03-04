import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Preview from './Preview'
import styles from './Sidebar.module.css'

const Sidebar = ({ images })=> (
  <ul className={classNames("clearfix", styles.root)}>
    {images.map((image, index) => <Preview key={index} src={image.preview}/>)}
  </ul>
)

Sidebar.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Sidebar
