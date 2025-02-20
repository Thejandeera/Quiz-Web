package com.quiz_app.quiz_app.Dao;

import com.quiz_app.quiz_app.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizDao extends JpaRepository <Quiz,Integer>{
}
