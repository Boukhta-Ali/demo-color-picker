import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxColorsModule } from 'ngx-colors';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CustomColorPickerComponent } from './custom-color-picker/custom-color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomColorPickerComponent
  ],
  imports: [
    BrowserModule,
    NgxColorsModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
