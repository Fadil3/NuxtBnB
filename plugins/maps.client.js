export default function (context, inject) {
  let mapLoaded = false
  let mapWaiting = null

  addScript()
  inject('maps', {
    showMap,
  })

  function addScript() {
    // get env from nuxt.config.js
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=' +
      GOOGLE_MAPS_API_KEY +
      '&libraries=places&callback=initMap'
    script.async = true
    window.initMap = initMap
    document.head.appendChild(script)
  }

  function initMap() {
    mapLoaded = true
    if (mapWaiting) {
      const { canvas, lat, lng } = mapWaiting
      renderMap(canvas, lat, lng)
      mapWaiting = null
    }
  }

  function showMap(canvas, lat, lng) {
    if (mapLoaded) {
      renderMap(canvas, lat, lng)
    } else {
      mapWaiting = { canvas, lat, lng }
    }
  }

  function renderMap(canvas, lat, lng) {
    const mapOptions = {
      center: new window.google.maps.LatLng(lat, lng),
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
    }
    const map = new window.google.maps.Map(canvas, mapOptions)
    const position = new window.google.maps.LatLng(lat, lng)
    const marker = new window.google.maps.Marker({
      position,
    })

    marker.setMap(map)
  }
}
