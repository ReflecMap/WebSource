package com.reflec.domain

import java.io.Serializable
import javax.persistence.*

/**
 * Entity of markers table.
 */
@Entity
@Table(name = "markers")
data class Marker(@Id @GeneratedValue val id: Long? = null,
                  @Column val lat: Double = 0.0,
                  @Column val lng: Double = 0.0,
                  @Column val title: String = "",
                  @Column val rate: Float = 0.0f,
                  @Column val subscribe: String = "",
                  @Column val private: Boolean = false) : Serializable