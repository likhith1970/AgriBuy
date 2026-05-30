package com.agribuy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agribuy.entity.OtpVerification;

public interface OtpRepository extends JpaRepository<OtpVerification, Long> {

    Optional<OtpVerification> findByUserId(Long userId);

    Optional<OtpVerification> findByOtpCode(String otpCode);

}
