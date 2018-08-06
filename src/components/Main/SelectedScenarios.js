import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../card/Card';

const Box = styled.div`
  flex-direction:column;
  display: flex;
  margin-left: 26px;
  min-width: 50%;
`;
const Cards = styled.div`
  flex-direction:row;
  display: flex;
`;
const Title = styled.div`
  font-family: Arial-BoldMT;
  font-size: 18px;
  color: #333333;
  margin-bottom: 20px;
`;

const data = [
    {
        id: 1,
        type: 'sun',

        label: 'Выключить весь свет в доме и во дворе',
        caption: ''
    }, {
        id: 2,
        type: 'scheduled',

        label: 'Я ухожу',
        caption: ''
    }, {
        id: 3,
        type: 'sun',

        label: 'Включить свет в коридоре',
        caption: ''
    }, {
        id: 4,
        type: 'temperature',

        label: 'Набрать горячую ванну',
        caption: 'Начнётся в 18:00'
    }, {
        id: 5,
        type: 'temperature',

        label: 'Сделать пол тёплым во всей квартире',
        caption: ''
    }
]

const SelectedScenarios = () => {
    return (
        <Box>
            <Title>Избранные сценарии</Title>
            <Cards>
                {data.map(item => {
                    return (<Card key={item.id} type={item.type} label={item.label}
                                  caption={item.caption}/>)
                })}
            </Cards>
        </Box>
    );
};

export default SelectedScenarios;
