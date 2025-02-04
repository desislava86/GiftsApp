import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `
})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>; //txtTagInput! con la explamacion siempre va a tener un valor

  constructor( private  gifService: GifsService) {
  }

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }
}
