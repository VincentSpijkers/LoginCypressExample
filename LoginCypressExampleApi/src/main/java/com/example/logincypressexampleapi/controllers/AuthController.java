package com.example.logincypressexampleapi.controllers;

import com.example.logincypressexampleapi.dto.LoginRequest;
import com.example.logincypressexampleapi.dto.Response;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = {"http://localhost", "http://localhost"})
public class AuthController {

    @PostMapping("")
    public Response login(@RequestBody LoginRequest loginRequest) {
        if ("hetgoedewachtwoord1!".equals(loginRequest.password)) {

            return new Response("ACCEPTED");
        } else {
            return new Response("FORBIDDEN");
        }
    }
}

