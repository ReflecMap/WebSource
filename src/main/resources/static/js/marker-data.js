//
// Marker Data(lat, lng, title, rate, subscribe, private)
//
class MarkerData {
    constructor() {
        this.obj = {};
    }

    saveMarkerPosition(position) {
        this.obj.lat = (position.lat !== undefined) ? position.lat : 0;
        this.obj.lng = (position.lng !== undefined) ? position.lng : 0;
    }

    saveMarkerInfomation(markerInfo) {
        this.obj.title = markerInfo.title;
        this.obj.rate = markerInfo.rate;
        this.obj.subscribe = markerInfo.subscribe;
        this.obj.privateCheck = markerInfo.privateCheck;
    }

    // MarkerDat to JSONData([])
    getJSONData() {
        return JSON.stringify(this.obj);
    }
}

