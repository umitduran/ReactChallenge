import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from "antd";
// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import Sider from '../shared/components/layout/Sider';


class App extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider/>
                <Layout>
                    <Header/>

                    <Content/>

                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}

export default App;
