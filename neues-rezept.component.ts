import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Zutat} from "../objekte/zutat";
import {Rezept} from "../objekte/rezept";
import {ZutatenListe} from "../objekte/zutatenListe";
import {element} from "protractor";
import {MatDialog} from "@angular/material";
import {NeueZutatComponent} from "../neue-zutat/neue-zutat.component";
import {disableBindings} from "@angular/core/src/render3";

@Component({
  selector: 'app-neues-rezept',
  templateUrl: './neues-rezept.component.html',
  styleUrls: ['./neues-rezept.component.css']
})
export class NeuesRezeptComponent implements OnInit {

  public name: string;
  public beschreibung: string;
  public zubereitung: string;
  public bild: URL;
  public neuesRezept: Rezept;
  public zutatname;


  public kategorie: string;
  public einheit: string;
  public menge: string;

  public zuListe = new ZutatenListe;

  public zwischenspeichern: Rezept;



  //Neu erstellte Zutaten werden hier in der Zutatenliste gespeichert
  zutatspeichern(mZutatname, mKategorie, mMenge, mEinheit) {

    this.data.zutatenListe.zutatenListe.forEach(element => {
      if(mZutatname==element.zutatname){
        var neueZutat= new Zutat(element.zutatname, element.kategorie, element.einheit, element.menge);
        this.zuListe.zutatenListe.push(element);
      }
    })
    /*

    for (let zutat of this.data.zutatenListe.zutatenListe){
      if (mZutatname.toLowerCase() != zutat.zutatname.toLowerCase()) {
        this.data.zutatenListe.zutatenListe.push(new Zutat(mZutatname, mKategorie, mMenge, mEinheit));
        break;
      }


    for (let z of this.zuListe){
      if (mZutatname.toLowerCase() != z.zutatname.toLowerCase()){
        this.zuListe.push(new Zutat(mZutatname, mKategorie, mMenge, mEinheit));
        break;

    }
    console.log(this.data.zutatenListe);
     */
    console.log(this.zuListe);
  }

//Neu erstellten Zutaten werden hier im Rezept gespeichert
  speichern(mName, mBeschreibung, mZutatenListe, mZubereitung, mBild) {
    this.zwischenspeichern = new Rezept(mName, mBeschreibung, mZubereitung, mBild);
    this.data.addRezept(this.zwischenspeichern);
  }


  constructor(private data: DataService, public dialog: MatDialog, dataService: DataService) {
    console.log(dataService.getData());
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NeueZutatComponent,
      {
        data: {
          myVar: "",
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }



}
