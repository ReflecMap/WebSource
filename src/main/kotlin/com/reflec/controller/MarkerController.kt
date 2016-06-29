package com.reflec.controller

import com.reflec.domain.MapJson
import com.reflec.domain.MarkerJson
import com.reflec.service.MarkerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/marker")
open class MarkerController @Autowired constructor(private val service: MarkerService) {
    /**
     * マーカーの登録処理.
     */
    @RequestMapping("/insert", method = arrayOf(RequestMethod.POST), consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun insert(@RequestBody markerJson: MarkerJson): String {
        return if(service.mark(markerJson)){ "OK" } else { "FAILED" }
    }

    /**
     * Select all markers from DB.
     */
    @RequestMapping("/selectAll", method = arrayOf(RequestMethod.POST))
    fun selectAll(): MapJson = service.selectAllMarker()

    /**
     * Delete all markers.
     */
    @RequestMapping("/deleteAll", method = arrayOf(RequestMethod.DELETE))
    fun deleteAll() = service.deleteAllMarker()
}