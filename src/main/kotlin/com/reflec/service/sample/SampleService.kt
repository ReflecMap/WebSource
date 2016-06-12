package com.reflec.service.sample

import org.springframework.stereotype.Service

@Service
class SampleService {
    fun add(left: Int, right: Int): Int = left + right
}