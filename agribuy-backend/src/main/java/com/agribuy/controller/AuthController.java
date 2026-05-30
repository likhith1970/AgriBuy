package com.agribuy.controller;

import org.springframework.web.bind.annotation.*;

import com.agribuy.dto.RegisterRequest;
import com.agribuy.service.AuthService;
import com.agribuy.dto.LoginRequest;
import com.agribuy.dto.SendOtpRequest;
import com.agribuy.dto.VerifyOtpRequest;
import com.agribuy.dto.ResetPasswordRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

//    @PostMapping("/register")
//    public String register(@RequestBody RegisterRequest request) {
//        return authService.register(request);
//    }
    
    @PostMapping("/register")
    public String register(
            @Valid @RequestBody RegisterRequest request) {

        return authService.register(request);
    }
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
    
    @PostMapping("/send-otp")
    public String sendOtp(
            @RequestBody SendOtpRequest request) {

        return authService.sendOtp(request);
    }
    
    @PostMapping("/verify-otp")
    public String verifyOtp(
            @RequestBody VerifyOtpRequest request) {

        return authService.verifyOtp(request);
    }
    
    @PostMapping("/reset-password")
    public String resetPassword(
            @RequestBody ResetPasswordRequest request) {

        return authService.resetPassword(request);
    }
    
    
}
