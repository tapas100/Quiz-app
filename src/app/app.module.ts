import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatCheckboxModule, MatListModule, MatButtonModule, MatRippleModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoaderComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    ChartsModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
