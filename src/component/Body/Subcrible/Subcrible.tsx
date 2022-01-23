import React from 'react'
import { WrapGetUpToDate, ContainerGetUpToDate, UpGetUpToDate, DownGetUpToDate } from './SubcribleStyle'

export const Subcrible = () => {
    return (
        <WrapGetUpToDate>
        <ContainerGetUpToDate>
          <UpGetUpToDate>
            <div className="upContent">
              <h5>Get Up To Date</h5>
              <h2>Subscribe our newsletter</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium in.</p>
            </div>
          </UpGetUpToDate>
          <DownGetUpToDate>
            <div className="downContent">
              <form action="">
                <div className="form_group">
                  <input type="email" placeholder='Enter your email*' />
                </div>
                <button>Subscribe Now</button>
              </form>
            </div>
          </DownGetUpToDate>
        </ContainerGetUpToDate>
      </WrapGetUpToDate>
    )
}
