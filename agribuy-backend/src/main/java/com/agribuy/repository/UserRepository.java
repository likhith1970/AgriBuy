package com.agribuy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agribuy.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<User> findByPhoneNumber(String phoneNumber);

}