package com.reflec.exception

class InvalidRequestException : Exception {

    constructor() : super() {
    }

    constructor(message: String) : super(message) {
    }

    constructor(message: String, cause: Throwable) : super(message, cause) {
    }

    constructor(cause: Throwable) : super(cause) {
    }

    companion object {
        private val serialVersionUID = 2203894661053195203L
    }
}