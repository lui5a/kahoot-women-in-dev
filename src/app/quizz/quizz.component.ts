import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit {
  originalQuestions:Array<any>  = [
    {
      id: 1,
      question: 'According to a 2020 survey, GAFAM’s employees are female?',
      options: ['25%', '10%', '50%', '60%'],
      answer: '25%',
    },
    {
      id: 2,
      question:
        'Fortune 500 companies with at least 3 women in leading positions saw a 66% increase in ROI.True or False?',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      id: 3,
      question: 'In 2020, US women in tech made _____ less money than men.',
      options: ['2.5%', '5%', '50%', '10%'],
      answer: '2.5%',
    },
    {
      id: 4,
      question: 'The ratio of men to women in engineering is____.',
      options: ['5:1', '1:1', '3:1', '10:1'],
      answer: '5:1',
    },
    {
      id: 5,
      question: 'What % of all Fortune 500 CIO positions are held by women?',
      options: ['17%', '25%', '50%', '7%'],
      answer: '17%',
    },
    {
      id: 6,
      question:
        'Women in tech experienced more burn-out than men in tech in 2021. True or False?',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      id: 7,
      question:
        'In Kansas City, Missouri -USA, women earn 102% of what men earn for the same tech job. True or False',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      id: 8,
      question: 'Who was the first programmer in the world?',
      options: ['Steve Jobs', 'Ada Lovelace', 'Charles Babbage', 'Bill Gates'],
      answer: 'Ada Lovelace',
    },
    {
      id: 9,
      question:
        'Who among these is known forher trailblazing contributions to computer programming, software development, and the design and implementation of programming languages?',
      options: [
        'Annie Easley',
        'Grace Murray Hopper',
        'Sudha Murty',
        'Marie Curie',
      ],
      answer: 'Grace Murray Hopper',
    },
    {
      id: 10,
      question:
        "Which inventor's technology set the stage for current day wifi ?",
      options: [
        'Albert Einstein',
        'Alexander Graham Bell',
        'Hedy Lamarr',
        'Charles Babbage',
      ],
      answer: 'Hedy Lamarr',
    },
  ];

  randomQuestion: any;
  remainingQuestions: Array<any> = [];
  selectedAnswer: any;
  totalScore = 0;
  questionNumber = 1;
  user: any;

  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    const randomIndex = Math.floor(
      Math.random() * this.originalQuestions.length
    );
    this.randomQuestion = this.originalQuestions[randomIndex];

  }

  onSelectionChange(option: any) {
    this.selectedAnswer = option;
  }

  nextQuestion() {

    this.originalQuestions.map((question) => {
      question.answer === this.selectedAnswer
        ? (this.totalScore += 10)
        : (this.totalScore += 0);
    });

    this.questionNumber++;
    const randomIndex = Math.floor(
      Math.random() * this.originalQuestions.length
    );
    this.randomQuestion = this.originalQuestions[randomIndex];
    this.originalQuestions.splice(randomIndex, 1);

  }
}

