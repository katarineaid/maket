import React from 'react';
import styled from 'styled-components';
import SelectedScenarios from '../Main/SelectedScenarios';
import Main from '../Main/Main';
import FavoriteDevices from '../Main/FavoriteDevices';

const FirstLine = styled.div`
   display: flex;
   margin-left:40px;
   margin-top:25px;
`;
const MainContainer = styled.div`
   flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
`;

const Dashboard = ({}) => {

    return (
        <MainContainer>
            <FirstLine>
                <Main />
                <SelectedScenarios />
            </FirstLine>
            <FavoriteDevices />
        </MainContainer>
    );
};

export default Dashboard;
