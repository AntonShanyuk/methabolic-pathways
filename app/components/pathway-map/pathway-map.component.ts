import { Component, Input } from '@angular/core';
import * as escher from 'escher-vis/js/dist/escher';

import * as html  from './pathway-map.component.html';

const template = String(html);

@Component({
    selector: 'pathway-map',
    template
})
export class PathwayMapComponent {
    _map: any = null;
    content: string = '';
    options = {
        "menu": "zoom", 
        "enable_keys": true,
        "enable_editing": true, 
        "scroll_behavior": "pan", 
        "fill_screen": true, 
        "ignore_bootstrap": false, 
        "never_ask_before_quit": false, 
        "reaction_data": null, 
        "metabolite_data": null, 
        "gene_data": null
    };

    @Input('map')
    set map(value: any) {
        this._map = value;
        escher.Builder(value, null, null, escher.libs.d3_select('#static_map'), this.options);
    }
} 