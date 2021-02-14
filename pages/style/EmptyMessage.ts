import styled from 'styled-components';


const EmptyMessage = styled.p.attrs(() => ({
    className: 'AlertMessage'
  }))`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 70%;
    height: 50px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    border-radius: 15px;
  `;

  export default EmptyMessage