package com.reflec.domain

import com.fasterxml.jackson.annotation.JsonProperty

/**
 * Json Object of marker.
 */
data class MarkerJson(val lat: Double,
                      val lng: Double,
                      val title: String,
                      val rate: Float,
                      val subscribe: String,
                      val privateCheck: String) {

    /**
     * convert to Marker Class.
     */
    fun toMarker(): Marker {
        return Marker(lat = this.lat,
                      lng = this.lng,
                      title = this.title,
                      rate = this.rate,
                      subscribe = this.subscribe,
                      private = this.privateCheck.toBoolean())
    }

    constructor(marker: Marker): this(marker.lat, marker.lng, marker.title, marker.rate, marker.subscribe, marker.private.toString())
}