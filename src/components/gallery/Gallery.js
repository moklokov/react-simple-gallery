import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Sidebar from './sidebar/Sidebar'
import Slider from './slider/Slider'
import Modal from './modal/Modal.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './Gallery.module.css'

library.add(faAngleRight);
library.add(faAngleLeft);

class Gallery extends Component {
  state = {
    active: 0,
    isShowModal: false
  }

  render() {
    const { active, isShowModal } = this.state;
    const { images } = this.props;
    const activeImage = images[active];
    return (
      <div className={classNames("clearfix", styles.wrap)}>
        <div className={styles.main}>
          {activeImage && <Slider image={activeImage} count={images.length} active={active} onNext={this.handleNext} onPrev={this.handlePrev}
              onShow={this.handleToggleModal}/>}
        </div>
        <div className={styles.sidebar}>
          <Sidebar images={images} active={active} onChangeActive={this.handleChangeActive}/>
        </div>
        {isShowModal && <Modal image={activeImage} count={images.length} active={active} onNext={this.handleNext}
            onPrev={this.handlePrev} onClose={this.handleToggleModal}/>}
      </div>
    )
  }

  setActive = (active)=> this.setState({ active });

  setIsShowModal = (isShowModal)=> this.setState(({ isShowModal }))

  handleNext = ()=> this.setActive(this.state.active + 1);

  handlePrev = ()=> this.setActive(this.state.active - 1);

  handleChangeActive = (index)=> this.setActive(index);

  handleToggleModal = ()=> this.setIsShowModal(!this.state.isShowModal)
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      large: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Gallery
