import React from 'react'
import { ContainerMenu, Logo, Nav }  from './HeaderStyle'
import'./Style.css'
export const Header = () => {
  window.addEventListener("scroll", function () {
    var NavMenu = document.querySelector(".containerMenu");
    NavMenu?.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div className='Navv'>
      <ContainerMenu className='containerMenu'>
        <Logo>
          {/* <img src={logo} alt="" /> */}
          <a href=""><img src={require('../Img/logo.png')} alt="" /></a>
        </Logo>
        <Nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Faq</a></li>
            <li><a href="">Review</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </Nav>
      </ContainerMenu>
    </div >
  )
}

