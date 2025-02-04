import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SideBarComponent {

  constructor( private gifsService: GifsService )
  {}


  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag(image: string ): void {
    this.gifsService.searchTag(image);
  }
}
