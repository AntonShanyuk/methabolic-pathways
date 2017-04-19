import { Component, Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import * as escher from 'escher-vis/js/dist/escher';

import * as html from './pathway-map.component.html';

const template = String(html);

@Component({
    selector: 'pathway-map',
    template
})
export class PathwayMapComponent implements AfterViewInit {
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
        try {
            escher.Builder(value, null, null, escher.libs.d3_select('#static_map'), this.options);
        } catch (error) {
            this.buildError.emit(error);
        }
    }

    @Output('pathSelected') pathSelected = new EventEmitter<any>();
    @Output('buildError') buildError = new EventEmitter<any>();

    ngAfterViewInit() {
        const segmentIdRegex = /s(\d+)/;
        const reactionIdRegex = /r(\d+)/;
        window.addEventListener('click', (event: Event) => {
            const targetElement = <Element>event.target;
            if (targetElement.tagName === 'path') {
                const segmentGroupElement = targetElement.parentElement;
                const reactionElement = segmentGroupElement.parentElement;

                const reactionId = reactionElement.id.match(reactionIdRegex)[1];
                const segmentGroupId = segmentGroupElement.id.match(segmentIdRegex)[1];

                const reaction = this._map[1].reactions[reactionId];
                const segment = reaction.segments[segmentGroupId];

                const fromNode = this._map[1].nodes[segment.from_node_id];
                const toNode = this._map[1].nodes[segment.to_node_id];

                this.pathSelected.emit({ fromNode, toNode });
            }
        }, true);
    }
} 