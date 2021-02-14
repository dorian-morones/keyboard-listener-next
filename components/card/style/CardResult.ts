import CardContainer from "./CardContainer";

import styled from 'styled-components';

const CardResult = styled.div.attrs(() => ({
    className: 'CardResult'
  }))`
    text-align: center;
    padding: 5px;
    border-radius: 8px 8px 0 0;
    font-weight: 500;
    color: #000;
  `;
  
export default CardResult;