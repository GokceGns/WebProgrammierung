import {Component, Inject, OnInit} from '@angular/core';
import {ZutatenListe} from "../objekte/zutatenListe";
import {Rezept} from "../objekte/rezept";
import {DataService} from "../data.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Zutat} from "../objekte/zutat";

@Component({
  selector: 'app-neue-zutat',
  templateUrl: './neue-zutat.component.html',
  styleUrls: ['./neue-zutat.component.css']
})
export class NeueZutatComponent implements OnInit {



  public zutatenListe= new ZutatenListe();
  public zutatname: string;

  public kategorie: string;
  public einheit: string;
  public menge: string;

  speichern(mZutatname, mKategorie, mMenge , mEinheit ) {

    this.data.zutatenListe.zutatenListe.push(new Zutat(mZutatname, mKategorie, mMenge, mEinheit));
    this.dialogRef.close();
  /*
    for (let zutat of this.data.zutatenListe.zutatenListe){
      if (mZutatname.toLowerCase() != zutat.zutatname.toLowerCase()) {
        this.data.zutatenListe.zutatenListe.push(new Zutat(mZutatname, mKategorie, mMenge, mEinheit));
        break;
      }
    }
    console.log(this.data.zutatenListe);*/
  }

  constructor(private data: DataService, public dialog: MatDialog, dataService: DataService, public dialogRef: MatDialogRef<NeueZutatComponent>,
              @Inject(MAT_DIALOG_DATA)public dataa: any)

  {console.log(dataService.getData());}

  ngOnInit() {
  }

}
