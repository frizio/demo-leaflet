var theMap = L.map('mapid');
theMap.setView([0, 0], 5);
//console.log(theMap);
const osmMapnik = L.tileLayer(
                        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
                        {
                            maxZoom: 19,
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors;'
                        }
                    );
osmMapnik.addTo(theMap);
const theCoordinate = [38.088, 13.155];
const theCenter = new L.LatLng(theCoordinate[0], theCoordinate[1]);
theMap.setView(theCenter, 11);

// User position
//getLocation();

theMap.locate({setView: true, maxZoom: 16});

var currentPosition;
function onLocationFound(e) {
  //console.log(e);
  currentPosition = e.latlng;
  var radius = e.accuracy;
  L.marker(e.latlng)
    .addTo(theMap)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();
  L.circle(e.latlng, radius).addTo(theMap);
}
theMap.on('locationfound', onLocationFound);


function onLocationError(e) {
  alert(e.message);
}
theMap.on('locationerror', onLocationError);

var marker;
theMap.on('locationfound', function(e) {
    if (!marker) {
        marker = L.marker(e.latlng);
    } else {
        marker.setLatLng(e.latlng);
    }
})


