import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './core/AngularMaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { NewProposalComponent } from './new-proposal/new-proposal.component';
import { ViewProposalComponent } from './view-proposal/view-proposal.component';

import { HttpService } from './global/http.service';
import { ProposalService } from './services/proposal.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    AppLayoutComponent,
    MasterComponent,
    DashboardComponent,
    ProposalsComponent,
    NewProposalComponent,
    ViewProposalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
