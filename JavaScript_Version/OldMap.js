document.addEventListener("DOMContentLoaded", function() {	
	initMap();		
});


function initMap() {
	
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: new google.maps.LatLng(53.002421, 23.887001),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});
	
//Custom names
var car_names = [];
var speed = [];
var index = 0;
var markerCluster = [];
var locations = [];
var markers = [];

document.getElementById('cars').innerText = "";	

var e = document.getElementById("MaxCars");
var MaximumCars = e.options[e.selectedIndex].value;

e.addEventListener("change", function() {
	MaximumCars = e.options[e.selectedIndex].value; 
	
	// Unset all markers
	var i = 0, l = markers.length;
	for (i; i<l; i++) {
		markers[i].setMap(null)
	}
	markers = [];

	// Clears all clusters and markers from the clusterer.
	markerCluster.clearMarkers();
	
	initMap();
});

//Locations
for(var t=0; t<MaximumCars; t+=1){
	locations.push(
		{
			lat: randomGeo(53, 65, 6),
			lng: randomGeo(23, 75, 6)
		}
	);
}

// Add some markers to the map.
// Note: The code uses the JavaScript Array.prototype.map() method to
// create an array of markers based on a given "locations" array.
// The map() method here has nothing to do with the Google Maps API.
markers = locations.map(function(location, i) {
	index += 1;
	car_names.push(getNumbers(1001, 9999));
	speed.push(getNumbers(25, 200));
	
	document.getElementById('cars').innerHTML += '<tr> <th scope=row>'+ index +'</th> <td>LV-'+ car_names[i] +'</td> <td>'+ speed[i] +' km/h</td> <td>'+ location.lat + ' / ' + location.lng +'</td> </tr>';
	
	return new google.maps.Marker({
		position: location,
		title: 'LV-'+car_names[i] + ' / Speed: '+speed[i]+'km/h',
		icon: './images/icon15.png'
  });
  
});

// Add a marker clusterer to manage the markers.
markerCluster = new MarkerClusterer(map, markers,
	{imagePath: './images/m'});	
}

function getNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

//Create random lat/long coordinates in a specified radius around a center point
function randomGeo(from, to, fixed) {
    return parseFloat(((Math.random() * (to - from) + from))).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}