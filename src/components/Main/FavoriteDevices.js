import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../card/Card';

const Head = styled.div`
height:30px;
   display: flex;
       align-items: center;
`;

const Box = styled.div`
   display: flex;
       flex-direction: column;
   margin-left:40px;
   margin-top:34px;
`;
const Text = styled.div`
font-family: ArialMT;
font-size: 14px;
color: #858585;
`;
const StyledButton = styled.div`
background: #F7F7F7;
border-radius: 20px;
   display: flex;
     align-items: center;
   margin-left:10px;
   height:30px;
`;
const Label=styled.div`
font-family: Arial-BoldMT;
font-size: 13px;
color: #000000;
text-align: left;
margin-left:15px;
margin-right:15px;
`;
const Carousel=styled.div`
   display: flex;
   align-items: center;
    margin-top:25px;
`;

const FavoriteDevices = () => {
    const cards = [
        {
            id: 1,
            type: 'sun',
            label: 'Xiaomi Yeelight LED Smart Bulb',
            caption: 'Включено'
        }, {
            id: 2,
            type: 'sunDisable',
            label: 'D-Link Omna 180 Cam',
            caption: 'Включится в 17:00'
        }, {
            id: 3,
            type: 'temperatureDisable',
            label: 'Elgato Eve Degree Connected',
            caption: 'Выключено до 17:00'
        }, {
            id: 4,
            type: 'sunDisable',
            label: 'LIFX Mini Day & Dusk A60 E27',
            caption: 'Включится в 17:00'
        }, {
            id: 5,
            type: 'sun',
            label: 'Xiaomi Mi Air Purifier 2S',
            caption: 'Включено'
        }, {
            id: 6,
            type: 'sunDisable',
            label: 'Philips Zhirui',
            caption: 'Выключено'
        }
    ]
    return <Box>
        <Head>
            <Text>Избранные устройства</Text>
            <StyledButton><Label>Все</Label></StyledButton>
            <StyledButton><Label>Кухня</Label></StyledButton>
            <StyledButton><Label>Зал</Label></StyledButton>
            <StyledButton><Label>Лампочки</Label></StyledButton>
            <StyledButton><Label>Камеры</Label></StyledButton>
        </Head>
        <Carousel>
            {cards.map(item => {
                return (<Card key={item.id} type={item.type} label={item.label}
                              caption={item.caption}/>)
            })}
        </Carousel>
    </Box>
        ;
};

export default FavoriteDevices;
