/**
 * Google Maps API V3 with jQuery
 * 
 * One Thousand Markers loaded fast using document.createDocumentFragment();
 */
$(document).ready(function(){
	
	var e = document.getElementById("MaxCars");
	var MaximumCars = e.options[e.selectedIndex].value;
	
	var index = 0;
	
	e.addEventListener("change", function(did) {
		MaximumCars = e.options[e.selectedIndex].value;
	});
	
	var southWest = new google.maps.LatLng(48.864716, 2.349014);
	var northEast = new google.maps.LatLng(55.752121, 37.617664); 
	var lngSpan = northEast.lng() - southWest.lng();
	var latSpan = northEast.lat() - southWest.lat();
		
	function MyOverlay( options ){
	    this.setValues( options );
	    this.markerLayer = $('<div />').addClass('overlay');
	};

	// MyOverlay is derived from google.maps.OverlayView
	MyOverlay.prototype = new google.maps.OverlayView;

	MyOverlay.prototype.onAdd = function()
	{
	    var $pane = $(this.getPanes().overlayImage); // Pane 4
        $pane.append( this.markerLayer );
	};

	MyOverlay.prototype.onRemove = function()
	{
		this.markerLayer.remove();
	};

	MyOverlay.prototype.draw = function()
	{
	    var projection = this.getProjection();
	    var zoom = this.getMap().getZoom();
	    var fragment = document.createDocumentFragment();
	    
	    this.markerLayer.empty(); // Empty any previous rendered markers
	    
		$("#cars").html(""); // Empty list of the cars
		
		index = 0; // Return to 0 the index
		
		for(var i = 0; i < MaximumCars; i++){
			
			//Add Index number
			index += 1;
			
			// Determine a random location from the bounds set previously
			var randomLatlng = new google.maps.LatLng(
					southWest.lat() + latSpan * Math.random(),
					southWest.lng() + lngSpan * Math.random()
			);
			
			var speed = getNumbers(25, 240);
			
			var randomLocation = projection.fromLatLngToDivPixel( randomLatlng );
				var $point = $('<div '
									+'class="map-point" '
									+'id="p'+i+'"'
									+'title="'+i+'" '
									+'style="'
										+'width:8px; '
										+'height:8px; '
										+'left:'+randomLocation.x+'px; '
										+'top:'+randomLocation.y+'px; '
										+'position:absolute; '
										+'cursor:pointer; '
								+'">'
									+'<img '
										+'src="http://maps.google.com/mapfiles/kml/pal4/icon15.png" '
										+'style="position: absolute; top: -6px; left: -6px" '
									+'/>'
								+'</div>');
				
				// For zoom 8 and closer show a title above the marker icon
				if( zoom >= 8 ){
					$point.append('<span '
									+'style="'
										+'position:absolute; '
										+'top:-22px; '
										+'left:-37px; '
										+'width:75px; '
										+'background-color:#fff; '
										+'border:solid 1px #000; '
										+'font-family: Arial, Helvetica, sans-serif; '
										+'font-size:10px; '
										+'text-align:center; '
									+'">'
										+'Custom ID '+i
									+'</span>');
				}
				
				// Append the HTML to the fragment in memory
				fragment.appendChild( $point.get(0) );
				
				//Append to table
				document.getElementById('cars').innerHTML += '<tr> <th scope=row>'+ index +'</th> <td>LV-'+ getName(1001, 9999) +'</td> <td>'+ speed +' km/h</td> <td>'+ randomLocation.x + randomLocation.y +'</td> </tr>';

		}
		
		// Now append the entire fragment from memory onto the DOM
		this.markerLayer.append(fragment);
		
	};
	
	var myLatlng = new google.maps.LatLng(56.950, 23.999); // Riga, LV
	
	var map = new google.maps.Map(document.getElementById("map"),
			{
				zoom: 4,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
	
	var OverlayMap = new MyOverlay( { map: map } );
	
	// A simple jQuery UI dialog for each marker
	var $dialog = $('<div id="dialog"></div>').append('body').dialog({
			autoOpen:false,
			width: 300,
			height: 200
		});

	$('#dialog').bind( "dialogopen", function( event, ui ){
		if($('body #dialog')){
			$dialog.parent().appendTo('#map-canvas');
		}
	});
	
	// Make sure to use live because the markers are rendered by javascript after initial DOM load
	$('.map-point').live('click',function( e ){
		$dialog.empty().append($(this).attr('id'));
		$dialog.dialog('open');
		
	});
});

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