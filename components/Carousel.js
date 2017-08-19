import React from 'react';
import Icon from './Icon.js';

export default class Carousel extends React.Component {
  componentWillMount(){
    let activeItem, activeItemSrc;
    if (this.props.carouselItems){
      activeItem = this.props.carouselItems[0];
      activeItemSrc = activeItem['src'];
    }
    this.setState({
      carouselItems: this.props.carouselItems,
      activeIndex: 0,
      activeItem: activeItem,
      activeItemSrc: activeItemSrc,
      autoPlay: true
    })
  }
  
  step(direction){
    var carouselItems = this.state.carouselItems

    let activeIndex = this.state.activeIndex;
    if (direction === "forward")
      if( activeIndex < carouselItems.length - 1) 
        activeIndex ++
      else 
        activeIndex = 0;
    else if (direction === "back") 
      if (activeIndex > 0)  
        activeIndex --
      else
        activeIndex = carouselItems.length - 1
    
    this.setActiveIndex(activeIndex)
  }

  setActiveIndex(index){
    var carouselItems = this.state.carouselItems

    let activeItem = carouselItems[index]
    let activeItemSrc = activeItem['src']
    this.setState({
      activeIndex: index,
      activeItem,
      activeItemSrc
    })
  }

  componentDidUpdate(){
    let autoPlay = this.state.autoPlay;
    var autoPlayInterval = setInterval(function(){
      if (autoPlay){
        this.step('forward');
      }
      else {
        clearInterval(autoPlayInterval);
      }
    }.bind(this), 5000)
  }

  render(){
    let carouselTiles = this.state.carouselItems.map((item, index)=>{
      return (
        <li key={index}>
          <div 
            className="thumbnail" 
            style={{
              width: '75px', 
              height: "75px", 
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginRight: '10px'
            }}
            onClick={function(){this.setActiveIndex(index)}.bind(this)}
          />
        </li>
      )
    })
    var activeItemSrc = this.state.activeItemSrc
    return <section className="carousel" aria-labelledby="carouselheading">
      <h3 id="carouselheading" className="is-hidden">Past projects</h3>
      <div className="slider">
        <div className="slider-buttons">
          <button 
            title="carousel back button"
            onClick={function(){this.step('back')}.bind(this)}
            className="back"
          >
            <Icon icon="play-left"/>
          </button>
          <button 
            title="carousel forward button"
            onClick={function(){this.step('forward')}.bind(this)}
            className="forward"
          >
            <Icon icon="play-right"/>
          </button>
        </div>
        <div 
          className="carouselActiveImage"
          style={{
            width: '80vw',
            maxWidth: '700px',
            height: '60vw',
            margin: 'auto',
            backgroundImage: `url(${activeItemSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            marginBottom: '3em'
          }}
        >
        </div>
      </div>
      <ul className="thumbnail-list">
        {carouselTiles}
      </ul>
      <style jsx>{`
        .is-hidden {
          visibility: hidden
        }
        .slider {
          width: 90vw
          max-width: 700px;
          margin: auto
        }
        .carouselActiveImage {
          width: '80vw',
          height: '60vw',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }
        .slider-buttons {
          float: right
          position: relative;
          z-index: 1
        }
        img.thumbnail {
          width: 20px
          margin-right: 10px
        }
        ul.thumbnail-list {
          list-style: none
          width: 80vw
          maxWidth: 700px
          margin: auto
          display: flex
          flex-direction: row
          padding-left: 0
        }
        .thumbnail-list > li {
          display: flex
          width: 30px
          margin-right: 10px
        }
      `}</style>
    </section>
  }
}