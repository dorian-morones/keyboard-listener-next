import React from 'react';
import {
    CardContainer,
    CardTitle,
    CardResult,
    Text
} from './style/CardItem_style';

const CardItem = () => {

    return(
        <CardContainer>
            <CardTitle><Text>E.Key</Text></CardTitle>
            <CardResult><Text>23</Text></CardResult>
        </CardContainer>
    )

}

export default CardItem;