import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StartseiteComponent} from './startseite/startseite.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatOptionModule, MatSelectModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from './details/details.component';
import {NeuesRezeptComponent} from './neues-rezept/neues-rezept.component';
import {FormsModule} from "@angular/forms";
import {NeueZutatComponent} from './neue-zutat/neue-zutat.component';
import {EinkaufslisteComponent} from './einkaufsliste/einkaufsliste.component';


const myroutes: Routes = [
  {path: 'anzeigeDetails', component: DetailsComponent},
  {path: '', component: StartseiteComponent},
  {path: 'neuesR', component: NeuesRezeptComponent},
  {path: 'neueZ', component: NeueZutatComponent},
  {path: 'start', component: StartseiteComponent},
  {path: 'einkaufskorb', component: EinkaufslisteComponent}]

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    DetailsComponent,
    NeuesRezeptComponent,
    NeueZutatComponent,
    EinkaufslisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(myroutes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
