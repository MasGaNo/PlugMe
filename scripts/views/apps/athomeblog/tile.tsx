'use strict';

import * as React from 'react';
import * as Tile from '../../grid/tile';
import {TileImage} from '../../grid/tile/image';
import {TileTitle} from '../../grid/tile/title';

export interface IAthomeBlogTileProps extends Tile.ITileProps {
}

interface IAthomeBlogPost {
    picture: string;
    url: string;
    label: string;
    description: string;
}

export interface IAthomeBlogTileState extends Tile.ITileState {
    posts: IAthomeBlogPost[];
    currentIndex: number;
}

export class AthomeBlogTile extends Tile.Tile {
    
    constructor(props: IAthomeBlogTileProps) {
        super(props);
        this.state = {
            posts: [{
                picture: "http://www.athome.lu/blog/wp-content/uploads/2016/05/mise-en-location-300x157.jpg",
                url: "http://www.athome.lu/blog/la-mise-en-location-les-documents-a-presenter-par-le-proprietaire/",
                label: "La mise en location : les documents a presenter",
                description: "Dans la premiere partie de cette serie d'articles sur la mise en location, nous vous parlions des obligations du proprietaire quant a l'etat du logement lors de la ..."
            }, {
                picture: "http://www.athome.lu/blog/wp-content/uploads/2016/05/toit-village-300x153.jpg",
                url: "http://www.athome.lu/blog/5-raisons-de-quitter-la-capitale-pour-vivre-a-la-campagne/",
                label: "5 raisons de quitter la capitale pour vivre a la campagne",
                description: "Partir vivre a la campagne loin de l'agitation de la ville, pour changer de vie ou pour trouver le calme et le grand air, chacun a ses propres ... "
            }],
            currentIndex: 0,
            size: this.state.size
        };
        this.onClickPost = this.onClickPost.bind(this);
    }
    
    private onClickPost() {
        let state = this.state as IAthomeBlogTileState;
        let posts = state.posts[state.currentIndex];
        window.open(posts.url, '_blank');
    }
    
    renderContent() {
        let state = this.state as IAthomeBlogTileState;
        let posts = state.posts[state.currentIndex];
        setTimeout(() => {
            
            let currentIndex = state.currentIndex + 1;
            if (currentIndex >= state.posts.length) {
                currentIndex = 0;
            }
            state.currentIndex = currentIndex;
            this.setState(state);
            
        }, 5000)
        return [
            <TileImage url={posts.picture} onClick={this.onClickPost} />,
            <TileTitle title={posts.label} />,
            <div className="slide-over op-orange padding10">
                {posts.description}
            </div>
        ];
    }
}