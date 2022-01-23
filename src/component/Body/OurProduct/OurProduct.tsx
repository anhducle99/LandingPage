import React from 'react'
import { WrapWhyChooseOurProduct, ContainerWhyChooseOurProduct, WrapContentUp, WrapContentDown } from './OutProduct'

export const OurProduct = () => {
  return (
    <WrapWhyChooseOurProduct>
      <ContainerWhyChooseOurProduct>
        <WrapContentUp>
          <div className="contentup">
            <h5>Why Choose Our Product</h5>
            <h2>We are providing best and high quality products. Why we are best?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </div>
        </WrapContentUp>
        <WrapContentDown>
          <div className="contentdown">
            <div className="imgDown">
              <img src={require('../../Img/watch-img-4.jpg')} alt="loi anh" />
            </div>
            <div className="textDown" >
              <div className="why-chose-single">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cont">
                  <h5>Our all products are high quality and fashionable with lifetime guarantee</h5>
                </div>
              </div>
              <div className="why-chose-single">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cont">
                  <h5>Our all products are high quality and fashionable with lifetime guarantee</h5>
                </div>
              </div>
              <div className="why-chose-single">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cont">
                  <h5>We are providing 24 hours dedicated support for our all customers</h5>
                </div>
              </div>
            </div>
          </div>
        </WrapContentDown>
      </ContainerWhyChooseOurProduct>
    </WrapWhyChooseOurProduct>
  )
}
