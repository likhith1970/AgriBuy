package com.agribuy.controller;

import org.springframework.web.bind.annotation.*;

import com.agribuy.dto.RegisterRequest;
import com.agribuy.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }
}
