package com.reflec.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.servlet.ModelAndView

@Controller
class MainController {
    @RequestMapping("/mypage")
    fun myPage(): String = "mypage"

    @RequestMapping("/input-modal")
    fun inputModal(): String = "input-modal"
}