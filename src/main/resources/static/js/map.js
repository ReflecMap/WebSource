//
// Create Map and Marker
//
class MyMap {
	constructor() {
		this.mymap = new GMaps({ div: "#map", lat: 0, lng: 0, zoom: 17 });
		this.markers = [];
	}

	//
	// public method
	//
	addMyMarker(markerInfo) {
		let contents = this._createMarkerInfoContents(markerInfo);
		let marker = {
			lat: markerInfo.lat,
			lng: markerInfo.lng,
			title: markerInfo.title,
			infoWindow: { content: contents }
		};
		this.mymap.addMarker(marker);
		this.markers.push(marker);
	}

	//
	// private method
	//
	// markerInfo { title, rate, subscribe, private }
	_createMarkerInfoContents(markerInfo) {
		return `<p>title: ${markerInfo.title}</p><p>rate: ${markerInfo.rate}</p><p>subscribe: ${markerInfo.subscribe}</p>`;
	}
}
