package com.quiz_app.quiz_app.Services;

import com.quiz_app.quiz_app.Dao.QuestionDao;
import com.quiz_app.quiz_app.Entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class QuestionService {
    private final QuestionDao questionDao;

    @Autowired
    public QuestionService(QuestionDao questionDao) {
        this.questionDao = questionDao;
    }

    public String addQuestion(Question question) {
        questionDao.save(question);
        return "Successfully added question";

    }


    public List<Question> getQuestionsByCategory(String category) {
        return questionDao.findByCategoryIgnoreCase(category);
    }

    public List<Question> getAllQuestion() {
        return questionDao.findAll();
    }


    public String deleteQuestion(Integer id) {
        questionDao.deleteById(id);
        return "Successfully deleted question";
    }
}