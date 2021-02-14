import styled, { css } from 'styled-components';

const GeneralContent = styled.div.attrs(() => ({
  className: 'GeneralContent'
}))`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  `;

export default GeneralContent;