"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("../dashboard/dashboard.component");
var login_component_1 = require("../login/login.component");
var app_layout_component_1 = require("../app-layout/app-layout.component");
var proposals_component_1 = require("../proposals/proposals.component");
var new_proposal_component_1 = require("../new-proposal/new-proposal.component");
var view_proposal_component_1 = require("../view-proposal/view-proposal.component");
exports.childRoutes = [
    { path: 'Dashboard', component: dashboard_component_1.DashboardComponent, data: { title: 'Dashboard', icon: 'glyphicon glyphicon-th-large' } },
    { path: 'Proposals', component: proposals_component_1.ProposalsComponent, data: { title: 'Proposals', icon: 'glyphicon glyphicon-list-alt' } },
    { path: 'NewProposal', component: new_proposal_component_1.NewProposalComponent, data: { title: 'New Proposal', icon: 'glyphicon glyphicon-copy' } },
    { path: 'ViewProposal/:ProposalID', component: view_proposal_component_1.ViewProposalComponent, data: { title: 'View Proposal', icon: 'glyphicon glyphicon-copy' } }
];
exports.routes = [
    {
        path: 'Login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'Home',
        component: app_layout_component_1.AppLayoutComponent,
        children: exports.childRoutes
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
//# sourceMappingURL=routes.js.map