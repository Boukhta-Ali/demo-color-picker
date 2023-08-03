import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Couleur} from '../../assets/defaulColors';

@Component({
  selector: 'app-custom-color-picker',
  templateUrl: './custom-color-picker.component.html',
  styleUrls: ['./custom-color-picker.component.css']
})
export class CustomColorPickerComponent implements OnInit {

  /**
   * Emits the value of the selected color when changed
   */
  @Output() onChangeColor: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Input data
   */
  @Input() selectedColor: any = null;
  @Input() colorPalette : Array<Couleur> = [];
  @Input() excludedColors : Array<string> = [];

  constructor() {
  }

  /**
   * On Init, Exclude Given colors from palette
   */
  ngOnInit(): void {
    this.hideSpecificColors(this.excludedColors);
  }

  /**
   * Emit an event when the selected value is changed
   * @param event
   */
  onChange(event: any){
    this.onChangeColor.emit(event);
  }

  /**
   *
   * @param excludedColors colors to exclude from the palette (pre-defined sorting key colors)
   * @private
   */
  private hideSpecificColors(excludedColors: string[]) {

    this.colorPalette.forEach(color => {

      const indicesToRemove: number[] = [];

      color.variants.forEach((variant, index) => {
        if (excludedColors.includes(variant)) {
          indicesToRemove.push(index);
        }
      });

      indicesToRemove.reverse().forEach(index => color.variants.splice(index, 1));

      if (color.variants.length > 0) {
        if (excludedColors.includes(color.preview)) {
          color.preview = color.variants[0];
        }
      }
    });
  }
}
