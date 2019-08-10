import {Zutat} from "./zutat";


export class Rezept{

  name: string;
  beschreibung: string;
  zubereitung: string;
  bild: URL;

  zutatenListe: Zutat[];

  constructor(mName, mBeschreibung, mZubereitung, mBild){
    this.name = mName;
    this.beschreibung = mBeschreibung;
    this.zubereitung = mZubereitung;
    this.bild = mBild;
  }
}
