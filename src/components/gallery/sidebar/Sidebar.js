import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Preview from './Preview'
import styles from './Sidebar.module.css'

const Sidebar = ({ active, images, onChangeActive })=> (
  <ul className={classNames("clearfix", styles.root)}>
    {images.map((image, index) => <Preview key={index} src={image.preview} active={index === active}
      onClick={()=> onChangeActive(index)}/>)}
  </ul>
)

Sidebar.propTypes = {
  active: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.string.isRequired
    })
  ).isRequired,
  onChangeActive: PropTypes.func.isRequired
}

export default Sidebar
