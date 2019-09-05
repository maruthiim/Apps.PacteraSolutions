import { Routes, Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { ProposalsComponent } from '../proposals/proposals.component';
import { NewProposalComponent } from '../new-proposal/new-proposal.component';
import { ViewProposalComponent } from '../view-proposal/view-proposal.component';

export const childRoutes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, data: { title: 'Dashboard', icon: 'glyphicon glyphicon-th-large'}},
  { path: 'Proposals', component: ProposalsComponent, data: { title: 'Proposals', icon: 'glyphicon glyphicon-list-alt'}},
  { path: 'NewProposal', component: NewProposalComponent, data: { title: 'New Proposal', icon: 'glyphicon glyphicon-copy'}},
  { path: 'ViewProposal/:ProposalID', component: ViewProposalComponent, data: { title: 'View Proposal', icon: 'glyphicon glyphicon-copy'}}
];


export const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Home',
    component: AppLayoutComponent,
    children: childRoutes
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/Home/Dashboard'
  },
  {
    path: '**',
    redirectTo: '/Home/Dashboard'
  }
];
