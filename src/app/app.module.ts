import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RulingListItemComponent } from './components/ruling-list-item/ruling-list-item.component';
import { TimeAgoExtendsPipe } from './pipes/time-ago-extends/time-ago-extends.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RulingListItemComponent,
    TimeAgoExtendsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
