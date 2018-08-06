import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon'
const Common = styled.div`
   background: #F7F7F7;
   border-radius: 20px;
   width: 200px;
   height: 100px;
margin-bottom: 15px;
margin-right: 15px
padding:15px;
position: relative; 
&:hover{
         color: white;
         }
`;

const Foot = styled.div`
position: absolute; bottom: 15px;
`;

const Label = styled.div`
font-family: Arial-BoldMT;
font-size: 14px;
color: #333333;
letter-spacing: 0;
text-align: left;
`;

const Caption = styled.div`
font-family: ArialMT;
font-size: 12px;
color: #858585;
letter-spacing: 0;
text-align: left;
`;

const Card = ({type, disable,label,caption}) => {
    return (
        <Common key={1}>
            <Icon type={type} disable={disable}/>
            <Foot>
            <Label>
                {label}
            </Label>
            <Caption>
                {caption}
            </Caption>
            </Foot>
        </Common>
    );
};
Card.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    caption: PropTypes.string,
    disable: PropTypes.bool,
};

export default Card;
