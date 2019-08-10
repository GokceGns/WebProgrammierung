import { Component, OnInit } from '@angular/core';
import {Rezept} from "../objekte/rezept";
import {DataService} from "../data.service";

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {

  rezeptListe: Rezept[];

  

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.rezeptListe.subscribe(value=> {
      this.rezeptListe = value;
    });
  }




}
