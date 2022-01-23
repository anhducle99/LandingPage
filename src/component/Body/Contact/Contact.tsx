import React from 'react'
import { WrapNeedHelp, ContainerNeedHelp, LeftNeedHelp, RightNeedHelp } from './ContactStyle'

export const Contact = () => {
    return (
        <WrapNeedHelp>
        <ContainerNeedHelp>
          <LeftNeedHelp>
            <div className="content1">
              <h5>Need Help</h5>
              <h2>Contact with us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium in.</p>
            </div>
            <div className="content2">
              <h5>Address:</h5>
              <p>Maount View, Oval Road <br /> New York, USA</p>
            </div>
            <div className="content3">
              <h5>Email:</h5>
              <p>support@email.com <br /> example@support.com</p>
            </div>
            <div className="content4">
              <h5>Phone:</h5>
              <p>+91 12345 67890 <br />  +93 12345 67890</p>
            </div>
          </LeftNeedHelp>
          <RightNeedHelp>
            <div className="contact-form">
              <h3>Leave Us A Message</h3>
              <form action="">
                <div className="form-group">
                  <label htmlFor="name">Name</label><br />
                  <input type="text" name='name' placeholder='Name*' />
                </div>
  
                <div className="form-group">
                  <label htmlFor="email">Email address</label><br />
                  <input type="text" name='email' placeholder='Enter email*' />
                </div>
  
                <div className="form-group">
                  <label htmlFor="message">Message</label><br />
                  <textarea name='message' placeholder='Write your message*' />
                </div>
  
                <button>Submit</button>
              </form>
            </div>
          </RightNeedHelp>
        </ContainerNeedHelp>
      </WrapNeedHelp>
    )
}
