// MARKER
const marker = L.marker(theCoordinate);
marker.addTo(theMap);

// CIRCLE
var circle = L.circle(theCoordinate, {color: 'blue', fillColor: '#0F0', fillOpacity: 0.1, radius: 5000} )
circle.addTo(theMap);

// POLYGON
const polygon = L.polygon([
  [38.088, 13.155],
  [38.188, 13.155],
  [38.188, 13.255],
  [38.088, 13.255]
])
polygon.addTo(theMap);

// POPUPS
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*
var popup = L.popup()
              .setLatLng([38.188, 13.255])
              .setContent("I am a standalone popup.");
popup.openOn(theMap);

function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
theMap.on('click', onMapClick);
*/

var popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(theMap);
}
mymap.on('click', onMapClick);