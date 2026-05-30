package com.agribuy.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.agribuy.dto.RegisterRequest;
import com.agribuy.entity.User;
import com.agribuy.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
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
        user.setPassword(request.getPassword());
        user.setEmail(request.getEmail());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setRole(request.getRole());
        user.setStatus("ACTIVE");
        user.setCreatedDate(LocalDateTime.now());

        userRepository.save(user);

        return "User Registered Successfully";
    }
}