//
// Marker Data(lat, lng, title, rate, subscribe, private)
//
var staticMarkerId = 0;

class MarkerData {
    constructor() {
        // A marker for individual ID save
        this.individualId = 0;
        // id, title, rate, subscribe, privateCheck save
        this.obj = {};
    }

    saveMarkerPosition(position) {
        this.obj.lat = (position.lat !== undefined) ? position.lat : 0;
        this.obj.lng = (position.lng !== undefined) ? position.lng : 0;
    }

    saveMarkerInfomation(markerInfo) {
        this.obj.id = markerInfo.id;
        this.obj.title = markerInfo.title;
        this.obj.rate = markerInfo.rate;
        this.obj.subscribe = markerInfo.subscribe;
        this.obj.privateCheck = markerInfo.privateCheck;
    }

    // ID will be set in the provisional
    getMarkerStaticID() {
        return staticMarkerId++;
    }

    // MarkerDat to JSONData([])
    getJSONData() {
        return JSON.stringify(this.obj);
    }
}

