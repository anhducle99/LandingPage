import React from 'react'
import { Div, ContainerFeatures, FeatureContent, Content, ItemContainer, ItemFeature, ContainerAuth } from './FeaturesStyle'
import { ListFeatures } from './ListFeatures'
export const Features = () => {
  return (
    <ContainerFeatures>
      <ContainerAuth>
        <FeatureContent>
          <Div className='content'>
            <Content>
              <h5>Core Features</h5>
              <h2>Our product has lots of excellent core features for smart people.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Hic explicabo voluptas nisi iste reiciendis, tempore commondi necessitatibus, laborum laudantium.
              </p>
            </Content>
          </Div>
          <Div className='item'>
            <ItemContainer>
              <ItemFeature >
                <i className="fas fa-globe"></i>
                <h4>GPRS Tracking</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
            <ItemContainer>
              <ItemFeature>
                <i className="fas fa-bell"></i>
                <h4>Notification Alart</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
            <ItemContainer>
              <ItemFeature>
                <i className="fas fa-video"></i>
                <h4>Instant Video Call</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
          </Div>
          <Div className='item'>
            <ItemContainer>
              <ItemFeature>
                <i className="fas fa-comment-alt"></i>
                <h4>User Live Chat</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
            <ItemContainer>
              <ItemFeature>
                <i className="fab fa-android"></i>
                <h4>Install Any App</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
            <ItemContainer>
              <ItemFeature>
                <i className="fas fa-bullseye"></i>
                <h4>Attractive Design</h4>
                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim</p>
              </ItemFeature>
            </ItemContainer>
          </Div>
          {/* <Div className='item'>
            <ListFeatures />
          </Div> */}
        </FeatureContent>
      </ContainerAuth>
    </ContainerFeatures>
  )
}
