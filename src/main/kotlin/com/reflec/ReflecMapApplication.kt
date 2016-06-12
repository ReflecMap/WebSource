package com.reflec

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class ReflecMapApplication{
	companion object{
		@JvmStatic
		fun main(args: Array<String>) {
		    SpringApplication.run(ReflecMapApplication::class.java, *args)
		}
	}
}
