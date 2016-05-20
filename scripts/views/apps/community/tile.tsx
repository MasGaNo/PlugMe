'use strict';

import * as React from 'react';
import * as Tile from '../../grid/tile';
import {TileImage} from '../../grid/tile/image';
import {TileTitle} from '../../grid/tile/title';

export interface ICommunityTileProps extends Tile.ITileProps {
}

export interface ICommunityTileState extends Tile.ITileState {
    
}



export class CommunityTile extends Tile.Tile {
    constructor(props: ICommunityTileProps) {
        super(props);
    }
    renderContent() {
        return [
            <TileImage url="img/apps/community/test.jpeg" />,
            <TileTitle title="Engagement Survey - IPP Style!" />,
            <div className="slide-over op-red padding10">
                Move over REA Band...<br/><br/>
                There's a new musical act on the block.<br/><br/>
                Introducing...THE MIXED SPICES!<br/>
            </div>
        ];
    }
}