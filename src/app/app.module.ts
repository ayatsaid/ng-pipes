import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
