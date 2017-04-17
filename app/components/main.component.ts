import { Component } from '@angular/core';
import * as css from './main.component.css';

const styles: string[] = [ String(css) ];

@Component({
  selector: 'app',
  template: `<h1>Hello {{name}}</h1>`,
  styles
})
export class MainComponent { name = 'Angular'; }
