import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
  @Input("title") title: string = "";
  @Input("image") image: string = "";
}
