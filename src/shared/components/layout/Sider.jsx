import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Layout } from "antd";

const { Sider } = Layout;
const SiderLayout = props => {
    const { children } = props;

    return (
        <Sider collapsible={true}>
            Sider
        </Sider>
    );
};

SiderLayout.propTypes = {
}

export default SiderLayout
