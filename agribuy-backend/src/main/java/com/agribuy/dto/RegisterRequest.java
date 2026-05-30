package com.agribuy.dto;

import com.agribuy.entity.Role;
import lombok.Data;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class RegisterRequest {

	@NotBlank(message = "Username is required")
    private String username;
	@NotBlank(message = "Password is required")
    private String password;
	@Email(message = "Invalid Email")
    private String email;
	@NotBlank(message = "Phone Number is required")
    private String phoneNumber;
    private Role role;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
    
    

}
