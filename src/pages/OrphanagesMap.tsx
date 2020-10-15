import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src = {mapMarkerImg} alt= "Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Lorem ipsum lorem ipsum</p>
                </header>
                <footer>
                    <strong> Goias </strong>
                    <span>Luziânia</span>
                </footer>
            </aside>

            <Map
            center = {[-16.2380684,-47.9515105]}
            zoom = {15}
            style = {{ width: '100%', height: '100%'}}
            >
            <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </Map>

            <Link to ="" className ="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
     )
}

export default OrphanagesMap;