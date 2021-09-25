import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 buttonName = "Start Here";
 begin = false;
 complete = false;
 questions: any;
 currentQuestion: any;
 currentIndex: number;
 score: any;
 noAnswer: any;

 constructor(){
   this.questions = [
     {
       id: 1,
       question: 'Question 1: Which of the following awards is not associated with the field of sports?',
       option: [
         {optionid: 1, name: 'Arjuna Award'},
         {optionid: 2, name: 'Dhyan Chand Award'},
         {optionid: 3, name: 'Norman Borlaug Award'},
         {optionid: 4, name: 'Dronacharya Award'}
       ],
       answer: 3,
       selected: 0
     },
     {
       id: 2,
       question: 'Question 2: Commerical arm of ISRO is .....?',
       option: [
         {optionid: 1, name: 'ANDROID'},
         {optionid: 2, name: 'ANTRAX'},
         {optionid: 3, name: 'ANTRAY'},
         {optionid: 4, name: 'ANTRIX'}
       ],
       answer: 4,
       selected: 0
     },
     {
       id: 3,
       question: 'Question 3: "Rad-cliff line" is a boundry line between?',
       option: [
         {optionid: 1, name: 'India and Bangladesh'},
         {optionid: 2, name: 'India and Pakistan'},
         {optionid: 3, name: 'India and China'},
         {optionid: 4, name: 'India and Bhutan'}
       ],
       answer: 2,
       selected: 0
     },
     {
       id: 4,
       question: 'Question 4: Which one of the following is the greatest circle?',
       option: [
         {optionid: 1, name: 'Equator'},
         {optionid: 2, name: 'Tropic of Cancer'},
         {optionid: 3, name: 'Arctic Circle'},
         {optionid: 4, name: 'Tropic of Capricorn'}
       ],
       answer: 3,
       selected: 0
     },
     {
       id: 5,
       question: 'Question 5: Who build the first modern motorcar?',
       option: [
         {optionid: 1, name: 'Daimler'},
         {optionid: 2, name: 'Henry Ford'},
         {optionid: 3, name: 'Henry Austin'},
         {optionid: 4, name: 'Karl Benz'}
       ],
       answer: 4,
       selected: 0
     },
     {
      id: 6,
      question: 'Question 6: Who invented the Ball Point Pen?',
      option: [
        {optionid: 1, name: 'Waterman Brothers'},
        {optionid: 2, name: 'Bicc Brothers'},
        {optionid: 3, name: 'Biro Brothers'},
        {optionid: 4, name: 'Write Brothers'}
      ],
      answer: 3,
      selected: 0
    },
    {
      id: 7,
      question: 'Question 7: B.C.Roy Award is given in the field?',
      option: [
        {optionid: 1, name: 'Music'},
        {optionid: 2, name: 'Envirnment'},
        {optionid: 3, name: 'Journalism'},
        {optionid: 4, name: 'Medicine'}
      ],
      answer: 4,
      selected: 0
    },
    {
      id: 8,
      question: 'Question 8: When is National Army Day celebrated?',
      option: [
        {optionid: 1, name: 'Janauary 15th'},
        {optionid: 2, name: 'November 8th'},
        {optionid: 3, name: 'December 4th'},
        {optionid: 4, name: 'February 13th'}
      ],
      answer: 1,
      selected: 0
    },
    {
      id: 9,
      question: 'Question 9: World consumer rights day is on?',
      option: [
        {optionid: 1, name: '15th June'},
        {optionid: 2, name: '15th March'},
        {optionid: 3, name: '15th February'},
        {optionid: 4, name: '15th April'}
      ],
      answer: 2,
      selected: 0
    },
    {
      id: 10,
      question: 'Question 10: What is the relative charge of Proton and Electron?',
      option: [
        {optionid: 1, name: '-1,+1'},
        {optionid: 2, name: '+2,-2'},
        {optionid: 3, name: '+1,-1'},
        {optionid: 4, name: '-2,+1'}
      ],
      answer: 3,
      selected: 0
    }
   ];

   this.currentIndex = 0;
   this.currentQuestion = this.questions[this.currentIndex];
  }
  
  next(){
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];
  }

  submit(){
    this.buttonName = "Restart";
    if (this.currentIndex + 1 == this.questions.length){
      this.complete = true;
      this.begin = false;
      this.score = 0;
      this.noAnswer = 0;
      this.questions.map(x => {
        if (x.selected != 0){
          if (x.selected == x.answer) {
            this.score++;
          }
        }
        else {
          this.noAnswer++;
        }

        x.selected = 0;
      });
    } 
  }

  start(){
    this.complete = false;
    this.currentIndex = 0;
    this.currentQuestion = this.questions[this.currentIndex];
    this.begin = true;
  }

}
