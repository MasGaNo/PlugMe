'use strict';

import * as Tile from '../tile';

interface ITileLargeProps extends Tile.ITileProps {
    
}

interface ITileLargeState extends Tile.ITileState {
    
}

class TileLarge extends Tile.Tile {
    constructor(props: ITileLargeProps) {
        super(props);
    }
}