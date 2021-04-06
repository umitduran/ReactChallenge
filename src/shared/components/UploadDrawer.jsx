import React, {useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import {Drawer} from "antd";


const UploadDrawer = (props) => {
    console.log(props.visible);
    const [visible,setVisible] = useState(false);

    useEffect(() => {
        debugger;
        setVisible(props.visible);
    },[props.visible]);

    return (
        <Drawer
            title="Upload File"
            height={500}
            placement="top"
            visible={visible}
            bodyStyle={{ paddingBottom: 10 }}
            headerStyle={{ marginTop: 50 }}
            onClose={() => {
                props.parentCallback(false);
            }}>
            {
                <div>test</div>
            }
        </Drawer>
    )

}

/*const ClockUsingHooks = props => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })
    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}*/

export default UploadDrawer;