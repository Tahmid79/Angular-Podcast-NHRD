import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PodcastModule } from './podcast/podcast.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomModule } from './bottom/bottom.module';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule , PodcastModule , BottomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
