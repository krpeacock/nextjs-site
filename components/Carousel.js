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
      activeItemSrc: activeItemSrc
    })
  }
  
  step(event){
    var target = event.currentTarget;
    var direction = target['dataset']['direction'];
    var carouselItems = this.state.carouselItems
    
    let activeIndex = this.state.activeIndex;
    if (direction === "forward" && activeIndex < carouselItems.length - 1) activeIndex++
    if (direction === "back" && activeIndex > 0)  activeIndex--
    let activeItem = carouselItems[activeIndex]
    let activeItemSrc = activeItem['src']

    this.setState({activeIndex, activeItem, activeItemSrc})
  }

  render(){
    let carouselTiles = this.state.carouselItems.map((item, index)=>{
      return (
        <li key={item.title + index}>
          <img src={item.src}/>
          <h3>{item.title}</h3>
        </li>
      )
    })
    var activeItemSrc = this.state.activeItemSrc
    return <section className="carousel" aria-labelledby="carouselheading">
      <h3 id="carouselheading" className="is-hidden">Past projects</h3>
      <div 
        className="carouselActiveImage"
        style={{
          width: '80vw',
          height: '60vw',
          margin: 'auto',
          backgroundImage: `url(${activeItemSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <button 
          title="carousel back button"
          data-direction="back"
          onClick={this.step.bind(this)}
        >
          <Icon icon="play-left"/>
        </button>
        <button 
          title="carousel forward button"
          data-direction="forward"
          onClick={this.step.bind(this)}
        >
          <Icon icon="play-right"/>
        </button>
      </div>
      <ul>
        {carouselTiles}
      </ul>
      <style jsx>{`
        .is-hidden {
          visibility: hidden
        }
        .carouselActiveImage {
          width: '80vw',
          height: '60vw',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }
      `}</style>
    </section>
  }
}