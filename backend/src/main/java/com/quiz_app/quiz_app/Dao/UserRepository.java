package com.quiz_app.quiz_app.Dao;

import com.quiz_app.quiz_app.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;



public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}


