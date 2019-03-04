import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'
import Slider from './slider/Slider'
import ActiveNumber from './ActiveNumber'
import styles from './Gallery.module.css'

class Gallery extends Component {
  state = { images: [
    { large: 'http://lorempixel.com/1024/768/sports/1/', medium: 'http://lorempixel.com/600/400/sports/1/', preview: 'http://lorempixel.com/100/100/sports/1/' },
    { large: 'http://lorempixel.com/1024/768/sports/2/', medium: 'http://lorempixel.com/600/400/sports/2/', preview: 'http://lorempixel.com/100/100/sports/2/' },
    { large: 'http://lorempixel.com/1024/768/sports/3/', medium: 'http://lorempixel.com/600/400/sports/3/', preview: 'http://lorempixel.com/100/100/sports/3/' },
    { large: 'http://lorempixel.com/1024/768/sports/4/', medium: 'http://lorempixel.com/600/400/sports/4/', preview: 'http://lorempixel.com/100/100/sports/4/' },
    { large: 'http://lorempixel.com/1024/768/sports/5/', medium: 'http://lorempixel.com/600/400/sports/5/', preview: 'http://lorempixel.com/100/100/sports/5/' },
    { large: 'http://lorempixel.com/1024/768/sports/6/', medium: 'http://lorempixel.com/600/400/sports/6/', preview: 'http://lorempixel.com/100/100/sports/6/' },
    { large: 'http://lorempixel.com/1024/768/sports/7/', medium: 'http://lorempixel.com/600/400/sports/7/', preview: 'http://lorempixel.com/100/100/sports/7/' },
    { large: 'http://lorempixel.com/1024/768/sports/8/', medium: 'http://lorempixel.com/600/400/sports/8/', preview: 'http://lorempixel.com/100/100/sports/8/' },
    { large: 'http://lorempixel.com/1024/768/sports/9/', medium: 'http://lorempixel.com/600/400/sports/9/', preview: 'http://lorempixel.com/100/100/sports/9/' },
  ] }

  render() {
    const { images } = this.state;
    return (
      <div className={styles.clearfix}>
        <div className={styles.main}>
          <Slider image={images[0]} onNext={this.handleNext} onPrev={this.handlePrev}/>
          <div className="text-center white"><ActiveNumber count={16} active={1}/></div>
        </div>
        <div className={styles.sidebar}>
          <Sidebar images={images}/>
        </div>
      </div>
    )
  }

  handleNext = ()=> {

  }

  handlePrev = ()=> {

  }
}

export default Gallery
