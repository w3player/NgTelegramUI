import { Component, Input } from '@angular/core';
import { classnames } from '../../../utils';

@Component({
  selector: 'tg-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
})
export class DividerComponent {
  @Input() class: string = '';

  get rootClass() {
    return classnames('divider', this.class);
  }
}
