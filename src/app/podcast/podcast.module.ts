import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({

  declarations: [SingleComponent, ListComponent, FavoriteComponent],
  imports: [
    CommonModule
  ] , exports : [SingleComponent,  ListComponent , FavoriteComponent]

})

export class PodcastModule {

}
