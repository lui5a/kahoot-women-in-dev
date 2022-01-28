import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizzComponent } from './quizz/quizz.component';
import { UserGuard } from './user.guard';

@NgModule({
  declarations: [
    AppComponent,
    StartQuizComponent,
    QuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
