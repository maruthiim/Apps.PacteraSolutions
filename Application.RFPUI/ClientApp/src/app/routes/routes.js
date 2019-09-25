"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("../dashboard/dashboard.component");
var login_component_1 = require("../login/login.component");
var app_layout_component_1 = require("../app-layout/app-layout.component");
var proposals_component_1 = require("../proposals/proposals.component");
var new_proposal_component_1 = require("../proposals/new-proposal/new-proposal.component");
var view_proposal_component_1 = require("../proposals/view-proposal/view-proposal.component");
var route_guard_service_1 = require("../services/route-guard.service");
exports.childRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [route_guard_service_1.RouteGuardService], data: { title: 'Dashboard', icon: 'glyphicon glyphicon-th-large' } },
    { path: 'proposals', component: proposals_component_1.ProposalsComponent, canActivate: [route_guard_service_1.RouteGuardService], data: { title: 'Proposals', icon: 'glyphicon glyphicon-list-alt' } },
    { path: 'newProposal', component: new_proposal_component_1.NewProposalComponent, canActivate: [route_guard_service_1.RouteGuardService], data: { title: 'New Proposal', icon: 'glyphicon glyphicon-copy' } },
    { path: 'viewProposal/:proposalID', component: view_proposal_component_1.ViewProposalComponent, canActivate: [route_guard_service_1.RouteGuardService], data: { title: 'View Proposal', icon: 'glyphicon glyphicon-copy' } }
];
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: app_layout_component_1.AppLayoutComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        children: exports.childRoutes
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
//# sourceMappingURL=routes.js.map