import styled from "@emotion/styled";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

export const Logo = styled.div`
  // margin-right: 10%;
  img {
    display: inline-block;
    // line-height: 40px;
  }
`;

export const Nav = styled.div`
  justify-content: end;
  li {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0px 15px;

    list-style-type: none;
    &:first-child a {
      color: red;
    }
    &:first-child {
      margin: 0px 0px 0px 300px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  & a:hover {
    color: red;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    display: none;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
