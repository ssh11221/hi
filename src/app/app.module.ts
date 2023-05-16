import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { EbrListComponent } from './ebr-list/ebr-list.component';
import { EbrEditComponent } from './ebr-edit/ebr-edit.component';
import { RbsComponent } from './rbs/rbs.component';


@NgModule({
    declarations: [
        AppComponent,
        EbrListComponent,
        EbrEditComponent,
        RbsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule
        // RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule { }
