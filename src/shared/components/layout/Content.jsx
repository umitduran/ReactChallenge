import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Layout } from "antd";
import Home from '../../../components/Home/Home';
import UploadPoi from "../../../components/UploadPoi";

const { Content } = Layout;
const ContentLayout = props => {
    const { children } = props;

    return (
        <Content>
            {/*<Home/>*/}
                <UploadPoi/>

        </Content>
    );
};

ContentLayout.propTypes = {
    children: PropTypes.element
}

export default ContentLayout
