import styled from "@emotion/styled";
import testi from "../../Img/testi-bg.png";

export const WrapCustomerFeedback = styled.div`
  margin-top:120px;
  background-image: url("${testi}");
  background-color: #f6f6f6;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: auto;
 
`;

export const ContainerCustomerFeedback = styled.div`
  max-width: 39%;
  padding: 80px 0;
  margin: 0 auto;
 
`;

export const UpCustomerFeedback = styled.div`
  text-align: center;
  h5 {
    font-weight: 600;
    color: #3b04db;
    font-size: 18px;
    line-height: 28px;
  }
  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 46px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #444;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .contentUp {
    h5 {
      margin-top: 0px !important;
    }
  }
  
`;

export const DownCustomerFeedback = styled.div`
  text-align: center;
  margin-top: 8%;
  margin-bottom: 5%;
  background-color: #fff;
  border-radius: 15px;
  .contentDown {
    border-radius: 15px;
    padding: 45px 30px 30px;
    // box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  .client-img {
    img {
        max-height:50px;
        max-width: 80px;
        border-radius: 50%;
        margin: 0 auto 30px;
    }
  } 
    .contentDown active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.08);
    }
    .client-comnt {
      h5 {
        font-style: italic;
        letter-spacing: 1px;
        line-height: 1.6;
        font-size: 20px;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        color: inherit;
      }
      span {
        i {
          color: #f39c12;
          margin: 0 2px;
        }
      }
      h4 {
        font-weight: 700;
        color: #ff4e56;
        font-size: 22px;
        line-height: 32px;
      }
      p {
        font-size: 16px;
        line-height: 26px;
        color: #444;
        margin-top: 0;
        margin-bottom: 1rem;
      }
    }
    .client-details {
    }
  }
  
`;

export const SubDownCustomerFeedback = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #fff;
    width: 40px;
    height: 40px;
    line-height: 38px;
    border-radius: 4px;
    text-align: center;
    color: #3b04db;
    font-size: 24px;
    border: 1px solid #e6f0fa;
    margin-left: 20px;
  }
  & button:hover {
    background-color: #3b04db;
    color: #fff;
  }
  
`;
