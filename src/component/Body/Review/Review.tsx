import React from 'react'
import { WrapCustomerFeedback, ContainerCustomerFeedback, UpCustomerFeedback, DownCustomerFeedback } from './ReviewStyle';
import { ListReview } from './ListReview';

export const Review = () => {

  return (
    <WrapCustomerFeedback>
      <ContainerCustomerFeedback>
        <UpCustomerFeedback>
          <div className="contentUp">
            <h5>Customer Feedback</h5>
            <h2>Our Clients valuable reviews about our products and service</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </div>
        </UpCustomerFeedback>
        <DownCustomerFeedback>
          <ListReview />
        </DownCustomerFeedback>
        {/* <SubDownCustomerFeedback>
            <button><i className="fas fa-chevron-left"></i> </button>
            <button><i className="fas fa-chevron-right"></i> </button>
          </SubDownCustomerFeedback> */}
      </ContainerCustomerFeedback>
    </WrapCustomerFeedback>
  )
}
