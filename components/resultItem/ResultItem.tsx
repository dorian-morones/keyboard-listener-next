import React from 'react';
import ResultItemContainer from './style/ResultItemContainer';
import ResultItemText from './style/ResultItemText';

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