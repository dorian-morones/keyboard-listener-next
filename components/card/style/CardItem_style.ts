import styled, { css } from 'styled-components';

export const CardContainer = styled.div.attrs(() => ({
    className: 'CustomButton'
}))`
  width: 200px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  margin: 10px;
  `


export const CardTitle = styled.div.attrs(() => ({
  className: 'CardTitle'
}))`
  background-color: #43f;
  text-align: center;
  padding: 5px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  font-weight: 500;
`


export const CardResult = styled.div.attrs(() => ({
  className: 'CardResult'
}))`
  text-align: center;
  padding: 10px 5px;
  border-radius: 8px 8px 0 0;
  font-weight: 500;
  color: #000;
`

export const Text = styled.p.attrs(() => ({
  className: 'Text'
}))`
  margin: 0px;
`;