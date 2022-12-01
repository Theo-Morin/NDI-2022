<?php

class Quiz {
    public static function getQuizzes() {
        $queryStr = 'SELECT *, (SELECT COUNT(*) from quiz_question where quizId = id) AS questionCount FROM quiz';
        $stmt = Database::getInstance()->query($queryStr);
        $quizzes = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $quizzes;
    }

    public $mainInfo = null, $questions = null;

    public function __construct($name) {
        $stmt = Database::getInstance()->prepare('SELECT * FROM quiz WHERE name = ?');
        $stmt->execute([$name]);
        $quizData = $stmt->fetchObject();
        if ($quizData !== false) {
            $this->mainInfo = $quizData;
            $this->loadQuestions();
        }
    }

    public function loadQuestions() {
        $stmt = Database::getInstance()->prepare('SELECT * FROM quiz_question WHERE quizId = ? ORDER BY pos');
        $stmt->execute([$this->mainInfo->id]);
        $this->questions = [];
        while ($questionData = $stmt->fetchObject()) {
            $this->questions[] = new QuizQuestion($questionData);
        }
    }
}


class QuizQuestion {
    public $mainInfo = null, $answers = null;

    public function __construct($param1, $param2 = null) {
        if ($param2 === null) {
            $this->mainInfo = $param1;
            $this->loadAnswers();
        } else {
            $stmt = Database::getInstance()->prepare('SELECT * FROM quiz_question WHERE quizId = ? AND pos = ?');
            $stmt->execute([$param1, $param2]);
            $questionData = $stmt->fetchObject();
            if ($questionData !== false) {
                $this->mainInfo = $questionData;
                $this->loadAnswers();
            }
        }
    }

    public function loadAnswers() {
        $stmt = Database::getInstance()->prepare('SELECT * FROM quiz_answer WHERE quizId = ? AND questionPos = ? ORDER BY pos');
        $stmt->execute([$this->mainInfo->quizId, $this->mainInfo->pos]);
        $this->answers = $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}
