import React, { Component } from 'react';
import { Layout }  from 'antd';
import Brand from '../features/brand/brand';
import Search from '../features/search/search';
import Map from '../features/map/map';
import SearchResult from '../features/searchresult/searchresult';


const { Content } = Layout;

class Main extends Component {
    render() {
        return 
        <div>
            <Content>
                <Brand />
                <Search />
                <div className='search-content'></div>
                <Map />
                <SearchResult/>
            </Content>
        </div>;
        
}
        
}

export default Main;
