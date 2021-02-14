import styled, { css } from 'styled-components';


export const Row = styled.div.attrs(() => ({
  className: 'Row'
}))`
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 80%;
  padding: 10px 30px;
  `;

export const LeftContainer = styled.div.attrs(() => ({
  className: 'LeftContainer'
}))`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RigthContainer = styled.div.attrs(() => ({
  className: 'RigthContainer'
}))`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer.attrs(() => ({
  className: 'Footer'
}))`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
    width: 80px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;