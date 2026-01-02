package com.eazystore.eazybytes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//No nered to mentio n the @ComponentScan since this folder is inside the spring main package
@RestController
@RequestMapping("api/v1/products")
public class ProductController {
    @GetMapping
    public String getProducts(){
        return " Here are your products";
    }

}
