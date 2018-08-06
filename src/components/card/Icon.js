import React from 'react';
import styled from 'styled-components';

import sunDisable from '../../icon_sun@1x.png';
import sun from '../../icon_sun_2@1x.png';
import temperatureDisable from '../../icon_temperature@1x.png';
import temperature from '../../icon_temperature_2@1x.png';
import scheduled from '../../icon_scheduled@1x.png';
import cloud from '../../cloud-drizzle.png';

const Image = styled.img`
   width: 24px;
   height: 24px;
`;

const Icon = ({type}) => {
    switch (type) {
        case 'sunDisable':
            return (<Image src={sunDisable}/>);
            break;
        case 'sun':
            return (<Image src={sun}/>);
            break;
        case 'temperatureDisable':
            return (<Image src={temperatureDisable}/>);
            break;
        case 'temperature':
            return (<Image src={temperature}/>);
            break;
        case 'scheduled':
            return (<Image src={scheduled}/>);
            break;
        case 'cloud':
            return (<Image src={cloud}/>);
            break;
    }
};

export default Icon;
