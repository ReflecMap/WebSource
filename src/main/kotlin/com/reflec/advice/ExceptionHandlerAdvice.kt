package com.reflec.advice

import com.reflec.exception.InvalidRequestException
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

import javax.servlet.http.HttpServletResponse
import java.io.IOException

@ControllerAdvice
class ExceptionHandlerAdvice {
    private val logger = LoggerFactory.getLogger(this.javaClass)
    @ExceptionHandler
    @Throws(IOException::class)
    fun handleInvalidRequestException(e: InvalidRequestException, response: HttpServletResponse) {
        logger.error("<<< Error >>>")
        logger.error("Exception class: ${e.javaClass.toString()}")
        logger.error("Message: ${e.message}")
        logger.error("Cause: ${e.cause}")
        logger.error("StackTrace:  ${e.stackTrace.joinToString().substring(0, 500)}...")
        response.sendError(HttpStatus.BAD_REQUEST.value())
    }
}