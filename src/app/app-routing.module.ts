import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
//import { ResultComponent } from './result/result.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: "", redirectTo: 'welcome', pathMatch: "full" },
  { path: "welcome", component: StartQuizComponent, pathMatch: "full" },
  { path: "quizz", component: QuizzComponent, pathMatch: "full", canActivate: [UserGuard] },
  //{ path: "result", component: ResultComponent, pathMatch: "full", canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
