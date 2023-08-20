/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */

'use client';

import { tw } from 'twind';
import React, { useState } from 'react';
import Link from 'next/link.js';
import { quiz } from './data.js';

const QuizSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(``);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log(`true`);
    } else {
      setSelectedAnswer(false);
      console.log(`false`);
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          },
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>Todays Challenge</p>
      <div>
        <h2 className={tw(`text-center`)}>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            <img src={questions[activeQuestion].image} />
            {answers.map((answer, idx) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`list ${selectedAnswerIndex === idx ? `list-selected` : `list-hover`}`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="button">
                {activeQuestion === question.length - 1 ? `Finish` : `Next`}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {` `}
                {activeQuestion === question.length - 1 ? `Finish` : `Next`}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <Link href="./account">
              <button className="button">
                Claim <span>{result.score} Tokens</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
