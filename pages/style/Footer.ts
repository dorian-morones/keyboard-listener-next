import styled from 'styled-components';

const Footer = styled.footer.attrs(() => ({
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

  export default Footer;