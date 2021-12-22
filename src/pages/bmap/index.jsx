import React from 'react';
import{MapApiLoaderHOC,Map, Marker, NavigationControl, InfoWindow,ZoomControl,ScaleControl,BMapGL} from 'react-bmapgl';
import Polyline from 'react-bmapgl/Overlay/Polyline'
import CustomOverlay from 'react-bmapgl/Overlay/CustomOverlay'
import './index.css';


class BMapComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.map=null
  }
  
  componentDidMount(){
    console.log(this.map);
    // this.map
  }
  render(){
    return (
      <div className='baidu-map'>
      <Map
        enableScrollWheelZoom
        enableRotate
        onClick={(e)=>{console.log(e);}}
        ref={ref=>{this.map = ref.map}}
        center={{lng: 116.402544, lat: 39.928216}} zoom='8'>
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
        <CustomOverlay
          enableDragging
          position={new window.BMapGL.Point(116.35, 39.88)}>
          <div>123</div>
        </CustomOverlay>
      </Map>
      </div>
  )
  }
  
}

export default MapApiLoaderHOC({ak:'A6QVRUvvOzfB1YtiYWd7nl2sqjXcYGUx'})(BMapComponent);