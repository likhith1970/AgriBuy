package com.agribuy.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "otp_verification")
@Data
public class OtpVerification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long otpId;

    private Long userId;

    @Column(nullable = false)
    private String otpCode;

    private LocalDateTime expiryTime;

    private Boolean verified;

    private LocalDateTime createdDate;
}
