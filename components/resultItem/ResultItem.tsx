import React from 'react';
import {
    ResultItemContainer,
    ResultItemText
} from './style/ResultItem_styles';

const ResultItem = ({value}) => {

    return(
        <ResultItemContainer>
            <ResultItemText>
                {value}
            </ResultItemText>
        </ResultItemContainer>
    )

}

export default ResultItem;