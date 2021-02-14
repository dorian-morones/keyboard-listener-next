import React from 'react';
import {
    CardContainer,
    CardTitle,
    CardResult,
    Text
} from './style/CardItem_style';

const CardItem = ({title, text}) => {

    return(
        <CardContainer>
            <CardTitle><Text>{title}</Text></CardTitle>
            <CardResult><Text>{text}</Text></CardResult>
        </CardContainer>
    )

}

export default CardItem;