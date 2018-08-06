import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';
import * as searchActions from '../../shared/actions/index.js';
import styled from 'styled-components';
import FooterContent from '../Footer/Footer'
import HeaderContent from '../Header/Header'
import Dashboard from '../Main/Dashboard'
import Divider from '@material-ui/core/Divider';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Footer = styled.div`
   height: 64px;
   justify-content: space-between;
   flex-direction: row;
   display: flex;
   align-items: center  
`;

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {query: 'сеть'};
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClickSuggestion = this.onClickSuggestion.bind(this);
    }


    handleChange = name => event => {
        let value = event.target.value;
        const {searchActions} = this.props;
        searchActions.giveQuery(value);
        if (value.length % 3 === 0) {
            searchActions.getCache(value);
        }
    };

    onClickSuggestion = (value) => {
        const {searchActions} = this.props;
        searchActions.giveQuery(value);
        searchActions.getSearch(value);
        searchActions.getCache('');
    }

    onClick = () => {
        const {searchActions, query} = this.props;
        searchActions.getSearch(query);
        console.log('press button', query)
    }

    onClickLeftPanel = (value) => {
        const {searchActions} = this.props;
        searchActions.getResultGrouping(value)
    }


    render() {
        const {result, cache, query} = this.props;
        console.log('result', result)
        console.log('cache', cache)

        return (
            <Wrap>
                <HeaderContent/>
                <Divider/>
                <Dashboard/>

                <Footer>
                    <FooterContent/>
                </Footer>
            </Wrap>
        );
    }
}

function mapStateToProps(state) {
    return {
        result: state.search.result,
        status: state.search.status,
        statusText: state.search.statusText,
        cache: state.search.cache,
        query: state.search.query,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(searchActions, dispatch),
    }
}

//export default AppComponent;
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
