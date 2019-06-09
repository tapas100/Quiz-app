import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Quiz } from '../models/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';       // Mode of Quiz 
  quizName: string;
  no_of_correct = 0;   // No of correct answer 
  no_of_wrong = 0;     // No of wrong answer

  public barChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
  public barChartLabels = ['Correct', 'Incorrect'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [1, 5], label: '' }
  ];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
    });
    this.mode = 'quiz';
  }

  get filteredQuestions() {
    return this.quiz.questions
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
      this.quiz.questions.forEach((ele, i) => {
        if (ele.id == question.id) {
          ele.options.forEach(el => {
            if (el.id == option.id)
              if (el.isAnswer == el.selected) {
                this.quiz.questions[i].answered = true;
              }
              else {
                this.quiz.questions[i].answered = false;
              }
          }

          )
        }
      })
    }
  }
  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.no_of_correct = 0;
    this.no_of_wrong = 0;
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    answers.forEach(ele => {
      if (ele.answered == true) {
        this.no_of_correct = this.no_of_correct + 1;
      }
      else {
        this.no_of_wrong = this.no_of_wrong + 1;
      }
    })

    this.barChartData = [
      { data: [this.no_of_correct, this.no_of_wrong], label: '' }
    ];
    this.mode = 'result';
  }
  onReset(){
     this.mode = 'quiz'
     this.loadQuiz(this.quizName);  
  }
}
