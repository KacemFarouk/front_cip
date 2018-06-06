import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { NewCipComponent } from './userhome/cip/new-cip/new-cip.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BdrhComponent } from './admin-home/bdrh/bdrh.component';
import { Cip1Component } from './admin-home/cip1/cip1.component';

import { ValidHomeComponent } from './valid-home/valid-home.component';
import { ListeComponent } from './valid-home/liste/liste.component';
import { ValidhistoryComponent } from './valid-home/validhistory/validhistory.component';

import {HistoriqueCipComponent} from './userhome/cip/historique-cip/historique-cip.component';
import {CipComponent} from './userhome/cip/cip.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CipService} from './services/cip.service';
import {GainService} from './services/gain.service';
import {UserService} from './services/user.service';
import {DepartementService} from './services/departement.service';
import { HomeAdComponent } from './AdminTemp/home-ad/home-ad.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import {ModalModule} from 'ng-bootstrap-modal';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ProfilComponent } from './home/profil/profil.component';
import { MessagesComponent } from './home/messages/messages.component';
import { GiftsComponent } from './userhome/cip/gifts/gifts.component';
import {LoginService} from './services/login.service';
import {ProgresComponent} from './userhome/cip/historique-cip/progres/progres.component';
import {ValidationComponent} from './admin-home/cip1/validation/validation.component';




const router: Routes =[
  { path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  {path:'userhome',component:UserhomeComponent},
  {path:'userhome/cip',component:CipComponent},
  {path:'userhome/cip/new',component:NewCipComponent},
  {path:'userhome/cip/historique-cip',component:HistoriqueCipComponent},
  {path:'userhome/cip/historique-cip/progres/:numero/:controlling',component:ProgresComponent},

  {path:'adminhome',component:AdminHomeComponent},
  {path:'adminhome/cip1',component:Cip1Component},
  {path:'adminhome/cip1/validation/:numero',component:ValidationComponent},
  {path:'adminhome/bdrh',component:BdrhComponent},

  {path:'validhome',component:ValidHomeComponent},
  {path:'validhome/liste',component:ListeComponent},
  {path:'validhome/validhistory',component:ValidhistoryComponent},
  {path:'profil',component:ProfilComponent},
  {path:'messages',component:MessagesComponent},
  {path:'userhome/cip/cadeaux',component:GiftsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,


    UserhomeComponent,
    CipComponent,
    NewCipComponent,
    HistoriqueCipComponent,
    AdminHomeComponent,
    BdrhComponent,
    Cip1Component,
    ValidHomeComponent,
    ListeComponent,
    ValidhistoryComponent,
    ValidationComponent,
    HomeAdComponent,
    SidebarComponent,
    ProfilComponent,
    MessagesComponent,
    GiftsComponent,
    ProgresComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router),
    ModalModule
  ],
  providers: [CipService,GainService,UserService,DepartementService,  NgbModal , NgbModalStack,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
