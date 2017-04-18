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
  greenStyle = false;
  nodeTypes: { name: String, count: Number }[] = [];

  onFileSelected(event: Event) {
    const fileEventTarget: any = event.target;
    var reader = new FileReader();
    reader.onload = loadEvent => {
      const loadeEventTarget: any = loadEvent.target;
      this.map = JSON.parse(loadeEventTarget.result);

      const nodeTypesMap: any = {};
      Object.keys(this.map[1].nodes).forEach(key => {
        const name = this.map[1].nodes[key].node_type;
        if (nodeTypesMap[name] === undefined) {
          nodeTypesMap[name] = 0;
        } else {
          nodeTypesMap[name]++;
        }
      });
      for (var name in nodeTypesMap) {
        var count = nodeTypesMap[name];
        this.nodeTypes.push({ name, count });
      }
    }
    reader.readAsText(fileEventTarget.files[0]);
  }
}
