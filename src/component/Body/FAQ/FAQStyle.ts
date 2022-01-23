import styled from "@emotion/styled";

export const WrapFAQ = styled.div`
`;

export const ContainerFAQ = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;

export const UpFAQ = styled.div`
  text-align: center;
  max-width: 75%;
  margin: 0 auto;
  h5 {
    margin-top:90px;
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
`;

export const DownFAQ = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
`;

export const LeftDownFAQ = styled.div`
  max-width: 60%;
  padding: 0 50px 0;
  .single {
    display: flex;
    flex-direction: column;
    a {
      display: block;
      padding: 20px 45px;
      border-bottom: 1px solid #e6f0fa;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: red;
    }
    .subh5 {
      display: none;
      width: 100%;
      font-size: 16px;
      line-height: 26px;
      font-weight: 600;
      color: #444;
      flex: 1 1 auto;
      padding: 1.25rem;
    }
  }
`;

export const RightDownFAQ = styled.div`
  max-width: 50%;

  .img_FAQ {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
