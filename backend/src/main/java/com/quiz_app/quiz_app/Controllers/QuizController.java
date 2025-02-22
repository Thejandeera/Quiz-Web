package com.quiz_app.quiz_app.Controllers;



import com.quiz_app.quiz_app.Entity.QuestionWrapper;
import com.quiz_app.quiz_app.Entity.Quiz;
import com.quiz_app.quiz_app.Entity.Response;
import com.quiz_app.quiz_app.Services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Quiz")
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestParam int id ,@RequestParam String category, @RequestParam int numQ, @RequestParam String title) {
        return quizService.createQuiz(id,category,numQ,title);

    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id) {
        return quizService.getQuizQuestions(id);

    }
    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> responses ) {
        return quizService.calculateResult(id, responses);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteQuestion(@PathVariable Integer id){
        return quizService.deleteQuiz(id);  // Use quizService instance
    }
}
