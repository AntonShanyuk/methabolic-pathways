import { Component } from '@angular/core';
import * as css from './app.component.css';
import * as html from './app.component.html'

const styles  = [ String(css) ];
const template: string  = String(html);

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent {  
  onFileSelected(event: Event) {
  }
}
