import React from 'react'
import { WrapOurProduct, ContainerOurProduct, UpOurProduct, DownOurProduct, Div } from './ProductStyle';
import { ListProduct } from './ListProduct';

export const Product = () => {
  return (
    <WrapOurProduct>
      <ContainerOurProduct>
        <UpOurProduct>
          <div className="upContent">
            <h5>Our Product</h5>
            <h2>We have lots of excellent and high quality products. Check now</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </div>
        </UpOurProduct>
        {/* <DownOurProduct>
          <div className="downContent">
            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="downContent">

            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#"> Order Now<i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
          <div className="downContent">

            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
        </DownOurProduct>
        <DownOurProduct>
          <div className="downContent">

            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
          <div className="downContent">

            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
          <div className="downContent">

            <div className="singleContent" >
              <img src={require('../../Img/watch-img.jpg')} alt="error Images" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="#">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
        </DownOurProduct> */}
        <DownOurProduct>
          <ListProduct />
        </DownOurProduct>
      </ContainerOurProduct>
    </WrapOurProduct>
  )
}
