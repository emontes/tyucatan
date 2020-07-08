import React, { Component } from "react"
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet"

class Map1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          lat: props.lat,
          lng: props.lng,
          zoom: props.zoom,
          mensaje: props.mensaje
        }

      } 
          
      render() {
        const position = [this.state.lat, this.state.lng];
        return (
          <LeafletMap center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <div dangerouslySetInnerHTML={{__html: this.state.mensaje}} />   
              </Popup>
            </Marker>
          </LeafletMap>
        );
      }  
  
}

export default Map1