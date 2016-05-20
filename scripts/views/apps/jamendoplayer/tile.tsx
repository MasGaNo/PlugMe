'use strict';

import * as React from 'react';
import * as Tile from '../../grid/tile';

export interface IJamendoPlayerTileProps extends Tile.ITileProps {
    url:string;
}

export interface IJamendoPlayerTileState extends Tile.ITileState {
    
}



export class JamendoPlayerTile extends Tile.Tile {
    constructor(props: IJamendoPlayerTileProps) {
        super(props);
    }
    renderContent() {
        return (
            <iframe src={(this.props as IJamendoPlayerTileProps).url} />
        );
    }
}