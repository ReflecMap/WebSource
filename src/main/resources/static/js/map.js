(function() {
	'use strict';
	
    var lat = 35.710540;
    var lng = 139.8042225;
    var zoom = 15;
	var mymap;

	$(document).ready(function(){
		mymap = new GMaps({ 
			div: "#map", lat: lat, lng: lng, zoom: zoom, 
			// position.latLang.lat(), position.latLng.lng()
			click: function(position) {
				
//				if(confirm('Add Marker ?')) {
//					$(this).blur();
//					if($("#modal-overlay")[0]) return false;
//					
//					// open event
//					$("body").append('<div id="modal-overlay"></div>');
//					$("#modal-overlay").fadeIn("slow");
//					centeringModalSyncer();
//					$("#modal-content").fadeIn("slow");
//
//					// close event
//					$("#modal-overlay, #modal-close").unbind().click(function() {
//						$("#modal-content, #modal-overlay").fadeOut("slow", function(){
//							$('#modal-overlay').remove();
//						});
//					});
//				}
			},
		});

		mymap.addMarker({
	        lat: 35.710540,
	        lng: 139.797874,
	        title: "浅草駅",
	        infoWindow: {
	            content: 
	            	"<p><b>浅草駅</b></p>" +
	            	"<p>都会っぽい</p>"
	        }
	    });
		mymap.addMarker({
	        lat: 35.710063,
	        lng: 139.8107,
	        title: "東京スカイツリー",
	        infoWindow: {
	            content: 
	            	"<p><b>東京スカイツリー<b></p>" +
	            	"<p>でかい</p>"
	        }
		});
		
		// TODO: geolocate
//		GMaps.geolocate({
//			success: function(position) {
//				lat = position.coords.latitude;
//				lng = position.coords.longitude;
//				mymap.setCenter(lat, lng);
//			},
//			error: function(error) {
//				alert('Geolocation failed: '+error.message);
//			},
//			not_supported: function() {
//				alert("Your browser does not support geolocation");
//			},
//			always: function() {
//				alert("Done!");
//			}
//		});
		
	});
	
})();