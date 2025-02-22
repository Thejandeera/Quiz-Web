package com.quiz_app.quiz_app.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Quiz {

    @Id
    private Integer id;
    private String title;

    @ManyToMany
    private List<Question> questions;
}
