package com.quiz_app.quiz_app.Services;

import com.quiz_app.quiz_app.Dao.UserRepository;
import com.quiz_app.quiz_app.Entity.User;
import org.springframework.stereotype.Service;

import com.quiz_app.quiz_app.SecurityConfig.JwtUtil;
import com.quiz_app.quiz_app.Entity.AuthRequest;
import com.quiz_app.quiz_app.Entity.AuthResponse;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public String registerUser(User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return "Email already exists!";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Encrypt password
        userRepository.save(user);
        return "User registered successfully!";
    }

    public AuthResponse loginUser(AuthRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                String token = jwtUtil.generateToken(user.getEmail());
                return new AuthResponse(token, "Login successful");
            }
        }
        return new AuthResponse(null, "Invalid email or password");
    }
}


