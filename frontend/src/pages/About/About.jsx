import React from "react";
import "./About.css";
import NavigationBar from "../../components/Navbar/NavigationBar";

const About = () => {
    return (<>
        <NavigationBar />
        <div className="about-container">
            <div className="about-card">
                <h1 className="about-title">About Our Quiz Platform</h1>
                <p className="about-desc">
                    Welcome to our interactive quiz platform, where learning meets fun!
                    Our system allows teachers to create engaging quizzes, while students
                    can explore and attempt quizzes in multiple languages.
                </p>
                <div className="features">
                    <div className="feature-card">
                        <h2>For Teachers</h2>
                        <p>Create and manage quizzes with ease.</p>
                    </div>
                    <div className="feature-card">
                        <h2>For Students</h2>
                        <p>Access a variety of quizzes and track progress.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Multi-language Support</h2>
                        <p>Learn in your preferred language.</p>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
};

export default About;
