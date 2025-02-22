package com.quiz_app.quiz_app.Services;


import com.quiz_app.quiz_app.Dao.QuizDao;
import com.quiz_app.quiz_app.Dao.QuestionDao;
import com.quiz_app.quiz_app.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;

    @Autowired
    QuestionDao questionDao;



    // Remove the static keyword here
    public String deleteQuiz(Integer id) {
        quizDao.deleteById(id);  // Use the injected quizDao instance
        return "Successfully deleted question";
    }

    public ResponseEntity<String> createQuiz(int id, String category, int numQ, String title) {
        // Check if the ID has at least 6 digits
        if (String.valueOf(id).length() < 6) {
            return new ResponseEntity<>("ID must be at least 6 digits long", HttpStatus.BAD_REQUEST);
        }

        // Check if the quiz ID already exists
        Optional<Quiz> existingQuiz = quizDao.findById(id);
        if (existingQuiz.isPresent()) {
            return new ResponseEntity<>("Quiz already exists. Change the ID", HttpStatus.CONFLICT);
        }

        // Retrieve random questions for the quiz
        List<Question> questions = questionDao.findRandomQuestionsByCategory(category, numQ);

        // Create and save the new quiz
        Quiz quiz = new Quiz();
        quiz.setId(id);
        quiz.setTitle(title);
        quiz.setQuestions(questions);

        quizDao.save(quiz);

        return new ResponseEntity<>("Success", HttpStatus.OK);
    }



    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Question>questionFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionsForUser = new ArrayList<>();
        for (Question q: questionFromDB) {
            QuestionWrapper qw = new QuestionWrapper(q.getId(),q.getQuestionTitle(),q.getOption1(),q.getOption2(),q.getOption3(),q.getOption4());
            questionsForUser.add(qw);
        }


        return new ResponseEntity<>(questionsForUser, HttpStatus.OK);
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz = quizDao.findById(id).get();
        List<Question> questions = quiz.getQuestions();
        int right = 0;
        int i = 0;
        for (Response response : responses) {
            if(response.getResponse().equals(questions.get(i).getrightAnswer())) {
                right = right + 1;
            }
            i++;
        }
        return new ResponseEntity<>(right, HttpStatus.OK);
    }



}
