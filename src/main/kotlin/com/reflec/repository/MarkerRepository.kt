package com.reflec.repository

import com.reflec.domain.Marker
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MarkerRepository : JpaRepository<Marker, Long> {

}