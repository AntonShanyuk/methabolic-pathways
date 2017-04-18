import { Component } from '@angular/core';
import * as css from './app.component.css';
import * as html from './app.component.html'

const styles = [String(css)];
const template: string = String(html);

@Component({
  selector: 'app',
  template,
  styles
})
export class AppComponent {
  map: any = null;

  onFileSelected(event: Event) {
    const fileEventTarget: any = event.target;
    var reader = new FileReader();
    reader.onload = loadEvent => {
      const loadeEventTarget: any = loadEvent.target;
      this.map = JSON.parse(loadeEventTarget.result);
    }
    reader.readAsText(fileEventTarget.files[0]);
  }
}
