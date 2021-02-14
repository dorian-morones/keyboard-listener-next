import styled, { css } from 'styled-components';

export const ResultItemContainer = styled.div.attrs(() => ({
    className: 'CustomButton'
}))`
  width: fit-content;
  min-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  border-radius: 40px;
  padding: 20px;
  transition: all 0.5s;
  `

export const ResultItemText = styled.p.attrs(() => ({
  className: 'CustomButton'
}))`
font-size: 140px;
margin: 0;
`