import styled from "@emotion/styled";

export const WrapNeedHelp = styled.div`
  display: flex;
  justify-content: center;
 
`;

export const ContainerNeedHelp = styled.div`
  display: flex;
  max-width: 61%;
  padding: 100px 0;
 
`;

export const LeftNeedHelp = styled.div`
  max-width: 40%;
  h5 {
    font-weight: 600;
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
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .content1 {
    h5 {
      color: #3b04db;
      margin-top: 0px;
    }
  }
 
`;

export const RightNeedHelp = styled.div`
  max-width: 60%;
  flex-direction: column;
  width: 100%;
  .contact-form {
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    padding: 50px;
    border-radius: 10px;
    background-color: #fff;
    padding: 50px;
    h3 {
      text-align: center;
      font-weight: 700;
      margin: 0 0 20px;
      font-size: 24px;
      line-height: 34px;
    }
  }
  .form-group {
    label {
      font-weight: 600;
    }
    input {
      font-size: 14px;
      border-color: #e6f0fa;
      border: 1px solid #ced4da;
      width: 100%;
      border-radius: 0.25rem;
      height: 50px;
      margin: 10px 0;
    }
    textarea {
      margin: 10px 0 !important;
      font-size: 14px;
      border-color: #e6f0fa;
      width: 100%;
      border-radius: 0.25rem;
      height: 200px;
    }
  }
  button {
    color: #fff;
    padding: 16px 30px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    margin: 10px 0 0;
    background-color: #3b04db;
  }
 
`;
