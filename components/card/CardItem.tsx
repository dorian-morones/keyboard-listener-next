import React from 'react';

import CardContainer from './style/CardContainer';
import CardTitle from './style/CardTitle';
import CardResult from './style/CardResult';
import Text from './style/Text';

const CardItem = ({title, text}) => {

    return(
        <CardContainer>
            <CardTitle><Text>{title}</Text></CardTitle>
            <CardResult><Text>{text}</Text></CardResult>
        </CardContainer>
    )

}

export default CardItem;