import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../card/Icon';
import Card from '../card/Card';

const Common = styled.div`
display:flex;
justify-content: space-between;
   border-radius: 20px;
background-image:url("https://st.hzcdn.com/simgs/6f815d880953caea_14-0377/----------.jpg");
background-repeat:no-repeat;
background-size:100% 100%;
   min-height: 331px;
   padding:25px;
`;
const Box = styled.div`
  flex-direction:column;
     min-width: 50%;
`;
const Title = styled.div`
font-family: Arial-BoldMT;
font-size: 18px;
color: #333333;
margin-bottom: 20px;
`;

const Greeting = styled.div`
font-family: Arial-BoldMT;
font-size: 27px;
color: #333333;
`;
const Message = styled.div`
font-family: ArialMT;
font-size: 14px;
color: #333333;
`;
const Weather = styled.div`
margin-top: 25px;
display:flex;
`;
const Inside = styled.div`
display:flex;
flex-direction:column;
margin-right:18px
`;
const Outside = styled.div`
display:flex;
flex-direction:column;
`;
const Text = styled.div`
font-family: ArialMT;
font-size: 14px;
color: #858585;
`;
const Left = styled.div`
`;
const Right = styled.div`
`;
const Temperature = styled.div`
font-family: Arial-BoldMT;
font-size: 36px;
color: #333333;
letter-spacing: 0;
text-align: left;
`;

const Main = ({}) => {
    const insight = {
        temperature: '+23'
    };
    const outside = {
        temperature: '+19',
        icon: 'cloud'
    }
    const cards = [
        {
            id: 1,
            type: 'temperatureDisable',
            label: 'Philips Cooler',
            caption: ''
        }, {
            id: 2,
            type: 'sunDisable',
            label: 'Xiaomi Yeelight LED Smart Bulb',
            caption: 'Включится в 17:00'
        }
    ]

    return <Box>
        <Title>Главное</Title>
        <Common>
            <Left>
                <Greeting>
                    Привет, Геннадий!
                </Greeting>
                <Message>
                    Двери и окна закрыты, сигнализация включена.
                </Message>
                <Weather>
                    <Inside>
                        <Text>Дома</Text>
                        <Temperature>{insight.temperature}</Temperature>
                    </Inside>
                    <Outside>
                        <Text>За окном</Text>
                        <Temperature>{outside.temperature}<Icon type={outside.icon}/></Temperature>
                    </Outside>
                </Weather>
            </Left>
            <Right>
                {cards.map(item => {
                    return (<Card key={item.id} type={item.type} label={item.label}
                                  caption={item.caption}/>)
                })}
            </Right>
        </Common>
    </Box>
        ;
};

export default Main;
