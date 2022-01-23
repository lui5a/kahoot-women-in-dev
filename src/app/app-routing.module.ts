import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
<<<<<<< HEAD
=======
//import { ResultComponent } from './result/result.component';
>>>>>>> 05bfd789201bf18898bf06609225398092267e88
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: "", redirectTo: 'welcome', pathMatch: "full" },
  { path: "welcome", component: StartQuizComponent, pathMatch: "full" },
  { path: "quizz", component: QuizzComponent, pathMatch: "full", canActivate: [UserGuard] },
<<<<<<< HEAD
=======
  //{ path: "result", component: ResultComponent, pathMatch: "full", canActivate: [UserGuard] }
>>>>>>> 05bfd789201bf18898bf06609225398092267e88
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
