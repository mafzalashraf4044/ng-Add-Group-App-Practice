import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

declare var firebase: any;


//Services
import {GroupList} from './grouplist.service';

//Components
import { Home } from './home.component';
import { GroupSearch } from './groupsearch.component';
import { Group } from './group.component';
import { AddGroup } from './addgroup.component';
import { JoinGroup } from './joingroup.component';
import { DeleteGroup } from './deletegroup.component';

//Routers
import { RouterModule, Router, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',          redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: Home },
  { path: 'addgroup', component: AddGroup },
  { path: 'joingroup', component: JoinGroup },
  { path: 'delete', component: DeleteGroup }    
];

@NgModule({
  declarations: [AppComponent, Home, GroupSearch, Group, AddGroup, JoinGroup, DeleteGroup],
  imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [GroupList],
  bootstrap: [AppComponent]
})

export class AppModule { }
