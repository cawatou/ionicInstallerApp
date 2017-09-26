import { NgModule }                               from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { LoginComponent }                         from './login.component';
import { ContractsComponent }                     from './contracts.component';
import { HistoryComponent }                       from './history.component';
import { HistoryDetailComponent }                 from './history-detail.component';
import { KnowledgeComponent }                     from './knowledge.component';
import { KnowledgeDetailComponent }               from './knowledge-detail.component';
import { MainComponent }                          from './main.component';
import { SchedulerComponent }                     from './scheduler.component';
import { NotfoundComponent }                      from './notfound.component';
import { AuthGuard }                              from './auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'contracts', component: ContractsComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'history/:id', component: HistoryDetailComponent, canActivate: [AuthGuard] },
  { path: 'knowledge',  component: KnowledgeComponent, canActivate: [AuthGuard] },
  { path: 'knowledge/:id', component: KnowledgeDetailComponent, canActivate: [AuthGuard] },
  { path: 'scheduler', component: SchedulerComponent, canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },
  { path: '**',  component: NotfoundComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
