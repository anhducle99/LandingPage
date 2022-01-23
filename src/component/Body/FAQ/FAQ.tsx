import React from 'react'
import { WrapFAQ, ContainerFAQ, UpFAQ, DownFAQ, LeftDownFAQ, RightDownFAQ } from './FAQStyle';

export const FAQ = () => {
    return (
        <WrapFAQ>
        <ContainerFAQ>
          <UpFAQ>
            <div className="upFAQ">
              <h5>FAQ</h5>
              <h2>Frequently asked questions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
            </div>
          </UpFAQ>
          <DownFAQ>
            <LeftDownFAQ>
              <div className="single">
                <h5><a href="">How can I buy the watch?</a></h5>
                <div className="subh5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi nequesi.
                </div>
              </div>
  
              <div className="single">
                <h5><a href="">How can I order the watch?</a></h5>
                <div className="subh5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi nequesi.
                </div>
              </div>
  
              <div className="single">
                <h5><a href="">How much price of the watch?</a></h5>
                <div className="subh5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi nequesi.
                </div>
              </div>
  
              <div className="single">
                <h5><a href="">How can I get refund?</a></h5>
                <div className="subh5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi nequesi.
                </div>
              </div>
            </LeftDownFAQ>
            <RightDownFAQ>
              <div className="img_FAQ">
                <img src={require("../../Img/watch-img-3.jpg")} alt="" />
              </div>
            </RightDownFAQ>
          </DownFAQ>
        </ContainerFAQ>
      </WrapFAQ>
    )
}
