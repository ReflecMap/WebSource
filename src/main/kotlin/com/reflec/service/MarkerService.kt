package com.reflec.service

import com.reflec.domain.MapJson
import com.reflec.domain.MarkerJson
import com.reflec.repository.MarkerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
open class MarkerService @Autowired constructor(private val repository: MarkerRepository) {

    /**
     * save the marker.
     * @param request HttpRequest
     */
    fun mark(markerJson: MarkerJson): Boolean {
        println(markerJson.toString())
        return try { // tryは最後の値を返す
            // Mapping用ObjectからEntityに変換
            val marker = markerJson.toMarker()

            // insert
            repository.save(marker)
            true
        } catch(e: Exception) {
            e.printStackTrace()
            false
        }
    }

    /**
     *
     */
    fun selectAllMarker(): MapJson{
        val markers = repository.findAll().map { MarkerJson(it) }

        return MapJson(markers)
    }

    fun deleteAllMarker(){
        repository.deleteAll()
    }
}