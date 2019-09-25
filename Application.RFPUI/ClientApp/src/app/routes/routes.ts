import { Routes, Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { AppLayoutComponent } from '../app-layout/app-layout.component';
import { ProposalsComponent } from '../proposals/proposals.component';
import { NewProposalComponent } from '../proposals/new-proposal/new-proposal.component';
import { ViewProposalComponent } from '../proposals/view-proposal/view-proposal.component';
import { RouteGuardService } from '../services/route-guard.service';

export const childRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService], data: { title: 'Dashboard', icon: 'glyphicon glyphicon-th-large'}},
  { path: 'proposals', component: ProposalsComponent, canActivate: [RouteGuardService], data: { title: 'Proposals', icon: 'glyphicon glyphicon-list-alt'}},
  { path: 'newProposal', component: NewProposalComponent, canActivate: [RouteGuardService], data: { title: 'New Proposal', icon: 'glyphicon glyphicon-copy'}},
  { path: 'viewProposal/:proposalID', component: ViewProposalComponent, canActivate: [RouteGuardService], data: { title: 'View Proposal', icon: 'glyphicon glyphicon-copy'}}
];


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    canActivate: [RouteGuardService],
    children: childRoutes
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/dashboard'
  },
  {
    path: '**',
    redirectTo: '/home/dashboard'
  }
];
