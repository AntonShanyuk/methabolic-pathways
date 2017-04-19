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
  genes: string[] = [];

  onFileSelected(event: Event) {
    const fileEventTarget: any = event.target;
    var reader = new FileReader();
    reader.onload = loadEvent => {
      const loadeEventTarget: any = loadEvent.target;
      this.map = JSON.parse(loadeEventTarget.result);

      this._processNodeTypes();
      this._processGenes();
    }
    reader.readAsText(fileEventTarget.files[0]);
  }

  _processNodeTypes() {
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

  _processGenes() {
    const genesMap: any = {};

    const reactions = this.map[1].reactions;
    Object.keys(reactions).forEach(key => {
      for (let i = 0; i < reactions[key].genes.length; i++) {
        const gene = reactions[key].genes[i];
        const reactionGenes: any = {};
        
        if(reactionGenes[gene.name]) {
          continue;
        }
        reactionGenes[gene.name] = true;

        if(genesMap[gene.name] === undefined) {
          genesMap[gene.name] = 0;
        } else if(genesMap[gene.name] === 0) {
          this.genes.push(gene.name);
          genesMap[gene.name]++;
        }
      }
    });
  }
}
