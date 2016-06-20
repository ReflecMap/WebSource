//
// Create Map and Marker
//
class MyMap {
	constructor() {
		this.mymap = new GMaps({ div: "#map", lat: 0, lng: 0, zoom: 17 });
	}

	//
	// public method
	//
	// new marker add
	addMyMarker(markerInfo) {
		let marker = {
			lat: markerInfo.lat,
			lng: markerInfo.lng,
			title: markerInfo.title,
			details: {
				id: markerInfo.id,
				title: markerInfo.title,
				rate: markerInfo.rate,
				subscribe: markerInfo.subscribe,
				privateCheck: markerInfo.privateCheck
			}
		};

		this.mymap.addMarker(marker);
	}

	// marker info update
	updateMyMarker(markerInfo) {
		let marker = this._identifyMarker(markerInfo.id);

		// Title when the mouse over
		marker.title = markerInfo.title;

		// Details when the modal
		marker.details.id = markerInfo.id;
		marker.details.title = markerInfo.title;
		marker.details.rate = markerInfo.rate;
		marker.details.subscribe = markerInfo.subscribe;
		marker.details.privateCheck = markerInfo.privateCheck;
	}

	//
	// private method
	//
	// To identify the marker in the ID
	_identifyMarker(markerId) {
		this.mymap.markers.forEach(marker => {
			if(markerID === marker.details.id) {
				return marker;
			}
		});
	}
}
