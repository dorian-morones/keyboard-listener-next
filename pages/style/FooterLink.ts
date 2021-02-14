import styled, { css } from 'styled-components';

interface IFooterLink {
    opt?: string;
  };

const FooterLink = styled.a.attrs(() => ({
    className: 'FooterLink'
  })) <IFooterLink>`
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    ${(props) => {
      if (props?.opt === 'color') {
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
  
  export default FooterLink;