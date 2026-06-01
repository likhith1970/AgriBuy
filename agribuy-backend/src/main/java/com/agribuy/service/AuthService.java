package com.agribuy.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.agribuy.dto.RegisterRequest;
import com.agribuy.entity.User;
import com.agribuy.repository.UserRepository;
import com.agribuy.dto.LoginRequest;

import java.time.LocalDateTime;
import java.util.Random;

import com.agribuy.dto.SendOtpRequest;
import com.agribuy.entity.OtpVerification;

import com.agribuy.repository.OtpRepository;

import com.agribuy.dto.VerifyOtpRequest;

import com.agribuy.dto.ResetPasswordRequest;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.agribuy.dto.LoginResponse;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final OtpRepository otpRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository,
            OtpRepository otpRepository,
            BCryptPasswordEncoder passwordEncoder) {

	this.userRepository = userRepository;
	this.otpRepository = otpRepository;
	this.passwordEncoder = passwordEncoder;
	}

    public String register(RegisterRequest request) {

        if(userRepository.findByUsername(request.getUsername()).isPresent()) {
            return "Username already exists";
        }

        if(userRepository.findByPhoneNumber(request.getPhoneNumber()).isPresent()) {
            return "Phone number already exists";
        }

        User user = new User();

        user.setUsername(request.getUsername());
//        user.setPassword(request.getPassword());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setRole(request.getRole());
        user.setStatus("ACTIVE");
        user.setCreatedDate(LocalDateTime.now());

        userRepository.save(user);

        return "User Registered Successfully";
    }
    
    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return new LoginResponse(
                    "Invalid Username",
                    null);
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            return new LoginResponse(
                    "Invalid Password",
                    null);
        }

        return new LoginResponse(
                "Login Successful",
                user.getRole().name());
    }
    
    public String sendOtp(SendOtpRequest request) {

        User user = userRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        String otp = String.valueOf(
                100000 + new Random().nextInt(900000));

        OtpVerification otpVerification =
                new OtpVerification();

        otpVerification.setUserId(user.getUserId());
        otpVerification.setOtpCode(otp);
        otpVerification.setVerified(false);
        otpVerification.setCreatedDate(LocalDateTime.now());
        otpVerification.setExpiryTime(
                LocalDateTime.now().plusMinutes(5));

        otpRepository.save(otpVerification);

        return "OTP Generated : " + otp;
    }
    
    public String verifyOtp(VerifyOtpRequest request) {

        OtpVerification otp = otpRepository
                .findByOtpCode(request.getOtpCode())
                .orElse(null);

        if (otp == null) {
            return "Invalid OTP";
        }

        if (otp.getExpiryTime().isBefore(LocalDateTime.now())) {
            return "OTP Expired";
        }

        otp.setVerified(true);

        otpRepository.save(otp);

        return "OTP Verified Successfully";
    }
    
    public String resetPassword(ResetPasswordRequest request) {

        User user = userRepository
                .findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        userRepository.save(user);

        return "Password Reset Successfully";
    }
    
    
}