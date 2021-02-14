import styled from 'styled-components';

const CardContainer = styled.div.attrs(() => ({
    className: 'CustomButton'
}))`
  width: 200px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  margin: 10px;
  `

export default CardContainer;
