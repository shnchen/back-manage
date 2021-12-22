import React from 'react';
import{Map, Marker, NavigationControl, InfoWindow,ZoomControl,ScaleControl} from 'react-bmapgl';
import Polyline from 'react-bmapgl/Overlay/Polyline'
import './index.css';


class BMapComponent extends React.Component{
  componentDidMount(){

  }
  render(){
    return (
      <div className='baidu-map'>
      <Map center={{lng: 116.402544, lat: 39.928216}} zoom='8'>
        <Marker position={{lng: 116.402544, lat: 39.928216}}
            enableDragging
        />
        <NavigationControl /> 
        <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
        <ZoomControl />
        <ScaleControl />
        <Polyline
          path={[
            new window.BMapGL.Point(116.35, 39.88),
            new window.BMapGL.Point(116.40, 39.92),
            new window.BMapGL.Point(116.33, 40.01),
          ]}
          strokeColor="#f00"
          strokeWeight={10}
        />
      </Map>
      </div>
  )
  }
  
}

export default BMapComponent;