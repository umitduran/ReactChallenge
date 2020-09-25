import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Legend from '../../shared/components/Legend';
import Container from "@material-ui/core/Container";

type State = {
    lat: number,
    lng: number,
    zoom: number,
}

export default class Home extends Component<{}, State> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 5,
    }

    render() {
        const position = [51.505, 0.09];
        return (
            <Map center={position} zoom={11} style={{ height: "600px",width:'1800px' }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Legend/>
            </Map>
        )
    }
}
