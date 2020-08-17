import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [GalleryComponent, FooterComponent],
  imports: [
    CommonModule
  ] , exports : [GalleryComponent , FooterComponent]
})
export class BottomModule { }
