package com.reflec.controller

import org.springframework.boot.autoconfigure.web.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import javax.servlet.http.HttpServletRequest

@Controller
class GlobalErrorController : ErrorController {
    private val ERROR_PATH = "/GlobalError"

    @RequestMapping("/globalError")
    fun error(request: HttpServletRequest): String = ERROR_PATH

    override fun getErrorPath(): String? = ERROR_PATH
}