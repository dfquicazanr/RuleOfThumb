import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RulingListItemComponent } from './components/ruling-list-item/ruling-list-item.component';
import { TimeAgoExtendsPipe } from './pipes/time-ago-extends/time-ago-extends.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RulingGridItemComponent } from './components/ruling-grid-item/ruling-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RulingListItemComponent,
    TimeAgoExtendsPipe,
    RulingGridItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
