// components/AdvancedMapPicker.jsx

import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    useMap
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
    GeoSearchControl,
    OpenStreetMapProvider,
} from "leaflet-geosearch";

/* ---------------- FIX MARKER ICON ---------------- */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* ---------------- SEARCH CONTROL ---------------- */

function SearchField({ setPosition }) {

    const map = useMap();

    useEffect(() => {

        const provider = new OpenStreetMapProvider();

        const searchControl = new GeoSearchControl({

            provider,

            style: "bar",

            showMarker: false,

            autoClose: true,

            retainZoomLevel: false,

            animateZoom: true,

        });

        map.addControl(searchControl);

        map.on("geosearch/showlocation", (result) => {

            const lat = result.location.y;
            const lng = result.location.x;

            setPosition({
                lat,
                lng,
            });

            map.setView([lat, lng], 16);
        });

        return () => map.removeControl(searchControl);

    }, [map, setPosition]);

    return null;
}

/* ---------------- CLICK EVENT ---------------- */

function LocationSelector({ setPosition }) {

    useMapEvents({

        click(e) {

            setPosition({
                lat: e.latlng.lat,
                lng: e.latlng.lng,
            });

        },
    });

    return null;
}
function ChangeMapView({ position }) {

    const map = useMap();

    useEffect(() => {

        if (position?.lat && position?.lng) {

            map.setView(
                [position.lat, position.lng],
                16
            );

        }

    }, [position, map]);

    return null;
}
function ResizeMap() {

    const map = useMap();

    useEffect(() => {

        setTimeout(() => {
            map.invalidateSize();
        }, 300);

    }, [map]);

    return null;
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function AdvancedMapPicker({

    position,
    setPosition,
    readOnly

}) {

    /* -------- CURRENT LOCATION -------- */
    const [locationSelected, setLocationSelected] = useState(false);
    const handleCurrentLocation = () => {

        navigator.geolocation.getCurrentPosition(

            (pos) => {

                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
                setLocationSelected(true);

            },

            (err) => {
                console.log(err);
            }

        );
    };


    return (

        <div>

            {/* CURRENT LOCATION BUTTON */}

            {!readOnly && !locationSelected && <button
                type="button"
                onClick={handleCurrentLocation}
                style={{
                    marginBottom: 10,
                    padding: "10px 15px",
                    cursor: "pointer",
                }}
            >
                Use Current Location
            </button>}

            {/* MAP */}

            <MapContainer
                center={[
                    position?.lat || 28.6139,
                    position?.lng || 77.2090,
                ]}
                zoom={13}
                style={{
                    height: "500px",
                    width: "100%",
                    borderRadius: "10px",
                }}
            >
                <ResizeMap />
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* SEARCH */}
                {/* <SearchField setPosition={setPosition} /> */}

                {/* CLICK */}
                <LocationSelector setPosition={setPosition} />

                {/* MARKER */}

                {
                    position && (
                        <Marker
                            draggable={true}
                            position={[position.lat, position.lng]}

                            eventHandlers={{

                                dragend: (e) => {

                                    const marker = e.target;

                                    const latlng = marker.getLatLng();

                                    setPosition({
                                        lat: latlng.lat,
                                        lng: latlng.lng,
                                    });
                                },
                            }}
                        >
                            <Popup>
                                Selected Location
                            </Popup>
                        </Marker>
                    )
                }

                <ChangeMapView position={position} />
            </MapContainer>

            {/* LAT LNG */}

            {/* {
                position && (
                    <div style={{ marginTop: 10 }}>

                        <p>
                            <b>Latitude:</b> {position.lat}
                        </p>

                        <p>
                            <b>Longitude:</b> {position.lng}
                        </p>

                    </div>
                )
            } */}

        </div>
    );
}