import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  setValues() {
    this.userForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
    });
  }

  enterQuiz() {
    const userName = this.userForm.get('userName')?.value;
    const user = {
      user: userName
    };
    localStorage.setItem('user', userName);
    if(user){
      this.router.navigateByUrl('/quizz')
    }
  }

}
