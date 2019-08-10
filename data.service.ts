import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Rezept} from "./objekte/rezept";
import {RezeptListe} from "./objekte/rezeptListe";
import {Zutat} from "./objekte/zutat";
import {ZutatenListe} from "./objekte/zutatenListe";
import {Kategorie} from "./objekte/kategorie";
import {Kategorieliste} from "./objekte/kategorieliste";
import {isNewline} from "codelyzer/angular/styles/cssLexer";


const daten = [];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rezeptListSubject: BehaviorSubject<Rezept[]> = new BehaviorSubject<Rezept[]>([]);
  rezeptListe: Observable<Rezept[]> = this.rezeptListSubject.asObservable();


  // @ts-ignore
  anfangsRezeptListe = new RezeptListe();

  anzeigeDetails: Rezept; //um Rezeptdetails in der Detailansicht anzeigen zu können

  zutatenListe = new ZutatenListe(); //leere Zutatenliste, um neue Zutaten speichern zu können

  neuesRezept: Rezept;
  daten: Array<string>;


  //mit addRezept werden neue Rezepte in die Rezeptliste gespeichert
  addRezept(rezept: Rezept) {
    const rezeptListe = this.rezeptListSubject.value;
    rezeptListe.push(rezept);
    this.rezeptListSubject.next(rezeptListe);

  }

  showBasicRecipes() {
    this.anfangsRezeptListe.rezeptListe.forEach(value => {
      this.addRezept(value);
    });
  }

  getData() {
    return this.daten;
  }


  constructor() {
    this.anfangsRezeptListe.rezeptListe.push(new Rezept('Pizza', 'Hauptspeise', 'Warmes Wasser in die Schüssel einer Knetmaschine geben, darin die Hefe auflösen. Das Salz und ca. 100 g Mehl hinzufügen und die Knetmaschine starten (vom händischen Kneten ist abzuraten, da nur mit großer Anstrengung ein passables Ergebnis zu erreichen ist). Nach und nach das restliche Mehl hinzugeben, hierbei nicht hetzen (nach Norm sollte dieser Schritt 10 Minuten dauern).\n' +
      'Danach die Knetmaschine bei geringer Geschwindigkeit weitere 20 Minuten arbeiten lassen. Der Teig sollte danach nicht mehr kleben und weich und elastisch sein. Den Teig mit einem feuchten Tuch abdecken und für 2 Stunden bei Raumtemperatur ruhen lassen.\n' +
      '\n' +
      'Anschließend den Teig in kleine Kugeln separieren (z. B. 6 Kugeln für 6 Pizzen von 30 cm Durchmesser) und diese in einer mit einem feuchten Tuch bedeckten Schüssel weitere 4 bis 6 Stunden bei Raumtemperatur gehen lassen.\n' +
      '\n' +
      'Die einzelne Teigkugel auf eine dünne Schicht Mehl legen (Weizendunst). Mit dem Nudelholz oder auch händisch eine dünne Teigscheibe formen (nach Norm 0,4 cm ± 10 % in der Mitte und 1-2 cm dick am Rand). Die Teigscheibe je nach Zubereitung entweder auf die Pizzaschaufel geben (bei Backen mit Pizzastein) oder auf das Blech.\n' +
      '\n' +
      'Zunächst die Tomatensoße spiralförmig auf der Teigscheibe verteilen. Dann mit Gratinierkäse bestreuen, nicht zu viel, 50-80 g. Erst jetzt den weiteren Belag nach Belieben darauf geben. Wichtig: etwa 1 EL Olivenöl über den Belag träufeln.\n' +
      '\n' +
      'Backen mit Pizzastein:\n' +
      'Den Ofen mit eingelegtem Pizzastein auf maximale Ofentemperatur vorheizen (Nach Norm 485°C), die Pizza einschießen, davor das "Rutschen" der Pizza testen. Nicht dass sie klebt und den Stein versaut! Bei dieser hohen Temperatur, die im Haushalt meist nicht erreicht werden kann, ist die Pizza nach ca. 2 Minuten fertig, bei niedrigeren Temperaturen braucht sie entsprechend länger. Der Rand soll hellbraun und knusprig sein.\n' +
      '\n' +
      'Backen auf dem Blech: \n' +
      'Den Ofen auf maximale Temperatur vorheizen, das Blech einschieben und bei 485° ist die Pizza nach ca. 4 Minuten fertig, bei niedrigerer Temperatur braucht sie natürlich auch auf dem Blech länger.', ''));

    this.anfangsRezeptListe.rezeptListe.push(new Rezept('Apfelkuchen', 'Dessert',
      '1. Äpfel schälen, vierteln, Kerngehäuse herausschneiden und Fruchtfleisch in Würfel schneiden. +' +

      '2. Fett, Zucker und Salz mit den Schneebesen des Handrührgerätes weißcremig aufschlagen. 3. Eier nacheinander unterrühren. Puddingpulver, Mehl und Backpulver mischen. Mehl-Mischung und Milch abwechselnd unter den Teig heben. Äpfel unter den Teig heben. Teig in eine gefettete, mit Mehl ausgestäubte Springform (26 cm Ø) geben und glatt streichen. Kuchen im vorgeheizten Backofen (E-Herd: 175 °C/ Umluft: 150 °C/ Gas: s. Hersteller) ca. 45 Minuten backen. 4. Kuchen aus dem Ofen nehmen, auf einem Kuchengitter auskühlen lassen und aus der Form lösen. Mit Puderzucker bestäuben.',
      ''));


    this.anfangsRezeptListe.rezeptListe.push(new Rezept('Waffel','Dessert','.....',''));


    /*
        this.zutatenListe.zutatenListe.push(new Zutat('Apfel', 'Frucht','1', 'kg'));
        this.zutatenListe.zutatenListe.push(new Zutat('Spinat', 'Gemüse','2', 'Gramm'));
        this.zutatenListe.zutatenListe.push(new Zutat('Steak', 'Fleisch','', '1'));
        this.zutatenListe.zutatenListe.push(new Zutat('Käse', 'Milch','liter', '1'));
        this.zutatenListe.zutatenListe.push(new Zutat('Obst', 'Bio','', '1'));
        this.zutatenListe.zutatenListe.push(new Zutat('Wasser', 'Getränk',null, '1'));
    */

    this.daten = daten;
    this.showBasicRecipes();
  }
}
