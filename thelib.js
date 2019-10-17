function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, locationError);
  } else {
      console.log("Geo Location not supported by browser");
  }
}

function showPosition(position) {
  var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
  }
  console.log(location)
}

function locationError(error) {
  console.log(error);
  switch(error.code) {
      case error.PERMISSION_DENIED:
          return "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          return "Location information is unavailable."
          break;
      case error.TIMEOUT:
          return "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          return "An unknown error occurred."
          break;
  }
}

function showInMap(pos) {
  var latlon = pos.coords.latitude + "," + pos.coords.longitude;
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
  var map = document.querySelector("mapholder");
  map.innerHTML = "<img src='"+img_url+"'>";
}