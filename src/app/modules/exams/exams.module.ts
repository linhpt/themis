import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamComponent } from './exam/exam.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { EditExamComponent } from './edit-exam/edit-exam.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StartExamComponent } from './start-exam/start-exam.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormExamComponent } from './form-exam/form-exam.component';
import { DetailsContestantComponent } from './start-exam/details-contestant/details-contestant.component';
import { RankingsContestantComponent } from './start-exam/rankings-contestant/rankings-contestant.component';

const routes: Routes = [
  {
    path: '',
    component: ExamsComponent,
    children: [
      {
        path: 'exam/:id',
        component: ExamComponent
      },
      {
        path: 'create-exam',
        component: CreateExamComponent
      },
      {
        path: 'edit-exam/:id',
        component: EditExamComponent
      },
      {
        path: 'start-exam/:id',
        component: StartExamComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExamsComponent,
    ExamComponent,
    CreateExamComponent,
    EditExamComponent,
    StartExamComponent,
    FormExamComponent,
    DetailsContestantComponent,
    RankingsContestantComponent]
})
export class ExamsModule { }
