import styled from "@emotion/styled";
import bgr2 from "../../Img/banner-2.jpg";

export const WrapGetUpToDate = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("${bgr2}");
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const ContainerGetUpToDate = styled.div`
  padding: 60px 0 60px 0;
  .upContent {
    max-width: 63%;
    color: #f8f9fa;
    text-align: center;
    h5 {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
    h2 {
      font-weight: 800;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const UpGetUpToDate = styled.div`
  display: flex;
  justify-content: center;
  h5 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }
  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const DownGetUpToDate = styled.div`
  display: flex;
  justify-content: center;
  .downContent {
    padding: 40px 0 20px 0;
    width: 65%;
    form {
      position: relative;
      .form_group {
        input {
          height: 60px;
          border-radius: 30px;
          border: 0;
          width: 100%;
        }
      }
      button {
        // margin-top: 7px;
        // margin-left: 22px;
        background-color: #ff4e56;
        border: 0;
        height: 50px;
        border-radius: 30px;
        padding: 0 30px;
        color: #fff;
        font-weight: 600;
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;
