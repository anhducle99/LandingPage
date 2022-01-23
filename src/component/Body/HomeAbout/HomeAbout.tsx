import React from 'react'
import { ContainerSubHome, SubHomeContent, CaptionContentSubHome, CaptionImageSubHome, HeroButtonSubHome, Div } from './HomeStyle1'

export const HomeAbout = () => {
  return (
    <Div>
      <ContainerSubHome>
        <SubHomeContent>
          <CaptionContentSubHome>
            <h5>About Watch</h5>
            <h2>Awesome digital watch can make your life easier</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            </p>
            <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            <ul>
              <li><i className="fas fa-check"></i>High Quality Product</li>
              <li><i className="fas fa-check"></i>Modern And New Design</li>
              <li><i className="fas fa-check"></i>Multiple Color Available</li>
            </ul>
            <button>Read More </button>
          </CaptionContentSubHome>
          <CaptionImageSubHome>
            <img src={require('../../Img/watch-img.jpg')} alt="Image Error" />
          </CaptionImageSubHome>
        </SubHomeContent>
      </ContainerSubHome>
    </Div>
  )
}


