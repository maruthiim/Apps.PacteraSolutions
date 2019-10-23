"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("../dashboard/dashboard.component");
var login_component_1 = require("../login/login.component");
var app_layout_component_1 = require("../app-layout/app-layout.component");
var proposals_component_1 = require("../proposals/proposals.component");
var new_proposal_component_1 = require("../proposals/new-proposal/new-proposal.component");
var view_proposal_component_1 = require("../proposals/view-proposal/view-proposal.component");
var administration_component_1 = require("../administration/administration.component");
var planner_proposal_component_1 = require("../proposals/planner-proposal/planner-proposal.component");
var planner_name_component_1 = require("../proposals/planner-name/planner-name.component");
var unauthorized_component_1 = require("../unauthorized/unauthorized.component");
var route_guard_service_1 = require("./route-guard.service");
var constants_1 = require("../global/constants");
exports.childRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'Dashboard',
            class: 'glyphicon-stats',
            menu: true,
            users: [constants_1.Roles.ALL]
        }
    },
    {
        path: 'proposals',
        component: proposals_component_1.ProposalsComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'Proposals',
            class: 'glyphicon-list-alt',
            menu: true,
            users: [constants_1.Roles.ALL]
        }
    },
    {
        path: 'newProposal',
        component: new_proposal_component_1.NewProposalComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'New Proposal',
            class: 'glyphicon-copy',
            menu: true,
            users: [constants_1.Roles.Sales_Lead]
        }
    },
    {
        path: 'administration',
        component: administration_component_1.AdministrationComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'Administration',
            class: 'glyphicon-wrench',
            menu: true,
            users: [constants_1.Roles.Sales_Lead]
        }
    },
    {
        path: 'plannerProposal',
        component: planner_proposal_component_1.PlannerProposalComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'Planner Proposal',
            class: 'glyphicon-copy',
            menu: true,
            users: [constants_1.Roles.Sales_Lead]
        }
    },
    {
        path: 'plannerName',
        component: planner_name_component_1.PlannerNameComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'Planner Proposal',
            class: 'glyphicon-copy',
            menu: false,
            users: [constants_1.Roles.Sales_Lead]
        }
    },
    {
        path: 'viewProposal/:proposalID',
        component: view_proposal_component_1.ViewProposalComponent,
        canActivate: [route_guard_service_1.RouteGuardService],
        data: {
            title: 'View Proposal',
            class: 'glyphicon-copy',
            menu: false,
            users: [constants_1.Roles.ALL]
        }
    },
    {
        path: 'unauthorized',
        component: unauthorized_component_1.UnauthorizedComponent,
        //canActivate: [RouteGuardService],
        data: {
            title: '',
            class: '',
            menu: false,
            users: [constants_1.Roles.ALL]
        }
    }
];
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'app',
        component: app_layout_component_1.AppLayoutComponent,
        //canActivate: [RouteGuardService],
        children: exports.childRoutes,
        data: {
            title: '',
            class: '',
            menu: false,
            users: [constants_1.Roles.ALL]
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/dashboard'
    },
    {
        path: '**',
        redirectTo: '/app/dashboard'
    }
];
//# sourceMappingURL=routes.js.map