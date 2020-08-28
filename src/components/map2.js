import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MapboxGLMap = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGlrZWFyb3VuZGhlbHNpbmtpIiwiYSI6ImNrN2NiNWc3ejA0MnkzZ215eG9raDN1bDEifQ.zecBlNbqTFaqpLHOIT28Fw"
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v11", // stylesheet location
        center: [25.04988, 60.248748],
        zoom: 7,
      })
      map.scrollZoom.disable()
      map.addControl(new mapboxgl.NavigationControl())

      map.on("load", () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map])

  return <div ref={el => (mapContainer.current = el)} style={styles} />
}

const styles = {
  // width: "100vw",
  height: "50vh",
}

export default MapboxGLMap
