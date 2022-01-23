import React from 'react'
import { WrapFooter, ContainerFooter } from './FooterStyle'
export const Footer = () => {
    return (
        <WrapFooter>
      <ContainerFooter>
        <a href=""><img src={require('../Img/logo.png')} alt="" /></a>
        <h4>Follow Us</h4>
        <ul>
          <li><i className="fab fa-facebook-square"></i></li>
          <li><i className="fab fa-twitter-square"></i></li>
          <li><i className="fab fa-google-plus-square"></i></li>
        </ul>
        <p>© Copyright 2019. All Rights Reserved By <a href="https://omexer.com/">omexer.com</a></p>
      </ContainerFooter>
    </WrapFooter>
    )
}
