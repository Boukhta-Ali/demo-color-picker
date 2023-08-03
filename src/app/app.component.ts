import { Component } from '@angular/core';
import { Couleur, defaultColors } from '../assets/defaulColors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedColor : any = "#e3f2fd";
  palette : Array<Couleur> = defaultColors;
  excludedColors : Array<string> =["#FFEBEE", "#FFCDD2", "#ECEFF1"];

  constructor() {

  }

  updateColor($event: string) {
    this.selectedColor = $event;
  }
}
