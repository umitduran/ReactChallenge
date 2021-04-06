import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Button} from "antd";
import UploadDrawer from "../../shared/components/UploadDrawer";


class UploadPoi extends Component {

    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    handleCallback = (chilData) => {
        this.setState({
            visible: chilData
        })
    }

    render() {
        return (
            <div>
                <Button
                    style={{margin: '10px'}}
                    type={'primary'} danger
                    onClick={() => {
                    this.setState({
                        visible: true
                    })
                }}>
                    Open Drawer
                </Button>
                <UploadDrawer visible={this.state.visible} parentCallback={this.handleCallback}/>
            </div>
        );
    }
}

export default UploadPoi;
