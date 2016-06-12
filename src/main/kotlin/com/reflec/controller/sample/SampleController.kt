package com.reflec.controller.sample

import com.reflec.service.sample.SampleService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.servlet.ModelAndView

@Controller
@RequestMapping("/sample")
class SampleController @Autowired constructor(private val sampleService: SampleService) {
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun sample(model: ModelAndView): ModelAndView {
        return model.addObject("result", sampleService.add(1, 2)).apply { viewName = "/sample" }
    }
}