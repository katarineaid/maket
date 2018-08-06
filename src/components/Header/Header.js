import React from 'react';
import styled from 'styled-components';

import logo from '../../Яндекс Дом@1x.png';

const Common = styled.div`
   display: flex;
   margin-left:40px;
   align-items: center;
   justify-content: start;
   height: 92px;
`;
const StyledImage = styled.img`
   width: 108px;
   height: 27px;
   margin-right:52px;
`;
const StyledButton = styled.div`
font-family: Arial-BoldMT;
font-size: 16px;
color: #333333;
line-height: 20px;
 margin-right:28px;
`;
const Header = ({}) => {
    const onSummary = () => {
        const idButton = 'summary';
        console.log('idButton', idButton)
    };
    const onDevices = () => {
        const idButton = 'devices';
        console.log('idButton', idButton)
    };
    const onScenarios = () => {
        const idButton = 'scenarios';
        console.log('idButton', idButton)
    };
    return [
        <Common key={1}>
            <StyledImage src={logo}/>
            <StyledButton onClick={onSummary}>
                Сводка
            </StyledButton>
            <StyledButton onClick={onDevices}>
                Устройства
            </StyledButton>
            <StyledButton onClick={onScenarios}>
                Сценарии
            </StyledButton>
        </Common>,
    ];
};

export default Header;
