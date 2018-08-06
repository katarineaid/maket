import React from 'react';
import styled from 'styled-components';
const Common = styled.div`
   display: flex;
   margin-left:40px;
`;
const StyledButton = styled.div`
font-family: ArialMT;
    color: #858585;
    font-size: 12px;
    letter-spacing: 0.01px;
    text-align: left;
    margin-right:15px;
`;

const Footer = ({  }) => {
    const onHelp = () => {
        const idButton = 'help';
        console.log('idButton',idButton)
    };
    const onFeedback = () => {
        const idButton = 'feedback';
        console.log('idButton',idButton)
    };
    const onDevelopers = () => {
        const idButton = 'developers';
        console.log('idButton',idButton)
    };
    const onUseConditions = () => {
        const idButton = 'useConditions';
        console.log('idButton',idButton)
    };
    return [
        <Common key={1}>
            <StyledButton onClick={onHelp}>
                Помощь
            </StyledButton>
            <StyledButton onClick={onFeedback}>
            Обратная связь
            </StyledButton>
            <StyledButton onClick={onDevelopers}>
            Разработчикам
            </StyledButton>
            <StyledButton onClick={onUseConditions}>
            Условия использования
            </StyledButton>
        </Common>,
        <StyledButton key={2}>
            © 2001–2017  ООО «Яндекс»
        </StyledButton>,

    ];
};

export default Footer;
