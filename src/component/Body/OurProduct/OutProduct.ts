import styled from "@emotion/styled";

export const WrapWhyChooseOurProduct = styled.div`
display: flex;
justify-content: center;
background-color:#f6f6f6;
`;

export const ContainerWhyChooseOurProduct = styled.div`
max-width:1140px;
// background-color: red
padding-top: 50px;
padding-bottom: 100px;

`;

export const WrapContentUp = styled.div` 
display: flex;
text-align: center;
justify-content: center;
.contentup{
  max-width:70%;
padding-bottom: 50px;
  h5{
    font-weight: 600;
    color: #3b04db;
    font-size: 18px;
    line-height: 28px;
  }
  h2{
    font-weight: 800;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 46px;
  }
  p{
    font-size: 16px;
    line-height: 26px;
    color: #444;
  }
}


`;

export const WrapContentDown = styled.div`

.contentdown{
  display: flex;
  h5{
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    }
  img{
    max-width:100%;
  }
  .icon{
    margin-top: 39px;
  }
  .imgDown{
    padding-right: 15px;
    padding-left: 15px;
  }
  .textDown{
.cont{
  padding-right: 50px;
}
  }
}
.why-chose-single{
  display: flex;
  // float: left;
  overflow: hidden;
  // margin: 0 0 35px;
  font-weight: 400;
  color: #130f40;
  padding-left: 80px;
}
.icon{
  display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #ff4e56;
    line-height: 0px;
    font-size: 36px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    margin: 8px 10px 0 0;
}

`;