var features = [];
var markers = [];
var e = document.getElementById("MaxCars");
var MaximumCars = e.options[e.selectedIndex].value;

var iconBase = 'http://maps.google.com/mapfiles/kml/pal4';

e.addEventListener("change", function(did) {
	MaximumCars = e.options[e.selectedIndex].value;
});

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: new google.maps.LatLng(56.950, 23.999),
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var icons = {
	  car: {
		  icon: iconBase + '/icon15.png'
	  },
	  nz:{
		  icon: iconBase + '/icon25.png'
	  }
	};

	//Update Map
	setInterval(function() {

	features = [];
	document.getElementById('cars').innerHTML = "";
	removeMarkers();

	for(var i=0; i < MaximumCars; i +=1){
		features.push({position: new google.maps.LatLng(getNumbers(35, 90) +'.'+ getNumbers(3000000, 99999999), getNumbers(12, 125)+'.'+getNumbers(3600000, 9999999)), type: 'car', title: 'LV-'+getName(1001, 9999), speed: getNumbers(25, 199)});
	}

	// Create cars on map.
	features.forEach(function(feature, index) {
		index += 1;
		var zaglavie = String(feature.title);
		
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map,
			title: "Name: " + zaglavie + " Speed: " + feature.speed
		});
		
		markers.push(marker);

	  document.getElementById('cars').innerHTML += '<tr> <th scope=row>'+ index +'</th> <td>'+ feature.title +'</td> <td>'+ feature.speed +' km/h</td> <td>'+ feature.position +'</td> </tr>';
	});

	}, 5000);

}

function getNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function getName(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeMarkers(){
	for(i=0; i<markers.length; i++){
		markers[i].setMap(null);
	}
}