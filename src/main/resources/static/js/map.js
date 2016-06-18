var MyMap = function() {
	this.lat = 35.710540;
	this.lng = 139.8042225;
	this.zoom = 15;
	this.mymap = new GMaps({
		div: "#map",
		lat: this.lat,
		lng: this.lng,
		zoom: this.zoom
	});
	this.markers = [];
};
MyMap.prototype.addMyMarker = function(markerData) {
	var marker = {
		lat: markerData.lat,
		lng: markerData.lng,
		title: "test"
	};
	this.mymap.addMarker(marker);
	this.markers.push(marker);
};
