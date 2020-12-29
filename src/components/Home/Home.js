import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,Rectangle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Legend from '../../shared/components/Legend';
import Container from "@material-ui/core/Container";
import {addressPoints} from "../../shared/sampleData/realworld-10000";
import { brandLocGridMap } from "../../shared/sampleData/vlx-sample";
import HeatmapLayer from "react-leaflet-heatmap-layer/lib/HeatmapLayer";
import geoHash from 'ngeohash';

type State = {
    lat: number,
    lng: number,
    zoom: number,
}

const RectangleList = ({ data }) => data.map((item, key) => {
    const boundBox = geoHash.decode_bbox(item.geohash);
    const boundObj = {
        name: item.geohash,
        color: item.color,
        bounds: [
            [boundBox[0], boundBox[1]],
            [boundBox[2], boundBox[3]],
        ],
    };
    return (
        <span>
      <Rectangle
          key={key}
          bounds={boundObj.bounds}
          fillColor={boundObj.color}
          color="#D5EFE8"
          dashArray={5}
          weight={1}
          opacity={1}
          fillOpacity={0.7}>
      </Rectangle>
    </span>
    );
});

const getHeatMapData = () => {
    const brandGrid = brandLocGridMap.map((grid) => {
        let geoGrid = geoHash.decode(grid.geohash);
        return [geoGrid['latitude'],geoGrid['longitude'],grid.density];
    })
    console.log(brandGrid);
    return brandGrid;
}

export default class Home extends Component<{}, State> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 5,
        zoomLevel: 6
    }


    render() {
        const position = [51.505, 0.09];
        return (
            <Map center={position} zoom={5} style={{ height: "600px",width:'1800px' }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <React.Fragment>
                    {
                        this.state.zoomLevel < 7 ? (
                            <HeatmapLayer
                                fitBoundsOnLoad
                                fitBoundsOnUpdate
                                points={getHeatMapData()}
                                //max={20}
                                //gradient={{ 0.4: 'blue', 0.8: 'orange', 1.0: 'red' }}
                                longitudeExtractor={m => m[1]}
                                latitudeExtractor={m => m[0]}
                                intensityExtractor={m => parseFloat(m[2])}/>

                        ) : (
                            <RectangleList data={[]} />
                        )
                    }
                </React.Fragment>
   {/*             <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Legend/>*/}
            </Map>
        )
    }
}
