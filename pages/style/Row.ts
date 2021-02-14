import styled from 'styled-components';

const Row = styled.div.attrs(() => ({
    className: 'Row'
}))`
    display: grid;
    grid-template-columns: 4fr 2fr;
    width: 80%;
    height: calc(100% - 60px);
    padding: 10px 30px;
    `;
export default Row;