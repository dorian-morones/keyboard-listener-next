import styled from 'styled-components';

const EmptyContainer = styled.div.attrs(() => ({
    className: 'AlertMessage'
  }))`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 60px);
  `;

  export default EmptyContainer;