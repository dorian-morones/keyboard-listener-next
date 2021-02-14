import styled, { css } from 'styled-components';

export const GeneralContent = styled.div.attrs(() => ({
  className: 'GeneralContent'
}))`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  `;


export const Row = styled.div.attrs(() => ({
  className: 'Row'
}))`
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 80%;
  height: calc(100% - 60px);
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
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
    width: 80px;
  }

`;

export const FooterText = styled.p.attrs(() => ({
  className: 'FooterText'
}))`
  display: flex;
`

export const FooterLink = styled.a.attrs(() => ({
  className: 'FooterLink'
}))`
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if(props?.color){
      return css`
        color: #43f;
      `
    } else {
      return css`
        color: #000;
      `
    }

  }};
`;
