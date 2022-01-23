import React from 'react'
import { CaptionContent } from '../Home/HomeStyle'
import { ContainerSubHome, SubHomeContent, CaptionContentSubHome, CaptionImageSubHome, HeroButtonSubHome, Div } from './ProductDemoStyle'

export const ProductDemo = () => {
    return (
        <Div>
      <ContainerSubHome>
        <SubHomeContent>
          <CaptionImageSubHome>
            <div className="videos" style={{ height: "100%"}}>
              <iframe width={"100%"} height={"100%"} src="https://youtu.be/clXBiR01kUM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </CaptionImageSubHome>
          <CaptionContentSubHome>
            <CaptionContent>
            <h5>Product Demo</h5>
            <h2>Watch the demo video for more information about our products.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </p>
            <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            <button>Visit Our Store</button>
            </CaptionContent>
          </CaptionContentSubHome>
        </SubHomeContent>
      </ContainerSubHome>
    </Div>
    )
}
